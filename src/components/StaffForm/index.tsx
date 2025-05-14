import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { StaffProfile } from '../../types/staff';
import ProfileSection from './ProfileSection';
import RelatedInfoSection from './RelatedInfoSection';

interface StaffFormProps {
  initialData?: StaffProfile;
  onSubmit: (data: StaffProfile) => Promise<void>;
  title: string;
}

const StaffForm = ({ initialData, onSubmit, title }: StaffFormProps) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    setValue,
    watch 
  } = useForm<StaffProfile>({
    defaultValues: initialData || {
      staffCode: '',
      firstName: '',
      lastName: '',
      email: '',
      status: '',
      jobPosition: '',
      twoFactorAuth: false
    }
  });

  const handleFormSubmit = async (data: StaffProfile) => {
    try {
      setIsSubmitting(true);
      await onSubmit(data);
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col max-h-[90vh] overflow-hidden w-full">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-neutral-200">
        <h1 className="text-2xl font-medium text-neutral-800">{title}</h1>
        <button
          type="button"
          className="text-neutral-500 hover:text-neutral-700"
          onClick={() => navigate('/')}
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-neutral-200">
        <nav className="flex overflow-x-auto">
          <button
            type="button"
            className={`tab ${activeTab === 'profile' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            type="button"
            className={`tab ${activeTab === 'relatedInfo' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('relatedInfo')}
          >
            Related information
          </button>
        </nav>
      </div>

      <form 
        onSubmit={handleSubmit(handleFormSubmit)} 
        className="flex flex-col flex-1 overflow-hidden"
      >
        {/* Scrollable form body */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'profile' && (
            <ProfileSection 
              register={register} 
              errors={errors} 
              setValue={setValue}
              watch={watch}
              control={{}}
            />
          )}
          {activeTab === 'relatedInfo' && (
            <RelatedInfoSection 
              register={register} 
              errors={errors}
              control={{}}
            />
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 p-6 border-t border-neutral-200 bg-white">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/')}
          >
            Close
          </button>
          <motion.button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </motion.button>
        </div>
      </form>
    </div>
  );
};


export default StaffForm;