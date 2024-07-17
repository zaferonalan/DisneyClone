import { useState } from 'react'
import signin  from "../images/signin.jpg"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { auth } from "../firebase/setup"


const Signin = () => {

    const [phone, setPhone] = useState("")
    const [user, setUser] = useState<any>(null)
    const [otp, setOtp] = useState("")

    const sendOtp = async() => {

        try {
            const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
            const confirmation = await signInWithPhoneNumber(auth,phone,recaptcha)
            setUser(confirmation)
        } catch (error) {
            console.error(error)
        }

        
    }

    const verifyOtp = async() => {

        try {
          const data =  await user.confirm(otp)
          console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className='grid grid-cols-2 h-screen bg-black'>
        <div style={{backgroundImage:`linear-gradient(to left, rgba(0,0,0,7), rgba(0,0,0,0.1)),url(${signin})`}}>

        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-semibold text-white mb-2' >Log in or sign up to continue</h1>
            <div>
                <PhoneInput
                    country={'us'}
                    value={phone}
                    onChange={phone =>setPhone("+" + phone)}
                    inputStyle={{backgroundColor:'black', color:"white", width:"400px",height:"3rem"}}
                    placeholder='Enter mobile number'
                />
            </div>
                <h6 className='text-gray-500 text-xs mt-3 text-left'>By proceeding you confirm that you are above 18 years of age and agree <br /> to the Privacy Policy & Terms of Use</h6>
                { phone && <button onClick={sendOtp} className="mt-20 w-[400px] h-[3rem] text-center bg-blue-700 hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded">
                    Send Otp
                </button>}
                <div id='recaptcha' className='mt-2'></div>
                { phone && <input onChange={(e) => setOtp(e.target.value)} type="text" className="mt-10 bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter otp" required />}
                { otp && <button onClick={verifyOtp} className="mt-20 w-[400px] h-[3rem] text-center bg-blue-700 hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded">
                    Verify Otp
                </button>}
                { otp &&<h3 className='text-slate-500 text-xl ml-3 mt-20 text-center'>Enter code, number and <span className='text-blue-500'>click Get Otp</span></h3>}
        </div>
    </div>
  )
}

export default Signin