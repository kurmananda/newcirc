import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {

    return (
        <nav className={`bg-white pt-8 lg:pt-4 pb-4 pr-4 pl-4 items-center`}>
            <div className={`mx-0 xl:mx-28 flex items-center`}>
                <div className={``}>
                    <Link href="/">

                        <Image
                            src="/images/logo.png"
                            alt="Website Logo"
                            className="h-8 hidden md:inline-block"
                            width={180} // Set width to match the display size of the image
                            height={100} // Adjust height based on the aspect ratio of your image
                            priority // Optionally, add this if it’s an important image (e.g., above-the-fold content)
                        />

                    </Link>
                    <Link href="/">
                        <Image
                            src="/images/logo_half.png"
                            alt="Website Logo"
                            className="h-10 md:hidden"
                            width={50} // Set width to match the display size of the image
                            height={50} // Adjust height based on the aspect ratio of your image
                            priority // Optionally, add this if it’s an important image (e.g., above-the-fold content)
                        />
                    </Link>
                </div>


            </div>

        </nav>
    );
}

export default Navbar;







