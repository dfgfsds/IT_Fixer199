'use client';

import { useState } from 'react';
import { IoCallOutline, IoClose } from 'react-icons/io5';

interface Props {
    handleClos: () => void;
}

export default function PhoneLoginModal({ handleClos }: Props) {
    const [step, setStep] = useState<'phone' | 'otp'>('phone');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);

    const handleContinue = () => {
        if (phone.length !== 10) return;
        setLoading(true);
        setTimeout(() => {
            setStep('otp');
            setLoading(false);
        }, 800);
    };

    const handleVerify = () => {
        if (otp.length !== 4) return;
        setLoading(true);
        setTimeout(() => {
            alert('Login successful 🎉');
            setLoading(false);
            handleClos();
        }, 1000);
    };

    return (
        <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center px-4">
            {/* Card */}
            <div className="relative bg-white w-full max-w-[520px] rounded-2xl px-8 py-10 shadow-xl">

                {/* Close */}
                <button
                    onClick={handleClos}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
                >
                    <IoClose className="w-5 h-5" />
                </button>

                {/* STEP 1 – PHONE */}
                {step === 'phone' && (
                    <>
                        <div className='flex gap-5 items-baseline-last'>
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
                                <IoCallOutline className="w-5 h-5 text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">
                                Enter your phone number
                            </h2>
                        </div>


                        <p className="text-gray-600 text-sm mb-6">
                            We’ll send you a text with a verification code.
                        </p>

                        <div className="flex items-center border rounded-xl px-4 py-3 mb-6 focus-within:ring-2 focus-within:ring-indigo-500">
                            <span className="text-gray-600 text-sm pr-4 border-r">+91</span>

                            <input
                                autoFocus
                                inputMode="numeric"
                                maxLength={10}
                                value={phone}
                                onChange={(e) =>
                                    setPhone(e.target.value.replace(/\D/g, ''))
                                }
                                placeholder="Enter your phone number"
                                className="flex-1 pl-4 outline-none text-base"
                            />

                            {phone && (
                                <button
                                    onClick={() => setPhone('')}
                                    className="ml-2 w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center"
                                >
                                    ×
                                </button>
                            )}
                        </div>

                        <button
                            onClick={handleContinue}
                            disabled={phone.length !== 10 || loading}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white py-3 rounded-xl text-lg font-medium transition"
                        >
                            {loading ? 'Sending OTP...' : 'Continue'}
                        </button>
                    </>
                )}

                {/* STEP 2 – OTP */}
                {step === 'otp' && (
                    <>
                        <div className='flex gap-5 items-baseline-last'>
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
                                <IoCallOutline className="w-5 h-5 text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">
                                Enter verification code
                            </h2>
                        </div>
                        <p className="text-gray-600 text-sm mb-6">
                            Sent to +91 {phone}
                        </p>

                        <input
                            autoFocus
                            inputMode="numeric"
                            maxLength={4}
                            value={otp}
                            onChange={(e) =>
                                setOtp(e.target.value.replace(/\D/g, ''))
                            }
                            placeholder="----"
                            className="w-full text-center text-2xl tracking-widest border rounded-xl py-4 mb-6 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />

                        <button
                            onClick={handleVerify}
                            disabled={otp.length !== 4 || loading}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white py-3 rounded-xl text-lg font-medium transition"
                        >
                            {loading ? 'Verifying...' : 'Verify'}
                        </button>
                    </>
                )}

                {/* Footer */}
                <p className="text-xs text-gray-500 mt-4 text-center">
                    By continuing, you agree to our{' '}
                    <span className="underline cursor-pointer">T&C</span> and{' '}
                    <span className="underline cursor-pointer">Privacy</span> policy.
                </p>
            </div>
        </div>
    );
}
