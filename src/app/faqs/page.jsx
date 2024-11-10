"use client";
import { useState, useEffect, useLayoutEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import style from '@/components/styles/faqCSS.module.css';
import Image from 'next/image';


export default function FAQPage() {

 


  return (
    <div>
      <div className="min-h-screen topSection flex flex-col items-center w-full mx-auto pb-20">
        <Navbar />
        <div className={`grid grid-cols-1 items-center pt-8`}>
            <div className="md:px-10 flex flex-col items-center gap-0 md:gap-4">
              <div className={`max-w-4xl px-2 md:px-0`}>

                <Image
                  src="/images/faqs.png"
                  alt="faq png"
                  className={`hidden md:inline-block`}
                  width={1860} // Set width to match the display size of the image
                  height={807} // Adjust height based on the aspect ratio of your image
                  priority
                />
                <Image
                  src="/images/faqs.png"
                  alt="faq png"
                  className={`md:hidden inline-block`}
                  width={1860} // Set width to match the display size of the image
                  height={807} // Adjust height based on the aspect ratio of your image
                  priority
                />
              </div>
              <div className={`bg-white md:rounded-lg pb-16 pt-5 md:pt-20 `}>
                <div>gonna upload</div>
              </div>
            </div> :
            <div className={`max-w-7xl mx-auto px-4 md:px-10 lg:px-10`}>
              <Loader />
            </div>
          
        </div>
      </div>
      <Footer />
    </div>);
}
