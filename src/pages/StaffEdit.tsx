import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StaffForm from '../components/StaffForm';
import { StaffProfile } from '../types/staff';
import { getStaffById, updateStaff } from '../services/staffService';

const StaffEdit = () => {
  const { id } = useParams<{ id: string }>();
  const [staff, setStaff] = useState<StaffProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Edit Staff Profile';
    
    const fetchStaff = async () => {
      try {
        if (!id) return;
        
        const data = await getStaffById(id);
        setStaff(data);
      } catch (err) {
        setError('Failed to load staff profile. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, [id]);

  const handleSubmit = async (data: StaffProfile) => {
    if (!id) return;
    await updateStaff(id, data);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !staff) {
    return (
      <div className="bg-error/10 border border-error/30 text-error p-4 rounded-md">
        {error || 'Staff profile not found.'}
      </div>
    );
  }

return (
  <>
    <div className="fixed inset-0 bg-black/30 z-30" />

    {/* Floating card container */}
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 overflow-y-auto">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 p-6 relative max-h-[95vh] overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-neutral-800">Edit Staff Profile</h1>
          <p className="text-neutral-500 mt-1">
            Update staff member information by modifying the form below.
          </p>
        </div>

        <StaffForm 
          initialData={staff}
          onSubmit={handleSubmit}
          title="Staff Profile Edit"
        />
      </div>
    </div>
  </>
);

};

export default StaffEdit;