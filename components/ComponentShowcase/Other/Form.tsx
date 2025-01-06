import ModernRegistrationForm from '@/components/CustomComponent/Other/Form'
import React from 'react'

const Form = () => {
  return (
    <ModernRegistrationForm
    mode="night"
    accentColor="#4f46e5"
    backgroundColor="#f3f4f6"
    formBackgroundColor="#ffffff"
    inputBackgroundColor="#f9fafb"
    textColor="#111827"
    placeholderColor="#6b7280"
    borderColor="#d1d5db"
    buttonHoverColor="#4338ca"
    title="Join Us"
    subtitle="Create your account and start your journey"
    submitButtonText="Create Account"
    signInText="Already a member?"
    signInLinkText="Log in here"
    signInHref="/login"
  />
  )
}

export default Form