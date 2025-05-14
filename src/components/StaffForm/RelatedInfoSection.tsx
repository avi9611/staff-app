import { FormSectionProps, maritalStatusOptions } from '../../types/staff';
import TextField from '../TextField';
import SelectField from '../SelectField';
import DateField from '../DateField';

const RelatedInfoSection = ({ register, errors }: FormSectionProps) => {
  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <TextField 
          id="domicile"
          label="Domicile"
          {...register('domicile')}
          error={errors.domicile?.message}
        />
        
        <SelectField 
          id="maritalStatus"
          label="Marital status"
          options={maritalStatusOptions}
          {...register('maritalStatus')}
          error={errors.maritalStatus?.message}
        />
        
        <TextField 
          id="currentAddress"
          label="Current address"
          {...register('currentAddress')}
          error={errors.currentAddress?.message}
        />
        
        <TextField 
          id="nation"
          label="Nation"
          {...register('nation')}
          error={errors.nation?.message}
        />
        
        <TextField 
          id="placeOfBirth"
          label="Place of birth"
          {...register('placeOfBirth')}
          error={errors.placeOfBirth?.message}
        />
        
        <TextField 
          id="religion"
          label="Religion"
          {...register('religion')}
          error={errors.religion?.message}
        />
        
        <TextField 
          id="citizenIdentification"
          label="Citizen identification"
          {...register('citizenIdentification')}
          error={errors.citizenIdentification?.message}
        />
        
        <DateField 
          id="dateOfIssue"
          label="Date of issue"
          {...register('dateOfIssue')}
          error={errors.dateOfIssue?.message}
        />
        
        <TextField 
          id="placeOfIssue"
          label="Place of issue"
          {...register('placeOfIssue')}
          error={errors.placeOfIssue?.message}
        />
        
        <TextField 
          id="resident"
          label="Resident"
          {...register('resident')}
          error={errors.resident?.message}
        />
        
        <TextField 
          id="bankAccountNumber"
          label="Bank account number"
          {...register('bankAccountNumber')}
          error={errors.bankAccountNumber?.message}
        />
        
        <TextField 
          id="bankAccountName"
          label="Bank account name"
          {...register('bankAccountName')}
          error={errors.bankAccountName?.message}
        />
        
        <TextField 
          id="bankName"
          label="Bank name"
          {...register('bankName')}
          error={errors.bankName?.message}
        />
        
        <TextField 
          id="personalTaxCode"
          label="Personal tax code"
          {...register('personalTaxCode')}
          error={errors.personalTaxCode?.message}
        />
        
        <TextField 
          id="epfNo"
          label="EPF No"
          {...register('epfNo')}
          error={errors.epfNo?.message}
        />
        
        <TextField 
          id="socialSecurityNo"
          label="Social Security No"
          {...register('socialSecurityNo')}
          error={errors.socialSecurityNo?.message}
        />
        
        <TextField 
          id="facebook"
          label="Facebook"
          {...register('facebook')}
          error={errors.facebook?.message}
        />
        
        <TextField 
          id="linkedin"
          label="LinkedIn"
          {...register('linkedin')}
          error={errors.linkedin?.message}
        />
        
        <TextField 
          id="skype"
          label="Skype"
          {...register('skype')}
          error={errors.skype?.message}
        />
      </div>
    </div>
  );
};

export default RelatedInfoSection;