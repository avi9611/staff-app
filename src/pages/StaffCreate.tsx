import { useEffect } from 'react';
import StaffForm from '../components/StaffForm';
import { StaffProfile } from '../types/staff';
import { createStaff } from '../services/staffService';

const StaffCreate = () => {
  useEffect(() => {
    document.title = 'Create Staff Profile';
  }, []);

  const handleSubmit = async (data: StaffProfile) => {
    await createStaff(data);
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black bg-opacity-50" />

      {/* Modal container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl overflow-hidden max-h-[90vh]">
          <StaffForm 
            onSubmit={handleSubmit}
            title="Create Staff Profile"
          />
        </div>
      </div>
    </>
  );
};

export default StaffCreate;
