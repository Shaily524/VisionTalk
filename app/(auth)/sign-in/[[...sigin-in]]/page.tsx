/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex h-screen w-full">
      {/* Left Section - Logo with Animation */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <img src="images\logo.png" alt="logo" className="w-180 h-200 mb-2 animate-bounce" />
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl text-black font-bold">Welcome to VisionTalk</h1>
          <p className="mt-4 text-black text-lg">BRIDIGING DISTANCES, CONNECTING VISIONS.</p>
        </div>
      </div>
      
      {/* Right Section - SignIn Form */}
      <div className="w-1/2 flex items-center justify-center">
        <SignIn />
      </div>
    </main>
  );
}