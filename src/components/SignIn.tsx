import { useState } from 'react'
import signin from "../images/signin.jpg";
import PhoneInput from 'react-phone-input-2'


const SignIn = () => {
    const [phone, setPhone] = useState("")
  return (
    <div className='grid grid-cols-2 bg-black h-screen' >
        <div style={{backgroundImage:` linear-gradient(to left,rgba(0,0,0,7), rgba(0,0,0,0.1)) ,url(${signin})`}} >

        </div>
        <div className='ml-36'>
            <h1 className="mt-24 text-xl font-semibold text-white">Log in or sign up to continue</h1>
            <PhoneInput
                country={'us'}
                value={phone}
                onChange={phone => setPhone(phone)}
            />
        </div>
    </div>
  )
}

export default SignIn