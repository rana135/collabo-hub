"use client"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineClose } from 'react-icons/ai';
import { LuLogOut } from 'react-icons/lu';
import image from "../../../public/slider/one.jpg";
import Image from "next/image";

const Profile = () => {
    const [open, setOpen] = useState(false)
    const handlePay = () => {
        toast.success("Congratulations Payment done!")
        setOpen(!open)
    }
    return (
        <div className="container mx-auto px-2 ">
            <div className="flex justify-center items-center h-screen">
                <div  className="w-96 relative bg-gray-50 shadow-lg rounded-md border border-gray-100">
                    <div className="flex justify-center my-10">
                        <Image src={image} className="w-32 h-32 rounded-full" alt="img" />
                    </div>
                    <div className="ml-4">
                        <h1 className="text-3xl mb-2 font-bold">Profile</h1>
                        <h4 className="capitalize font-extralight text-xl mt-4">hey rahim box!</h4>
                        <h5 className=" font-semibold text-gray-800 mt-1 ml-1 text-xs">email@gmail.com</h5>
                        <div>
                            <h5 className="flex  items-center text-xl cursor-pointer my-5 text-blue-700"><span className="font-extrabold"><LuLogOut/></span> <span className="ml-2">logout</span></h5>
                        </div>
                        <div className="my-5">
                            
                            <form className="mx-2">

                                <input type="text" className="border-b-2 bg-white border-gray-400 focus:border-b-2 focus:border-blue-500 focus:outline-none my-2 focus:shadow-lg py-1  w-full"/>
                                <input type="text" className="border-b-2 bg-white border-gray-400 focus:border-b-2 focus:border-blue-500 focus:outline-none my-2 focus:shadow-lg py-1  w-full"/>
                                <input type="text" className="border-b-2 bg-white border-gray-400 focus:border-b-2 focus:border-blue-500 focus:outline-none my-2 focus:shadow-lg py-1  w-full"/>
                                <input type="text" className="border-b-2 bg-white border-gray-400 focus:border-b-2 focus:border-blue-500 focus:outline-none my-2 focus:shadow-lg py-1  w-full"/>
                                
                            </form>
                        </div>

                        <div className="my-3 flex justify-around">
                            <button className="border hover:bg-white hover:text-black border-black bg-black px-4 py-1 text-lg font-semibold text-white">Updating</button>
                            <button onClick={()=> setOpen(!open)} className="border hover:bg-white hover:text-black border-green-600 bg-green-600 px-4 py-1 text-lg font-semibold text-white">Payment</button>
                        </div>
                        {open && <div className="absolute  top-80 w-72 h-60 flex justify-center bg-white">
                            <div className="mx-1">
                                <div className="flex justify-end">
                                     <h1 className=" text-4xl cursor-pointer" onClick={()=>setOpen(!open)}><AiOutlineClose/></h1>
                               </div>
                                <h1 className="text-2xl  my-3 text-center font-bold">payment</h1>
                                <input type="text" placeholder="Holder Name" className="border-2 bg-white border-gray-400  text-center capitalize  focus:border-blue-500 rounded-md focus:outline-none my-2 focus:shadow-lg py-1  w-full"/>
                                <input type="number" placeholder="card number" className="border-2 bg-white border-gray-400  text-center capitalize  focus:border-blue-500 rounded-md focus:outline-none my-2 focus:shadow-lg py-1  w-full"/>
                                <input type="number" placeholder="amount" className="border-2 bg-white border-gray-400  text-center capitalize  focus:border-blue-500 rounded-md focus:outline-none my-2 focus:shadow-lg py-1  w-full" />
                                <div className="flex justify-center my-2">
                                    <button onClick={handlePay} className="border hover:bg-white hover:text-black border-green-600 bg-green-600 w-52  py-1 text-lg font-semibold text-white">Pay</button>
                                </div>
                                </div>
                        </div>}
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Profile;
