"use client"; 
import { SetStateAction, useCallback, useState } from "react";
import Input from "./Input";

const Auth = () => {
    const [email, setEmail] = useState(''); 
    const [userName, setUserName] = useState(""); 
    const [password, setPassword] = useState(""); 

    const [variant, setVariant] = useState("")

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])

 


    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">

            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5"> 
                <img src="/images/logo.png" alt="logo" className="h-12"></img> 

                </nav>

                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">

                        <h2 className="text-white text-4xl mb-8 font-semibold">{variant == 'login' ? 'Sign In' : 'Register'}</h2>

                        <div className="flex flex-col gap-4"> 

                        <Input id={"username"} onChange={(ev: { 
                            target: { value: SetStateAction<string>; }; })=> setUserName(ev.target.value)}
                         value={userName} label={"Username"} type={"username"} />


                        <Input id={"email"} onChange={(ev: { 
                            target: { value: SetStateAction<string>; }; })=> setEmail(ev.target.value)}
                         value={email} label={"Email"} type={"email"} />

<Input id={"password"} onChange={(ev: { 
                            target: { value: SetStateAction<string>; }; })=> setPassword(ev.target.value)}
                         value={password} label={"Password"} type={"password"} />

                        </div>

                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700
                        transition
                        ">Login</button>
                        <p className="text-neutral-500 mt-12">First time using Netflix?

                        <span onClick={toggleVariant} className="text-white ml-1 hover-underline cursor-pointer">Create account </span>
                        
                        </p>

                    </div>

                </div>
 
            </div>
        </div>
    )
} 

export default Auth; 