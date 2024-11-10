"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar.jsx";
import Image from "next/image";

export default function YouTube() {
  
  return (
    <div>
    <div className="hidden lg:block">
      <Navbar />
      <div className=" topSection flex items-center justify-center w-full mx-auto flex-row ">

        <div className="h-[55vh] bg-[#f1f7fe] rounded-2xl shadow-lg p-10 pt-0  mt-[20vh] mb-[10vh] w-[40vw] ">
          <div className="pt-4">
            <div id='college' className="h-[50vh] overflow-y-scroll ">
              <h1 className="text-[4vh]">what is iist</h1>
              <h6>some waste clg</h6>
              <h1 className="text-[4vh]">food quality</h1>
              <h6>better than many other colloges, they don't keep ladies finger dialy that's the problem</h6>
              <h1 className="text-[4vh]">what is iist</h1>
              <h6>some waste clg</h6>
              <h1 className="text-[4vh]">say something abt iist</h1>
              <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius corporis quae porro neque officiis sunt unde nisi iste rem aut!</h6>

              <h1 className="text-[4vh]">say something abt iist</h1>
              <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius corporis quae porro neque officiis sunt unde nisi iste rem aut!</h6>

              <h1 className="text-[4vh]">say something abt iist</h1>
              <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius corporis quae porro neque officiis sunt unde nisi iste rem aut!</h6>

            </div>
            
          </div>
        </div>
        {/* Image Section */}
        <div className="h-auto flex justify-center items-center p-4 pt-0  mt-[10vh] w-[50vw] mt-[10vh]">
              <div className="flex flex-col items-center justify-center ">
                {/* <Image
                  src="/images/aboutt.png"
                  alt="contact us png"
                  className="w-full h-auto object-cover"
                  width={600} // Set width to match the display size of the image
                  height={400} // Adjust height based on the aspect ratio of your image
                  priority // Optionally, add this if it’s an important image (e.g., above-the-fold content)
                /> */}
                <iframe className='rounded-2xl  w-[40vw] h-[23vw] m-0' src="https://www.youtube.com/embed/sU8gsBT05dY?si=nb3vEtNJ31p51ctq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
              </div>
            </div> 
      </div>
      
      <Footer />
    </div >


    <div className="block lg:hidden">
      <Navbar />
      
      <div className=" topSection flex items-center justify-center w-full  flex-col ">
        {/* Image Section */}
        <div className=" h-auto flex justify-center items-center m-4 pt-0 w-[100%] ">
          <div className="flex flex-col items-center justify-center ">
            {/* <Image
              src="/images/aboutt.png"
              alt="contact us png"
              className="w-full h-auto object-cover"
              width={600} // Set width to match the display size of the image
              height={400} // Adjust height based on the aspect ratio of your image
              priority // Optionally, add this if it’s an important image (e.g., above-the-fold content)
            /> */}
            <iframe className='rounded-2xl w-[80vw] h-[45vw] mb-10 ' src="https://www.youtube.com/embed/sU8gsBT05dY?si=nb3vEtNJ31p51ctq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
          </div>
        </div> 
        

        <div className="h-[20vh] bg-[#f1f7fe] rounded-2xl shadow-lg p-10 pt-0 w-[80vw] m-6 ">
          <div className="pt-4">
            <div id='college' className="h-[17vh] overflow-y-scroll scrollbar-thin">
              <h1 className="text-[4vh]">what is iist</h1>
              <h6>some waste clg</h6>
              <h1 className="text-[4vh]">food quality</h1>
              <h6>better than many other colloges, they don't keep ladies finger dialy that's the problem</h6>
              <h1 className="text-[4vh]">what is iist</h1>
              <h6>some waste clg</h6>
              <h1 className="text-[4vh]">say something abt iist</h1>
              <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius corporis quae porro neque officiis sunt unde nisi iste rem aut!</h6>

              <h1 className="text-[4vh]">say something abt iist</h1>
              <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius corporis quae porro neque officiis sunt unde nisi iste rem aut!</h6>

              <h1 className="text-[4vh]">say something abt iist</h1>
              <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius corporis quae porro neque officiis sunt unde nisi iste rem aut!</h6>

            </div>
            
          </div>
        </div>
      </div>
        
      <Footer />
    </div >
    
    </div>
    
  );
}
