'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface ModernRegistrationFormProps {
    mode?: 'day' | 'night'
    accentColor?: string
    backgroundColor?: string
    formBackgroundColor?: string
    inputBackgroundColor?: string
    textColor?: string
    placeholderColor?: string
    borderColor?: string
    buttonHoverColor?: string
    title?: string
    subtitle?: string
    submitButtonText?: string
    signInText?: string
    signInLinkText?: string
    signInHref?: string
    onSubmit?: (formData: FormData) => void
}

interface FormData {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}

export default function ModernRegistrationForm({
    mode = 'night',
    accentColor = '#00bfff',
    title = 'Register',
    subtitle = 'Signup now and get full access to our app.',
    submitButtonText = 'Submit',
    signInText = 'Already have an account?',
    signInLinkText = 'Sign in',
    signInHref = '#',
    onSubmit
}: ModernRegistrationFormProps) {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [colors, setColors] = useState({
        formBackgroundColor: mode === 'day' ? '#ffffff' : '#1e1e1e',
        inputBackgroundColor: mode === 'day' ? '#f9fafb' : '#2a2a2a',
        textColor: mode === 'day' ? '#111827' : '#e0e0e0',
        placeholderColor: mode === 'day' ? '#6b7280' : 'rgba(255, 255, 255, 0.6)',
        borderColor: mode === 'day' ? '#d1d5db' : '#3a3a3a',
        buttonHoverColor: mode === 'day' ? '#0284c7' : '#0099ff'
    })

    useEffect(() => {
        setColors({
            formBackgroundColor: mode === 'day' ? '#ffffff' : '#1e1e1e',
            inputBackgroundColor: mode === 'day' ? '#f9fafb' : '#2a2a2a',
            textColor: mode === 'day' ? '#111827' : '#e0e0e0',
            placeholderColor: mode === 'day' ? '#6b7280' : 'rgba(255, 255, 255, 0.6)',
            borderColor: mode === 'day' ? '#d1d5db' : '#3a3a3a',
            buttonHoverColor: mode === 'day' ? '#0284c7' : '#0099ff'
        })
    }, [mode])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit?.(formData)
    }

    return (
            <motion.form 
                className={`flex flex-col gap-2.5 w-full max-w-[350px] p-5 rounded-[20px] relative border`}
                style={{ backgroundColor: colors.formBackgroundColor, borderColor: colors.borderColor }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
            >
                <div className="relative flex items-center pl-8">
                    <motion.div
                        className="absolute left-0 w-[18px] h-[18px] rounded-full"
                        style={{ backgroundColor: accentColor }}
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 1.8, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <div className="absolute left-0 w-[18px] h-[18px] rounded-full" style={{ backgroundColor: accentColor }} />
                    <h2 className="text-[28px] font-semibold tracking-[-1px]" style={{ color: accentColor }}>
                        {title}
                    </h2>
                </div>

                <p className="text-[14.5px]" style={{ color: colors.placeholderColor }}>
                    {subtitle}
                </p>

                <div className="flex w-full gap-1.5">
                    <div className="relative flex-1">
                        <input
                            required
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                            className="w-full pt-5 pb-1 px-2.5 rounded-[10px] border outline-none text-base peer"
                            style={{ backgroundColor: colors.inputBackgroundColor, borderColor: colors.borderColor, color: colors.textColor }}
                        />
                        <span className="absolute left-2.5 transition-all duration-300 text-[0.9em] peer-focus:text-[0.7em] peer-focus:font-semibold peer-focus:top-0 peer-valid:text-[0.7em] peer-valid:font-semibold peer-valid:top-0 peer-placeholder-shown:top-[12.5px] top-0 text-[0.7em] font-semibold"
                                    style={{ color: colors.placeholderColor }}>
                            Firstname
                        </span>
                    </div>

                    <div className="relative flex-1">
                        <input
                            required
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                            className="w-full pt-5 pb-1 px-2.5 rounded-[10px] border outline-none text-base peer"
                            style={{ backgroundColor: colors.inputBackgroundColor, borderColor: colors.borderColor, color: colors.textColor }}
                        />
                        <span className="absolute left-2.5 transition-all duration-300 text-[0.9em] peer-focus:text-[0.7em] peer-focus:font-semibold peer-focus:top-0 peer-valid:text-[0.7em] peer-valid:font-semibold peer-valid:top-0 peer-placeholder-shown:top-[12.5px] top-0 text-[0.7em] font-semibold"
                                    style={{ color: colors.placeholderColor }}>
                            Lastname
                        </span>
                    </div>
                </div>

                <div className="relative">
                    <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full pt-5 pb-1 px-2.5 rounded-[10px] border outline-none text-base peer"
                        style={{ backgroundColor: colors.inputBackgroundColor, borderColor: colors.borderColor, color: colors.textColor }}
                    />
                    <span className="absolute left-2.5 transition-all duration-300 text-[0.9em] peer-focus:text-[0.7em] peer-focus:font-semibold peer-focus:top-0 peer-valid:text-[0.7em] peer-valid:font-semibold peer-valid:top-0 peer-placeholder-shown:top-[12.5px] top-0 text-[0.7em] font-semibold"
                                style={{ color: colors.placeholderColor }}>
                        Email
                    </span>
                </div>

                <div className="relative">
                    <input
                        required
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                        className="w-full pt-5 pb-1 px-2.5 rounded-[10px] border outline-none text-base peer"
                        style={{ backgroundColor: colors.inputBackgroundColor, borderColor: colors.borderColor, color: colors.textColor }}
                    />
                    <span className="absolute left-2.5 transition-all duration-300 text-[0.9em] peer-focus:text-[0.7em] peer-focus:font-semibold peer-focus:top-0 peer-valid:text-[0.7em] peer-valid:font-semibold peer-valid:top-0 peer-placeholder-shown:top-[12.5px] top-0 text-[0.7em] font-semibold"
                                style={{ color: colors.placeholderColor }}>
                        Password
                    </span>
                </div>

                <div className="relative">
                    <input
                        required
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        className="w-full pt-5 pb-1 px-2.5 rounded-[10px] border outline-none text-base peer"
                        style={{ backgroundColor: colors.inputBackgroundColor, borderColor: colors.borderColor, color: colors.textColor }}
                    />
                    <span className="absolute left-2.5 transition-all duration-300 text-[0.9em] peer-focus:text-[0.7em] peer-focus:font-semibold peer-focus:top-0 peer-valid:text-[0.7em] peer-valid:font-semibold peer-valid:top-0 peer-placeholder-shown:top-[12.5px] top-0 text-[0.7em] font-semibold"
                                style={{ color: colors.placeholderColor }}>
                        Confirm password
                    </span>
                </div>

                <button 
                    type="submit"
                    className="mt-2 py-2.5 px-2.5 rounded-[10px] border-none text-base transition-colors duration-300 hover:opacity-90"
                    style={{ backgroundColor: accentColor, color: "white" }}
                >
                    {submitButtonText}
                </button>

                <p className="text-center text-[14.5px]" style={{ color: colors.placeholderColor }}>
                    {signInText}{' '}
                    <Link href={signInHref} className="hover:underline" style={{ color: accentColor }}>
                        {signInLinkText}
                    </Link>
                </p>
            </motion.form>
    )
}