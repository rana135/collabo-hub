 "use client"
import Link from "next/link";
const Footer = () => {
    return (
      <>
        <div className="container px-4 text-center">
            <div className="rounded-lg mx-2 relative">
              
              <div className="bg-white p-4 rounded-tl-[70px] rounded-tr-lg mx-8">
                 
                <hr className="divide-y-1 my-8" />
                <div className="footerContent">
                  <div className="grid grid-cols-12">
                    <div className="col-span-6 lg:col-span-3 my-2 py-3">
                      <h3 className="text-xl font-bold">About</h3>
                      <div className="lg:mt-6 mt-4 flex flex-col footerLinkZone">
                        <Link className="my-2" href="/Company">Company</Link>
                        <Link className="my-2" href="/History">History</Link>
                        <Link className="my-2" href="/Careers">Careers</Link>
                      </div>
                    </div>
                    <div className="col-span-6 lg:col-span-3 my-2 py-3">
                      <h3 className="text-xl font-bold">Support</h3>
                      <div className="lg:mt-6 mt-4 flex flex-col footerLinkZone">
                        <Link className="my-2" href="/feedback">Feed Back</Link>
                        <Link className="my-2" href="/feedback">Help Center</Link>
                        <Link className="my-2" href="/feedback">Support</Link>
                      </div>
                    </div>
                    <div className="col-span-6 lg:col-span-3 my-2 py-3">
                      <h3 className="text-xl font-bold">User</h3>
                      <div className="lg:mt-6 mt-4 flex flex-col footerLinkZone">
                        <Link className="my-2" href="/registration">Registration</Link>
                        <Link className="my-2" href="/login">Login</Link>
                        <Link className="my-2" href="/profile">Profile</Link>
                      </div>
                    </div>
                    <div className="col-span-6 lg:col-span-3 my-2 py-3">
                      <h3 className="text-xl font-bold">
                        Admin Zone
                      </h3>
                      <div className="lg:mt-6 mt-4 flex flex-col footerLinkZone">
                        <Link className="my-2" href="/admin/booking-management">Booking Management</Link>
                        <Link className="my-2" href="/admin/content-management">Content Management</Link>
                        <Link className="my-2" href="/admin/profile-management">Profile Management</Link>
                        <Link className="my-2" href="/admin/service-management">Service Management</Link>
                      </div>
                    </div> 
                  
                  </div>
                </div> 
 
              </div>
            </div> 
        </div>
        <footer className="footer footer-center p-4 text-base-content bg-black">
        <div className="container text-center">
          <p className="text-white">
            Copyright © Collabo-Hub. All rights reserved.
          </p>
        </div>
      </footer>
        </>
    );
};

export default Footer;