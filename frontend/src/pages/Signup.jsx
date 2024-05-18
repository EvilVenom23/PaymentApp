import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../Components/BottomWarning"
import { Button } from "../Components/Button"
import { HeaderTemplate } from "../Components/HeaderTemplate"
import { InputBox } from "../Components/InputBox"
import axios from "axios";
import { useState } from "react"

export const Signup = () => {
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const navigate = useNavigate();

  return <div className=" bg-slate-300 h-screen flex justify-center">

    <div className=" flex flex-col  justify-center">
    
        <div className=" rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <HeaderTemplate heading = "SignUp" subheading ="Enter your information to create your account" />
            <InputBox  onChange={(e) => {
                setFirstName(e.target.value)
            }}  placeholder = "John" label = "First Name" />
            <InputBox  onChange={(e) => {
                setLastName(e.target.value)
            }} placeholder = "Doe" label = "Last Name"/>
            <InputBox onChange={(e) => {
               setUsername(e.target.value)
            }} placeholder = "abc@gmail.com" label = "Email"/>
            <InputBox  onChange={(e) => {
                setPassword(e.target.value)
            }} label = "Password"/>
            <div className=" pt-4">
                <Button onClick={async() => {
                const response = await axios.post("http://localhost:3000/api/v1/user/signup" , {
                        username,
                        firstName,
                        lastName,
                        password
                    });
                    localStorage.setItem("token", response.data.token)
                    navigate("/dashboard")
                }} label = "SignUp"/>
            </div>
            <BottomWarning label = "Already have a Account" buttonText = "SignIn" to = "/signin" />
        </div>
    </div>

    </div>
  
}

// https://github.com/100xdevs-cohort-2/paytm/blob/complete-solution/frontend/src/pages/Signup.jsx