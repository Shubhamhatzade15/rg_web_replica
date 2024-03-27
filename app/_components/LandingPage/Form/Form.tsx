import React from 'react'
import "./Form.css"

export default function Form() {
  return (
    <div className="p-4 md:px-20 py-10 bg-[#dee8f0]">
        <p className='text-center'>To provide your support to our mission of a secular, democratic, just and inclusive India, join the conversation and sign up below,</p>
        <form action="" className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
            <input type="text" className="block bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none" placeholder='First Name*' required />
            <input type="text" className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none" placeholder='Last Name*' required />
            <div>
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none" placeholder='Phone Number*' required />
                <button className='rounded-lg border-2 bg-white p-2 mx-2' type='button'>Verify</button>
            </div> 
            <input type="number" className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none" placeholder='Enter OTP*' required />
            <input type="email" className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none" placeholder='Enter Email*' required />
            <input type="text" className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none" placeholder='Pin Code*' required />
            <input type="text" className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none md:col-start-1 md:col-end-3" placeholder='Pin Code*' required />
            <div>
                <input type="checkbox" />
                <label htmlFor=""> Yes, I would like to receive messages from Rahul Gandhi</label>
            </div>
            <button type='submit' className="px-4 py-2 bg-[#337ab7] w-fit place-self-end">Submit</button>
        </form>     
    </div>
  )
}
