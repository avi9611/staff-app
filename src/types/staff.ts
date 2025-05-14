export interface StaffProfile {
  _id?: string;
  staffCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  gender?: string;
  birthday?: string;
  profileImage?: string;
  workplace?: string;
  status: string;
  jobPosition: string;
  directManager?: string;
  role?: string;
  academicLevel?: string;
  hourlyRate?: number;
  defaultLanguage?: string;
  direction?: string;
  emailSignature?: string;
  otherInformation?: string;
  twoFactorAuth?: boolean;
  
  // Related information
  domicile?: string;
  currentAddress?: string;
  placeOfBirth?: string;
  citizenIdentification?: string;
  dateOfIssue?: string;
  placeOfIssue?: string;
  bankAccountNumber?: string;
  bankAccountName?: string;
  bankName?: string;
  personalTaxCode?: string;
  epfNo?: string;
  socialSecurityNo?: string;
  facebook?: string;
  linkedin?: string;
  skype?: string;
  maritalStatus?: string;
  nation?: string;
  religion?: string;
  resident?: string;
}

export interface FormSectionProps {
  control: any;
  errors: any;
  register: any;
  setValue?: any;
  watch?: any;
}

export interface SelectOption {
  value: string;
  label: string;
}

export const genderOptions: SelectOption[] = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
  { value: 'prefer_not_to_say', label: 'Prefer not to say' }
];

export const statusOptions: SelectOption[] = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'on_leave', label: 'On Leave' },
  { value: 'terminated', label: 'Terminated' }
];

export const jobPositionOptions: SelectOption[] = [
  { value: 'software_engineer', label: 'Software Engineer' },
  { value: 'ui_ux_designer', label: 'UI/UX Designer' },
  { value: 'product_manager', label: 'Product Manager' },
  { value: 'hr_specialist', label: 'HR Specialist' },
  { value: 'marketing_specialist', label: 'Marketing Specialist' },
  { value: 'sales_representative', label: 'Sales Representative' },
  { value: 'office_manager', label: 'Office Manager' },
  { value: 'financial_analyst', label: 'Financial Analyst' }
];

export const roleOptions: SelectOption[] = [
  { value: 'employee', label: 'Employee' },
  { value: 'manager', label: 'Manager' },
  { value: 'admin', label: 'Admin' },
  { value: 'director', label: 'Director' },
  { value: 'c_level', label: 'C-Level Executive' }
];

export const academicLevelOptions: SelectOption[] = [
  { value: 'high_school', label: 'High School' },
  { value: 'associate', label: 'Associate Degree' },
  { value: 'bachelor', label: 'Bachelor\'s Degree' },
  { value: 'master', label: 'Master\'s Degree' },
  { value: 'phd', label: 'PhD' },
  { value: 'not_required', label: 'Not Required' }
];

export const languageOptions: SelectOption[] = [
  { value: 'system_default', label: 'System Default' },
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'arabic', label: 'Arabic' }
];

export const maritalStatusOptions: SelectOption[] = [
  { value: 'single', label: 'Single' },
  { value: 'married', label: 'Married' },
  { value: 'divorced', label: 'Divorced' },
  { value: 'widowed', label: 'Widowed' }
];

export const workplaceOptions: SelectOption[] = [
  { value: 'headquarters', label: 'Headquarters' },
  { value: 'remote', label: 'Remote' },
  { value: 'branch_office_1', label: 'Branch Office 1' },
  { value: 'branch_office_2', label: 'Branch Office 2' }
];

export const directionOptions: SelectOption[] = [
  { value: 'system_default', label: 'System Default' },
  { value: 'ltr', label: 'Left to Right (LTR)' },
  { value: 'rtl', label: 'Right to Left (RTL)' }
];