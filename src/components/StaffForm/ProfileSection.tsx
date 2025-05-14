import { FormSectionProps, genderOptions, statusOptions, jobPositionOptions, roleOptions, academicLevelOptions, languageOptions, workplaceOptions, directionOptions } from '../../types/staff';
import TextField from '../TextField';
import SelectField from '../SelectField';
import DateField from '../DateField';
import TextareaField from '../TextareaField';
import CheckboxField from '../CheckboxField';
import ProfileImage from '../ProfileImage';

const ProfileSection = ({ register, errors, watch, setValue }: FormSectionProps) => {
  const handleImageChange = (file: File) => {
    setValue('profileImage', file);
  };

  return (
    <div className="animate-fade-in">
      <CheckboxField 
        id="twoFactorAuth"
        label="Enable Email Two Factor Authentication"
        {...register('twoFactorAuth')}
        checked={watch('twoFactorAuth')}
        error={errors.twoFactorAuth?.message}
      />
      
      <div className="flex justify-center my-6">
        <ProfileImage 
          imageUrl={watch('profileImage')}
          onChange={handleImageChange}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <TextField 
          id="staffCode"
          label="Staff code"
          required
          {...register('staffCode')}
          error={errors.staffCode?.message}
        />
        
        <div className="hidden md:block"></div>
        
        <TextField 
          id="firstName"
          label="First name"
          required
          {...register('firstName')}
          error={errors.firstName?.message}
        />
        
        <TextField 
          id="lastName"
          label="Last name"
          required
          {...register('lastName')}
          error={errors.lastName?.message}
        />
        
        <SelectField 
          id="gender"
          label="Gender"
          options={genderOptions}
          {...register('gender')}
          error={errors.gender?.message}
        />
        
        <DateField 
          id="birthday"
          label="Birthday"
          {...register('birthday')}
          error={errors.birthday?.message}
        />
        
        <TextField 
          id="email"
          label="Email"
          type="email"
          required
          {...register('email')}
          error={errors.email?.message}
        />
        
        <TextField 
          id="phone"
          label="Phone"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
        />
        
        <SelectField 
          id="workplace"
          label="Workplace"
          options={workplaceOptions}
          {...register('workplace')}
          error={errors.workplace?.message}
        />
        
        <SelectField 
          id="status"
          label="Status"
          options={statusOptions}
          required
          {...register('status')}
          error={errors.status?.message}
        />
        
        <SelectField 
          id="jobPosition"
          label="Job position"
          options={jobPositionOptions}
          required
          {...register('jobPosition')}
          error={errors.jobPosition?.message}
        />
        
        <SelectField 
          id="directManager"
          label="Direct manager"
          options={[
            { value: 'manager1', label: 'Manager 1' },
            { value: 'manager2', label: 'Manager 2' },
          ]}
          {...register('directManager')}
          error={errors.directManager?.message}
        />
        
        <SelectField 
          id="role"
          label="Role"
          options={roleOptions}
          {...register('role')}
          error={errors.role?.message}
        />
        
        <SelectField 
          id="academicLevel"
          label="Academic level"
          options={academicLevelOptions}
          {...register('academicLevel')}
          error={errors.academicLevel?.message}
        />
        
        <TextField 
          id="hourlyRate"
          label="Hourly Rate"
          type="number"
          {...register('hourlyRate')}
          error={errors.hourlyRate?.message}
        />
        
        <SelectField 
          id="defaultLanguage"
          label="Default Language"
          options={languageOptions}
          {...register('defaultLanguage')}
          error={errors.defaultLanguage?.message}
        />
        
        <SelectField 
          id="direction"
          label="Direction"
          options={directionOptions}
          {...register('direction')}
          error={errors.direction?.message}
        />
      </div>
      
      <TextareaField 
        id="emailSignature"
        label="Email Signature"
        {...register('emailSignature')}
        error={errors.emailSignature?.message}
      />
      
      <TextareaField 
        id="otherInformation"
        label="Other information"
        {...register('otherInformation')}
        error={errors.otherInformation?.message}
      />
    </div>
  );
};

export default ProfileSection;