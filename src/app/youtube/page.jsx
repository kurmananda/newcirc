"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar.jsx";
import Image from "next/image";
import {useState} from 'react';
export default function YouTube() {
  const [content, setLink] = useState("https://youtu.be/_QVDKXF9TXY?si=hQoljbE_0R3SI-Y7");
  const editLink1 = () => {
    setLink('https://youtu.be/_QVDKXF9TXY?si=hQoljbE_0R3SI-Y7');

  };
  const editLink2 = () => {
    setLink('https://youtu.be/gtgLrJcGF7Q?si=tE7d8TaQWppy8MgO');
  };
  const editLink3 = () => {
    setLink('https://youtu.be/yMc0_QN438U?si=uRpp447i6Ty4mdgw');
  };
  
  return (
    <div>
    <div className={`hidden lg:block`}>
      <Navbar />
      <div className={` topSection flex items-center justify-center w-full mx-auto flex-row `}>

        <div className={`h-[55vh] bg-[#f1f7fe] rounded-2xl shadow-lg p-10 pt-0  mt-[20vh] mb-[10vh] w-[40vw]`}>
          <div className={`pt-4`}>
            <div id='college' className={`h-[50vh] overflow-y-scroll`}>
              
              <button className={`text-[3vh]`} onClick={editLink1}>Basic Electrical Engineering video</button>
              <button className={`text-[3vh]`} onClick={editLink2}>mechanics 10th sept part-2{content}</button>
              <button className={`text-[3vh]`} onClick={editLink3}>mechanics 10th sept part-1</button>
            </div>
            
          </div>
        </div>
        {/* Image Section */}
        <div className={`h-auto flex justify-center items-center p-4 pt-0  mt-[10vh] w-[50vw] mt-[10vh]`}>
              <div className={`flex flex-col items-center justify-center `}>
                {/* <Image
                  src="/images/aboutt.png"
                  alt="contact us png"
                  className="w-full h-auto object-cover"
                  width={600} // Set width to match the display size of the image
                  height={400} // Adjust height based on the aspect ratio of your image
                  priority // Optionally, add this if it’s an important image (e.g., above-the-fold content)
                /> */}
                <iframe id="aa"  className={`rounded-2xl  w-[40vw] h-[23vw] m-0`} src={content} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen ></iframe>
              </div>
            </div> 
      </div>
      
      <Footer />
    </div >


    <div className={`block lg:hidden`}>
      <Navbar />
      
      <div className={` topSection flex items-center justify-center w-full  flex-col `}>
        {/* Image Section */}
        <div className={` h-auto flex justify-center items-center m-4 pt-0 w-[100%] `}>
          <div className={`flex flex-col items-center justify-center `}>
            {/* <Image
              src="/images/aboutt.png"
              alt="contact us png"
              className="w-full h-auto object-cover"
              width={600} // Set width to match the display size of the image
              height={400} // Adjust height based on the aspect ratio of your image
              priority // Optionally, add this if it’s an important image (e.g., above-the-fold content)
            /> */}
            <iframe className={`rounded-2xl w-[80vw] h-[45vw] mb-10 `} src={content} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen ></iframe>
          </div>
        </div> 
        

        <div className={`h-[20vh] bg-[#f1f7fe] rounded-2xl shadow-lg p-10 pt-0 w-[80vw] m-6 `}>
          <div className={`pt-4`}>
            <div id='college' className={`h-[17vh] overflow-y-scroll scrollbar-thin`}>
              
              <button className={`text-[3vh]`} onClick={editLink1}>Basic Electrical Engineering video</button>
              <button className={`text-[3vh]`} onClick={editLink2}>mechanics 10th sept part-2{content}</button>
              <button className={`text-[3vh]`} onClick={editLink3}>mechanics 10th sept part-1</button>
            </div>
            
          </div>
        </div>
      </div>
        
      <Footer />
    </div >
    
    </div>
    
  );
}
