import React from 'react';
import  CIcon  from '@coreui/icons-react';
import { AiOutlineRight } from 'react-icons/ai';
import { cibGmail, cibTelegramPlane } from '@coreui/icons';

const EmailVerifyCode = () => {
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
                <div className=' mx-auto my-auto w-44 justify-center mt-48'>
                    <CIcon icon={cibTelegramPlane} size="l"/>
                </div>
                <div className='sm:mx-auto sm:my-auto  text-gray-500 text-4xl font-semibold justify-center font-sans mt-5 overline'>
                    <h1>An email has been sent to you.</h1>
                </div>
                <div className='sm:mx-auto my-auto text-gray-500 text-2xl font-light justify-center font-sans mt-5'>
                    <h1>Check the email that is associated with your account for the verification code.</h1>
                </div>
                <div className='my-auto text-gray-500 text-xl font-bold text-left font-sans mt-20'>
                    <h1 className='ml-[34rem] text-3xl underline mb-5'>Verification Code</h1>
                    <input className="ml-[34rem] w-[44rem] h-14 outline outline-offset-2 outline-1 font-normal hover:outline-2 px-4" type="text" name="verificationCode" placeholder="Verification Code" />
                </div>

                <div className='mx-auto w-60 my-auto justify-center mt-16'>
                    <button className="w-full rounded-full bg-sky-500 hover:bg-sky-700 px-5 text-2xl py-5 text-white">Verify</button>
                </div>
                
                <button className=" flex mx-auto bg-transparent hover:underline text-xl mt-20">Send me another code </button>
                <button className=" bg-transparent hover:underline text-xl mt-10 mb-32">Skip for now </button>
                
            </div>
        </div>
        
    )
}

export default EmailVerifyCode