import React from "react";
// app/page.tsx or pages/index.tsx
import CabBookingForm from "@/components/form";
export default function HeroSection() {
    return (
      <main className="home-hero  bg-cover bg-center flex items-center justify-center  text-white">
        <div className=" bg-opacity-50 p-6 rounded-xl text-center">
          <h1 className="text-4xl font  md:text-6xl font-bold">
           WELCOME TO INDO-BHUTAN TRAVELS 
          </h1>
          <CabBookingForm />
        </div>
      </main>
    );
  }
  