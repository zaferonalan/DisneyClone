import { useState } from 'react'
import signin from "../images/signin.jpg";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Button } from '@material-tailwind/react';

const SignIn = () => {
    const [phone, setPhone] = useState("")
  return (
    <div className='grid grid-cols-2 bg-black h-screen sm:grid-cols-1 md:grid-cols-2' >
        <div style={{backgroundImage:` linear-gradient(to left,rgba(0,0,0,7), rgba(0,0,0,0.1)) ,url(${signin})`}} >

        </div>
        <div className='flex flex-col justify-center items-center h-screen'>
            <div>
                <h1 className="mt-24 text-xl font-semibold text-white">Log in or sign up to continue</h1>
                <PhoneInput
                    country={'us'}
                    value={phone}
                    onChange={phone => setPhone(phone)}
                    inputStyle={{backgroundColor:'black',color:'white'}}
                    placeholder='Enter mobile number'
                />
                <h6 className='text-gray-500 text-xs mt-3'>By proceeding you confirm that you are above 18 years <br /> of age and agree to the Privacy Policy & Terms of Use</h6>
                <Button className='mt-36 h-12 bg-blue-500 w-72 ml-2 hover:bg-blue-700'>
                    Verify Otp
                </Button>
                <h3 className='text-gray-500 ml-3 mt-28'>Enter code, number and <span className='text-blue-500'>click Get otp</span></h3>
            </div>
        </div>
    </div>
  )
}

export default SignIn