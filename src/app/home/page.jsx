"use client"
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
export default function Home() {

  return (
    <div>
      <div className={`topSection min-h-screen flex flex-col items-center w-full mx-auto pb-20`}>
        <Navbar />
        
        <iframe src="https://kurmananda.github.io/studycircuit/" className={`w-[95vw] h-[70vh] lg:h-[90vh]`} frameborder="0"></iframe>
        <h1>current website is still under development. Untlil then experience website in website..!</h1>
      </div>
      <div>
      </div>
      <Footer />
    </div>
  );
}
