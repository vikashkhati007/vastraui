import React from 'react';

import ModernRegistrationForm from '@/components/CustomComponent/Other/Form';

const Form = () => {
  return (
    <ModernRegistrationForm
      accentColor="#4f46e5"
      backgroundColor="#f3f4f6"
      borderColor="#d1d5db"
      buttonHoverColor="#4338ca"
      formBackgroundColor="#ffffff"
      inputBackgroundColor="#f9fafb"
      mode="night"
      placeholderColor="#6b7280"
      signInHref="/login"
      signInLinkText="Log in here"
      signInText="Already a member?"
      submitButtonText="Create Account"
      subtitle="Create your account and start your journey"
      textColor="#111827"
      title="Join Us"
    />
  );
};

export default Form;
