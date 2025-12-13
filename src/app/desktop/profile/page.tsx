"use client";
// import { useRouter } from 'next/navigation';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { BsCardText } from 'react-icons/bs';
import PhoneLoginModal from '@/components/Modals/LoginModal/LoginModal';
import { useState } from 'react';


export default function ProfilePage() {
  // const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  // const handleLoginSignup = () => {
  //   router.push('/login'); 
  // };

  // const handleAboutClick = () => {
  //   router.push('/about');
  // };

  return (
    <div className="bg-gray-50 p-4 sm:p-8">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Profile
        </h1>
        <button
          onClick={()=> setShowModal(!showModal)}
          className="w-full sm:w-auto px-6 py-3 mb-8 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg text-lg font-medium transition duration-150 ease-in-out shadow-md"
        >
          Log in or sign up
        </button>

        <hr className="mb-6 border-gray-200" />

        {/* <div
          // onClick={handleAboutClick}
          className="flex items-center justify-between py-3 px-1 cursor-pointer hover:bg-gray-50 rounded-lg transition duration-150"
        >
          <div className="flex items-center space-x-3">
            <span className="p-1 rounded-md text-gray-600">
              <BsCardText className="w-5 h-5" />
            </span>
            <span className="text-gray-700 text-base">About UC</span>
          </div>

          <HiOutlineChevronRight className="w-5 h-5 text-gray-400" />
        </div> */}

      </div>
            {showModal && <PhoneLoginModal handleClos={() => setShowModal(!showModal)} />}
      
    </div>
  );
}