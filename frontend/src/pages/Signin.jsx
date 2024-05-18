import { BottomWarning } from "../Components/BottomWarning"
import { Button } from "../Components/Button"
import { HeaderTemplate } from "../Components/HeaderTemplate"
import { InputBox } from "../Components/InputBox"

export const Signin = () => {
    return (
       <div className=" bg-slate-300 h-screen flex justify-center">

    <div className=" flex flex-col  justify-center">
    
        <div className=" rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <HeaderTemplate heading = "SignIn" subheading ="Enter your credentials to access your account" />
            <InputBox placeholder = "abc@gmail.com" label = "Email"/>
            <InputBox label = "Password"/>
            <div className=" pt-4">
                <Button label = "SignIp"/>
            </div>
            <BottomWarning label = "Don't have a Account" buttonText = "SignUn" to = "/signup" />
        </div>
    </div>

    </div>
    )
}