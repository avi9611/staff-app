import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Edit, Mail, Phone, GraduationCap, Briefcase, User, ArrowLeft, Facebook, Linkedin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { StaffProfile } from '../types/staff';
import { getStaffById } from '../services/staffService';
import ProfileImage from '../components/ProfileImage';

const StaffDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [staff, setStaff] = useState<StaffProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('general');

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        if (!id) return;
        
        const data = await getStaffById(id);
        setStaff(data);
        document.title = `${data.firstName} ${data.lastName} - Staff Profile`;
      } catch (err) {
        setError('Failed to load staff profile. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, [id]);

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
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-2">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Staff List
          </Link>
          <h1 className="text-2xl font-bold text-neutral-800">Staff Profile</h1>
        </div>
        
        <Link 
          to={`/staff/${id}/edit`}
          className="btn btn-primary inline-flex self-start"
        >
          <Edit className="h-4 w-4 mr-2" />
          Edit Profile
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="card p-6 text-center">
            <div className="flex justify-center mb-4">
              <ProfileImage imageUrl={staff.profileImage} readOnly />
            </div>
            
            <h2 className="text-xl font-semibold mb-1">
              {staff.firstName} {staff.lastName}
            </h2>
            
            <p className="text-neutral-500 mb-6">{staff.jobPosition}</p>
            
            <div className="flex justify-center space-x-3 mb-6">
              {staff.facebook && (
                <a href={staff.facebook} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {staff.linkedin && (
                <a href={staff.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {staff.skype && (
                <a href={`skype:${staff.skype}?chat`} className="text-primary hover:text-primary-dark">
                  <MessageSquare className="h-5 w-5" />
                </a>
              )}
            </div>
            
            <div className="space-y-3 text-left">
              {staff.email && (
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-neutral-400 mr-3" />
                  <a href={`mailto:${staff.email}`} className="text-neutral-700 hover:text-primary">
                    {staff.email}
                  </a>
                </div>
              )}
              
              {staff.phone && (
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-neutral-400 mr-3" />
                  <a href={`tel:${staff.phone}`} className="text-neutral-700 hover:text-primary">
                    {staff.phone}
                  </a>
                </div>
              )}
              
              {staff.academicLevel && (
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-neutral-400 mr-3" />
                  <span className="text-neutral-700">{staff.academicLevel}</span>
                </div>
              )}
              
              {staff.workplace && (
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-neutral-400 mr-3" />
                  <span className="text-neutral-700">{staff.workplace}</span>
                </div>
              )}
            </div>
          </div>
          
          {staff.directManager && (
            <div className="card p-6 mt-6">
              <h3 className="text-md font-medium mb-4">Direct manager</h3>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center mr-3">
                  <User className="h-6 w-6 text-neutral-400" />
                </div>
                <div>
                  <p className="text-neutral-800 font-medium">{staff.directManager}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="lg:col-span-3">
          <div className="card">
            <div className="border-b border-neutral-200">
              <nav className="flex overflow-x-auto">
                <button
                  type="button"
                  className={`tab ${activeTab === 'general' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('general')}
                >
                  General information
                </button>
                <button
                  type="button"
                  className={`tab ${activeTab === 'related' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('related')}
                >
                  Related information
                </button>
              </nav>
            </div>
            
            <div className="p-6">
              {activeTab === 'general' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Staff code</p>
                    <p className="text-neutral-800">{staff.staffCode || 'Not provided'}</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Staff name</p>
                    <p className="text-neutral-800">{staff.firstName} {staff.lastName}</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Gender</p>
                    <p className="text-neutral-800">{staff.gender || 'Not provided'}</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Birthday</p>
                    <p className="text-neutral-800">{staff.birthday || 'Not provided'}</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Phone</p>
                    <p className="text-neutral-800">{staff.phone || 'Not provided'}</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Workplace</p>
                    <p className="text-neutral-800">{staff.workplace || 'Not provided'}</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Status</p>
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      staff.status === 'active' ? 'bg-success/10 text-success' :
                      staff.status === 'inactive' ? 'bg-neutral-200 text-neutral-600' :
                      staff.status === 'on_leave' ? 'bg-warning/10 text-warning' :
                      'bg-error/10 text-error'
                    }`}>
                      {staff.status}
                    </div>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Job position</p>
                    <p className="text-neutral-800">{staff.jobPosition || 'Not provided'}</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Academic level</p>
                    <p className="text-neutral-800">{staff.academicLevel || 'Not provided'}</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Hourly Rate</p>
                    <p className="text-neutral-800">{staff.hourlyRate || 'Not provided'}</p>
                  </div>
                  
                  <div className="col-span-1 md:col-span-2 border-b pb-3">
                    <p className="text-sm text-neutral-500">Email Signature</p>
                    <div className="mt-1 p-3 bg-neutral-50 rounded-md">
                      {staff.emailSignature || 'No email signature provided'}
                    </div>
                  </div>
                  
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-sm text-neutral-500">Other information</p>
                    <p className="text-neutral-800 mt-1">{staff.otherInformation || 'Not provided'}</p>
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'related' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Citizen identification</p>
                    <p className="text-neutral-800">{staff.citizenIdentification || 'Not provided'}</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Date of issue</p>
                    <p className="text-neutral-800">{staff.dateOfIssue || 'Not provided'}</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Place of birth</p>
                    <p className="text-neutral-800">{staff.placeOfBirth || 'Not provided'}</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Current address</p>
                    <p className="text-neutral-800">{staff.currentAddress || 'Not provided'}</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Bank account number</p>
                    <p className="text-neutral-800">{staff.bankAccountNumber || 'Not provided'}</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Bank account name</p>
                    <p className="text-neutral-800">{staff.bankAccountName || 'Not provided'}</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Bank name</p>
                    <p className="text-neutral-800">{staff.bankName || 'Not provided'}</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Personal tax code</p>
                    <p className="text-neutral-800">{staff.personalTaxCode || 'Not provided'}</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Nation</p>
                    <p className="text-neutral-800">{staff.nation || 'Not provided'}</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="text-sm text-neutral-500">Marital status</p>
                    <p className="text-neutral-800">{staff.maritalStatus || 'Not provided'}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffDetail;