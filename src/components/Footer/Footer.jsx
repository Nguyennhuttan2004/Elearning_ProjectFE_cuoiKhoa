import { Image } from "antd";
import React from "react";

const Footer = () => {
  return (
    <div className="py-24 px-24 bg-[#181D38] text-sm mt-80">
      <div className="container mx-auto">
        <div className="grid grid-cols-4">
          <div className="">
            <h4 className="text-2xl tracking-wide font-bold text-white mb-6">
              Quick Link
            </h4>
            <a href="/" className="hover:text-base">
              <div className=" tracking-wide font-bold text-white">
                About Us
              </div>
            </a>
            <a href="/" className="hover:text-base">
              <div className=" tracking-wide font-bold text-white">
                Contact Us
              </div>
            </a>
            <a href="/" className="hover:text-base">
              <div className=" tracking-wide font-bold text-white ">
                Privacy Policy
              </div>
            </a>
            <a href="/" className="hover:text-base">
              <div className=" tracking-wide font-bold text-white">
                Term & Condition
              </div>
            </a>
            <a href="/" className="hover:text-base">
              <div className=" tracking-wide font-bold text-white">
                FAQs & Help
              </div>
            </a>
          </div>
          <div className="">
          <h1 className="font-bold text-2xl text-white mb-6">Contact</h1>
          <p className="font-bold text-white">123 Street, New York, USA</p>
          <p className="font-bold text-white">+01234567890</p>
          <p className="font-bold text-white  "> info@gmail.com</p>
          </div>
          <div className="">
          <h4 className="text-white mb-3 font-bold text-2xl mb-6">Gallery</h4>
          {/* <div className="grid grid-cols-3 gap-x-3 gap-y-3">
            <div className="max-w-full h-auto">
              <Image src={course1} alt="" />
            </div>
            <div className="max-w-full h-auto">
            <Image src={course1} alt="" />
            </div>
            <div className="max-w-full h-auto">
            <Image src={course1} alt="" />
            </div>
            <div className="max-w-full h-auto">
            <Image src={course1} alt="" />
            </div>
            <div className="max-w-full h-auto">
            <Image src={course1} alt="" />
            </div>
            <div className="max-w-full h-auto">
            <Image src={course1} alt="" />
            </div>
          </div> */}
          </div>
          <div className="ml-20">
          <h1 className="text-white mb-3 font-bold text-2xl mb-6">Newsletter</h1>
          <p className="text-white mb-3">
          Dolor amet sit justo amet elitr clita ipsum elitr est.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-[#F35C7A] text-white">Sign up</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between"></div>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </div>

    // <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-[#181D38] text-sm mt-24">
    //   {/* top */}
    //   <div className="flex flex-col md:flex-row justify-between gap-24">
    //     {/* left */}
    //     <div className="w-full md:w-1/2  lg:w-1/4 flex flex-col gap-8">
    //       <a href="/">
    //         <div className="text-2xl tracking-wide font-bold text-white">
    //           Quick Link
    //         </div>
    //       </a>
    //       <a href="/" className="hover:text-base">
    //         <div className=" tracking-wide font-bold text-white">About Us</div>
    //       </a>
    //       <a href="/" className="hover:text-base">
    //         <div className=" tracking-wide font-bold text-white">
    //           Contact Us
    //         </div>
    //       </a>
    //       <a href="/" className="hover:text-base">
    //         <div className=" tracking-wide font-bold text-white ">
    //           Privacy Policy
    //         </div>
    //       </a>
    //       <a href="/" className="hover:text-base">
    //         <div className=" tracking-wide font-bold text-white">
    //           Term & Condition
    //         </div>
    //       </a>
    //       <a href="/" className="hover:text-base">
    //         <div className=" tracking-wide font-bold text-white">
    //           FAQs & Help
    //         </div>
    //       </a>
    //     </div>
    //     {/* center */}
    //     <div className="w-full md:w-1/2  lg:w-1/4 flex flex-col gap-6 ">
    //       <h1 className="font-bold text-2xl text-white">Contact</h1>
    //       <p className="font-bold text-white">123 Street, New York, USA</p>
    //       <p className="font-bold text-white">+01234567890</p>
    //       <p className="font-bold text-white  "> info@gmail.com</p>
    //     </div>
    //     <div className="col-lg-3 col-md-6">
          // <h4 className="text-white mb-3 font-bold text-2xl">Gallery</h4>
          // <div className="grid grid-cols-3 gap-x-3 gap-y-3">
          //   <div className="max-w-full h-auto">
          //     <Image src={course1} alt="" />
          //   </div>
          //   <div className="max-w-full h-auto">
          //   <Image src={course1} alt="" />
          //   </div>
          //   <div className="max-w-full h-auto">
          //   <Image src={course1} alt="" />
          //   </div>
          //   <div className="max-w-full h-auto">
          //   <Image src={course1} alt="" />
          //   </div>
          //   <div className="max-w-full h-auto">
          //   <Image src={course1} alt="" />
          //   </div>
          //   <div className="max-w-full h-auto">
          //   <Image src={course1} alt="" />
          //   </div>
          // </div>
    //     </div>
    //     {/* right */}
    //     <div className="w-full md:w-1/2  lg:w-1/4 flex flex-col gap-6">
        //   <h1 className="text-white mb-3 font-bold text-2xl">Newsletter</h1>
        //   <p className="text-white">
        //   Dolor amet sit justo amet elitr clita ipsum elitr est.
        //   </p>
        //   <div className="flex">
        //     <input
        //       type="text"
        //       placeholder="Email address"
        //       className="p-4 w-3/4"
        //     />
        //     <button className="w-1/4 bg-[#F35C7A] text-white">JOIN</button>
        //   </div>
        //   <span className="font-semibold">Secure Payments</span>
        //   <div className="flex justify-between"></div>
        // </div>
    //   </div>
    //   {/* bottom */}
    //   <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
    //     <div className="font-medium">@ 2024 SuMin Store</div>
    //     <div className="flex flex-col gap-8 md:flex-row">
    //       <div className="">
    //         <span className="text-gray-500 mr-4">Language</span>
    //         <span className="font-medium">Viet Nam | TP Ho Chi Minh</span>
    //       </div>
    //       <div className="">
    //         <span className="text-gray-500 mr-4">Currency</span>
    //         <span className="font-medium">$ USD</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
