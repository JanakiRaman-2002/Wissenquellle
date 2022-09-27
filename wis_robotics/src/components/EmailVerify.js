import React from 'react';
import  CIcon  from '@coreui/icons-react';
import { AiOutlineRight } from 'react-icons/ai';
import { cibGmail, cilArrowRight } from '@coreui/icons';

const EmailVerify = () => {
    return (

        <div className='bg-gray-100'>
            <div className='flex'>
                <div className='flex-initial p-5'>
                    <h1 className='text-gray-500 text-3xl font-normal'>
                        Email Verification
                    </h1>
                </div>
                <div className='flex-1 p-5'>
                    <img className='w-24 ml-auto' src={process.env.PUBLIC_URL+"images/esri.png"} />
                </div>
            </div>

            <div className='flex-col'>
                <div className='md:justify-self-auto mx-auto md:mx-auto my-auto w-44 justify-center mt-48'>
                    <CIcon icon={cibGmail} size="l"/>
                </div>
                <div className='mx-auto my-auto  text-gray-500 text-4xl font-semibold justify-center font-sans overline'>
                    <h1>Your email has not been verified.</h1>
                </div>
                <div className='mx-auto my-auto text-gray-500 text-2xl font-light justify-center font-sans mt-5'>
                    <h1>Send a verification text to c***@g***|.com</h1>
                </div>
                <div className='mx-auto w-80 my-auto justify-center mt-16'>
                    <button className="w-full rounded-full bg-sky-500 hover:bg-sky-700 px-5 text-2xl py-5 text-white">Send verification email</button>
                </div>
                
                <button className=" bg-transparent hover:underline text-xl mt-20">Skip for now </button>
                
            </div>
        </div>
        
    )
}

export default EmailVerify