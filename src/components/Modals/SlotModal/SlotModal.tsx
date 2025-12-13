import React, { useState, useEffect } from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { FaX } from "react-icons/fa6";

// Helper function to format the date for display (e.g., "Mon 06")
const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

// Helper function to generate the next three days
const generateNextThreeDays = (): Date[] => {
    const today = new Date();
    const nextThreeDays = [today];
    for (let i = 1; i < 3; i++) {
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + i);
        nextThreeDays.push(nextDay);
    }
    return nextThreeDays;
};

// Example time slots - In a real app, this would come from an API
const timeSlots = ["02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"];

interface SlotModalProps {
    isOpen: boolean;
    onClose: () => void;
    // onProceed: (selection: { type: 'instant' | 'later', date?: Date, time?: string }) => void;
}

export default function SlotModal({ isOpen, onClose }: SlotModalProps) {
    const [arrivalOption, setArrivalOption] = useState<'instant' | 'later'>('instant');
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const nextThreeDays = generateNextThreeDays();

    // Reset state when the modal opens
    useEffect(() => {
        if (isOpen) {
            setArrivalOption('instant');
            setSelectedDate(new Date());
            setSelectedTime(null);
        }
    }, [isOpen]);

    // const handleProceed = () => {
    //     let selection;
    //     if (arrivalOption === 'instant') {
    //         selection = { type: 'instant' };
    //     } else {
    //         selection = { type: 'later', date: selectedDate, time: selectedTime };
    //     }
    //     // onProceed(selection);
    // };

    const handleProceed = () => {
        const selection =
            arrivalOption === 'instant'
                ? { type: 'instant' }
                : { type: 'later', date: selectedDate, time: selectedTime };
    
        // Example usage
        console.log(selection);
        // onProceed?.(selection); // if you re-enable the prop
    };
    

    if (!isOpen) {
        return null;
    }


    return (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
            <div className="relative bg-white rounded-lg shadow-xl w-[90%] max-w-md max-h-[90vh] flex flex-col">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute cursor-pointer top-4 right-3 text-gray-600 hover:text-gray-800"
                >
                    <FaX className="h-4 w-4" />
                </button>
                <h2 className="text-lg font-semibold px-6 mt-3">
                    When should the professional arrive?
                </h2>
                {/* Scrollable content */}
                <div className="p-6 overflow-y-auto hide-scrollbar flex-1">


                    {/* Instant Arrival */}
                    <div className="flex items-center justify-between mb-3 border border-gray-300 p-3 rounded-md">
                        <div className="items-center">
                            <span className="bg-green-900 text-white text-xs font-semibold px-2 py-1 rounded mr-2 flex items-center">
                                <AiFillThunderbolt />
                                Instant
                            </span>
                            <span className="text-sm text-black font-extrabold">In 50 mins</span>
                        </div>
                        <input
                            type="radio"
                            value="instant"
                            checked={arrivalOption === "instant"}
                            onChange={() => setArrivalOption("instant")}
                            className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
                        />
                    </div>

                    {/* Schedule for later */}
                    <div className="mb-4 border border-gray-300 p-3 rounded-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <label className="text-sm text-black font-extrabold">
                                    Schedule for later
                                </label>
                                <br />
                                <p className="text-xs text-gray-500 mb-2">
                                    Select your preferred day & time
                                </p>
                            </div>
                            <input
                                type="radio"
                                value="later"
                                checked={arrivalOption === "later"}
                                onChange={() => setArrivalOption("later")}
                                className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
                            />
                        </div>

                        {arrivalOption === "later" && (
                            <div className="mt-2">
                                {/* Date Selector */}
                                <div className="flex gap-2 mb-3 p-2 overflow-x-auto pb-1">
                                    {nextThreeDays?.map((date) => (
                                        <button
                                            key={date.toISOString()}
                                            onClick={() => {
                                                setSelectedDate(date);
                                                setSelectedTime(null); // Reset time when date changes
                                            }}
                                            className={`px-5 py-2 rounded-md border text-center text-sm transition-colors duration-200 ease-in-out ${selectedDate.toDateString() === date.toDateString()
                                                ? "bg-indigo-100 border-indigo-500 font-semibold text-gray-700"
                                                : "border-gray-300 text-gray-700 hover:bg-gray-50"
                                                }`}
                                        >
                                            <div className="text-[10px]">
                                                {formatDate(date).split(" ")[1]}
                                            </div>
                                            <div className="text-md font-medium text-black">
                                                {formatDate(date).split(" ")[0]}
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                <div className="border-b pt-2 border-dashed border-gray-200 w-full"></div>

                                {/* Time Selector */}
                                <p className="text-md font-bold my-4">Select start time of service</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-2">
                                    {timeSlots?.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`px-3 py-2 rounded-md border text-xs transition-colors duration-200 ease-in-out ${selectedTime === time
                                                ? "bg-indigo-100 border-indigo-500 font-semibold text-indigo-700"
                                                : "border-gray-300 text-gray-700 hover:bg-gray-50"
                                                }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                    {timeSlots.length === 0 && (
                                        <p className="text-xs text-gray-500 col-span-3">
                                            No time slots available.
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Fixed Footer Button */}
                <div className="p-2 shadow-md border-t border-gray-200">
                    <button
                        onClick={handleProceed}
                        className="w-full bg-[#6e42e5] hover:bg-[#6932ff] text-white py-3 rounded-md font-bold text-sm shadow-md cursor-pointer"
                    >
                        Proceed to checkout
                    </button>
                </div>
            </div>
        </div>

    );
}