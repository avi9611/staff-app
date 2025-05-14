import { User } from 'lucide-react';
import { useState, useRef } from 'react';

interface ProfileImageProps {
  imageUrl?: string;
  onChange?: (file: File) => void;
  readOnly?: boolean;
}

const ProfileImage = ({ imageUrl, onChange, readOnly = false }: ProfileImageProps) => {
  const [preview, setPreview] = useState<string | undefined>(imageUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    if (onChange) {
      onChange(file);
    }
  };
  
  const handleClick = () => {
    if (!readOnly && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div 
        className={`w-28 h-28 rounded-full overflow-hidden bg-neutral-200 flex items-center justify-center border-2 border-neutral-300 ${!readOnly ? 'cursor-pointer hover:opacity-90' : ''}`}
        onClick={handleClick}
      >
        {preview ? (
          <img 
            src={preview} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        ) : (
          <User className="h-16 w-16 text-neutral-400" />
        )}
      </div>
      {!readOnly && (
        <>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <button
            type="button"
            className="mt-2 text-sm text-primary hover:text-primary-dark"
            onClick={handleClick}
          >
            Upload photo
          </button>
        </>
      )}
    </div>
  );
};

export default ProfileImage;