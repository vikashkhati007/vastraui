'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <ProgressBar
                color='blue'
                height="4px"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
};

export default ProgressProvider;