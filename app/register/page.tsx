"use client";

// Import React dan komponen Next.js
import React, {useRef, useEffect} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


// image
import Ilustrasi from "@/public/img/Mobile-login.svg"

// store
import useAuthStore from "@/store/loginStore";

// Komponen Login
const Register = () => {
const emailInputRef = useRef<HTMLInputElement | null>(null)
const passwordInputRef = useRef<HTMLInputElement | null>(null)
const register = useAuthStore(state => state.register)
const {isAuthenticated} = useAuthStore(state => state)
const router = useRouter();

const handleButtonClick = () => {
  if (emailInputRef.current && passwordInputRef.current) {
    console.log({email: emailInputRef.current.value, password: passwordInputRef.current.value});
    register(emailInputRef.current.value, passwordInputRef.current.value) 
  }
};

useEffect(() => {
  if(isAuthenticated){
   router.push("/login")
  }
 }, [isAuthenticated])
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
     
      <div className="w-full md:w-1/2 bg-[#1fb299] p-8 flex justify-center items-center">
        <Image
          src={Ilustrasi} 
          alt="Ilustrasi Gambar"
          className="max-w-md w-3/4 "
          width={100}
          height={100}
        />
      </div>

     
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <div className="max-w-md w-full space-y-5">
        
          <h1 className="text-2xl font-bold">Selamat Datang!</h1>

          
          <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          >
           
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Alamat Email Anda"
                required
                ref={emailInputRef}
              />
            </div>

           
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password Anda"
                required
                ref={passwordInputRef}
              />
            </div>

           
            <button
              type="submit"
              className="w-full bg-[#1fb299] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#1fb299] transition duration-300"
              onClick={handleButtonClick}
            >
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
