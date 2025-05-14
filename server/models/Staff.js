import mongoose from 'mongoose';

const staffSchema = new mongoose.Schema({
  staffCode: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other', 'prefer_not_to_say'],
    default: 'prefer_not_to_say'
  },
  birthday: {
    type: String
  },
  profileImage: {
    type: String
  },
  workplace: {
    type: String
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'inactive', 'on_leave', 'terminated'],
    default: 'active'
  },
  jobPosition: {
    type: String,
    required: true
  },
  directManager: {
    type: String
  },
  role: {
    type: String,
    enum: ['employee', 'manager', 'admin', 'director', 'c_level'],
    default: 'employee'
  },
  academicLevel: {
    type: String
  },
  hourlyRate: {
    type: Number
  },
  defaultLanguage: {
    type: String,
    default: 'system_default'
  },
  direction: {
    type: String,
    default: 'system_default'
  },
  emailSignature: {
    type: String
  },
  otherInformation: {
    type: String
  },
  twoFactorAuth: {
    type: Boolean,
    default: false
  },
  
  // Related information
  domicile: {
    type: String
  },
  currentAddress: {
    type: String
  },
  placeOfBirth: {
    type: String
  },
  citizenIdentification: {
    type: String
  },
  dateOfIssue: {
    type: String
  },
  placeOfIssue: {
    type: String
  },
  bankAccountNumber: {
    type: String
  },
  bankAccountName: {
    type: String
  },
  bankName: {
    type: String
  },
  personalTaxCode: {
    type: String
  },
  epfNo: {
    type: String
  },
  socialSecurityNo: {
    type: String
  },
  facebook: {
    type: String
  },
  linkedin: {
    type: String
  },
  skype: {
    type: String
  },
  maritalStatus: {
    type: String,
    enum: ['single', 'married', 'divorced', 'widowed']
  },
  nation: {
    type: String
  },
  religion: {
    type: String
  },
  resident: {
    type: String
  }
}, {
  timestamps: true
});

const Staff = mongoose.model('Staff', staffSchema);

export default Staff;