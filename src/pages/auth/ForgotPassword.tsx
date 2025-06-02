
import React from 'react';
import PasswordResetForm from '@/components/auth/PasswordResetForm';

const ForgotPassword: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <PasswordResetForm />
    </div>
  );
};

export default ForgotPassword;
