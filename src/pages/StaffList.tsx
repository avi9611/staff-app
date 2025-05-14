import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Search,
  UserX,
  Eye,
  Edit,
  Trash,
  Phone,
  Mail,
  User,
} from "lucide-react";
import { StaffProfile } from "../types/staff";
import { getAllStaff, deleteStaff } from "../services/staffService";

const StaffList = () => {
  const [staffList, setStaffList] = useState<StaffProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Staff List";
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      setLoading(true);
      const data = await getAllStaff();
      setStaffList(data);
    } catch (err) {
      setError("Failed to load staff list. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    console.log("Trying to delete staff with id:", id);
    try {
      await deleteStaff(id);
      setStaffList((prevList) => prevList.filter((staff) => staff._id !== id));
      setConfirmDelete(null);
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };

  const filteredStaff = staffList.filter(
    (staff) =>
      `${staff.firstName} ${staff.lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      staff.staffCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (staff.phone && staff.phone.includes(searchTerm))
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-error/10 border border-error/30 text-error p-4 rounded-md">
        {error}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-neutral-800">
            Staff Profiles
          </h1>
          <p className="text-neutral-500 mt-1 text-sm md:text-base">
            Manage your organization's staff profiles
          </p>
        </div>

        <Link to="/staff/create" className="btn btn-primary btn-sm md:btn-md">
          <Plus className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Add Staff</span>
          <span className="sm:hidden">Add</span>
        </Link>
      </div>

      <div className="card overflow-hidden">
        <div className="p-3 md:p-4 border-b border-neutral-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search staff..."
              className="w-full pl-9 md:pl-10 pr-4 py-2 text-sm md:text-base border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {filteredStaff.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 md:py-16 px-4 text-center">
            <UserX className="h-12 w-12 md:h-16 md:w-16 text-neutral-300 mb-3 md:mb-4" />
            <h3 className="text-base md:text-lg font-medium text-neutral-700 mb-1">
              No staff found
            </h3>
            <p className="text-neutral-500 text-sm md:text-base max-w-md mb-4 md:mb-6">
              {searchTerm
                ? `No staff matching "${searchTerm}" were found.`
                : "No staff profiles have been created yet."}
            </p>
            {!searchTerm && (
              <Link to="/staff/create" className="btn btn-primary btn-sm md:btn-md">
                <Plus className="h-4 w-4 mr-2" />
                Add Staff
              </Link>
            )}
          </div>
        ) : (
          <>
            {/* Mobile View - Card Layout */}
            <div className="md:hidden space-y-3 p-3">
              {filteredStaff.map((staff) => (
                <div key={staff._id} className="border border-neutral-200 rounded-lg p-4 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-neutral-200 overflow-hidden flex items-center justify-center">
                        {staff.profileImage ? (
                          <img
                            src={staff.profileImage}
                            alt={`${staff.firstName} ${staff.lastName}`}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <User className="h-4 w-4 text-neutral-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-neutral-800">
                          {staff.firstName} {staff.lastName}
                        </h3>
                        <p className="text-xs text-neutral-500">{staff.staffCode}</p>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold capitalize
                        ${staff.status === "active" && "bg-green-100 text-green-700"}
                        ${staff.status === "inactive" && "bg-neutral-200 text-neutral-700"}
                        ${staff.status === "on_leave" && "bg-yellow-100 text-yellow-700"}
                        ${staff.status === "terminated" && "bg-red-100 text-red-700"}
                      `}
                    >
                      {staff.status.replace('_', ' ')}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm mb-4">
                    {staff.jobPosition && (
                      <p className="text-neutral-700">
                        <span className="font-medium">Position:</span> {staff.jobPosition}
                      </p>
                    )}
                    {staff.email && (
                      <div className="flex items-center gap-2 text-neutral-700">
                        <Mail className="h-4 w-4 text-neutral-400" />
                        <span className="truncate">{staff.email}</span>
                      </div>
                    )}
                    {staff.phone && (
                      <div className="flex items-center gap-2 text-neutral-700">
                        <Phone className="h-4 w-4 text-neutral-400" />
                        <span>{staff.phone}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Link
                      to={`/staff/${staff._id}`}
                      className="btn btn-ghost btn-sm p-2"
                      title="View"
                    >
                      <Eye className="h-4 w-4" />
                    </Link>
                    <Link
                      to={`/staff/${staff._id}/edit`}
                      className="btn btn-ghost btn-sm p-2"
                      title="Edit"
                    >
                      <Edit className="h-4 w-4" />
                    </Link>
                    <button
                      className="btn btn-ghost btn-sm p-2 text-error hover:bg-error/10"
                      onClick={() => setConfirmDelete(staff._id || "")}
                      title="Delete"
                    >
                      <Trash className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Desktop View - Table Layout */}
            <div className="hidden md:block overflow-x-auto rounded-xl shadow-md border border-neutral-200 bg-white">
              <table className="min-w-full divide-y divide-neutral-200 text-sm">
                <thead className="bg-neutral-100 text-neutral-700 text-xs uppercase tracking-wide">
                  <tr>
                    <th className="py-4 px-6 text-left">Staff Code</th>
                    <th className="py-4 px-6 text-left">Name</th>
                    <th className="py-4 px-6 text-left">Contact</th>
                    <th className="py-4 px-6 text-left">Position</th>
                    <th className="py-4 px-6 text-left">Status</th>
                    <th className="py-4 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {filteredStaff.map((staff) => (
                    <tr
                      key={staff._id}
                      className="hover:bg-neutral-50 transition"
                    >
                      <td className="py-4 px-6">{staff.staffCode}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-full bg-neutral-200 overflow-hidden flex items-center justify-center">
                            {staff.profileImage ? (
                              <img
                                src={staff.profileImage}
                                alt={`${staff.firstName} ${staff.lastName}`}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <User className="h-4 w-4 text-neutral-400" />
                            )}
                          </div>
                          <span className="font-medium text-neutral-800">
                            {staff.firstName} {staff.lastName}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex flex-col gap-1 text-sm text-neutral-700">
                          {staff.email && (
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-neutral-400" />
                              <span>{staff.email}</span>
                            </div>
                          )}
                          {staff.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-neutral-400" />
                              <span>{staff.phone}</span>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6">{staff.jobPosition}</td>
                      <td className="py-4 px-6">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold capitalize
                            ${staff.status === "active" && "bg-green-100 text-green-700"}
                            ${staff.status === "inactive" && "bg-neutral-200 text-neutral-700"}
                            ${staff.status === "on_leave" && "bg-yellow-100 text-yellow-700"}
                            ${staff.status === "terminated" && "bg-red-100 text-red-700"}
                          `}
                        >
                          {staff.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Link
                            to={`/staff/${staff._id}`}
                            className="icon-btn"
                            title="View"
                          >
                            <Eye className="h-4 w-4" />
                          </Link>
                          <Link
                            to={`/staff/${staff._id}/edit`}
                            className="icon-btn"
                            title="Edit"
                          >
                            <Edit className="h-4 w-4" />
                          </Link>
                          <button
                            className="icon-btn text-error hover:bg-error/10"
                            onClick={() => setConfirmDelete(staff._id || "")}
                            title="Delete"
                          >
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {confirmDelete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 animate-fade-in">
            <h3 className="text-lg font-medium text-neutral-800 mb-2">
              Confirm Deletion
            </h3>
            <p className="text-neutral-600 mb-6">
              Are you sure you want to delete this staff profile? This action
              cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="btn btn-secondary"
                onClick={() => setConfirmDelete(null)}
              >
                Cancel
              </button>
              <button
                className="btn btn-error"
                onClick={() => confirmDelete && handleDelete(confirmDelete)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StaffList;