"use client"
import Form from "@/components/form/form";
import { SubmitHandler } from "react-hook-form";
import { Button } from "antd";
import FormInput from './../../components/form/frominput';
import Footer from "@/components/shared/footer";
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { createUser } from "@/redux/feature/userSlice/userSlice";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import registerImg from "../../../public/signup.png";

type FormValues = {
    email: string;
    id: string;
    password: string;
};


const Registration = () => {
    const [image, setImage] = useState(); 
    const [isLoading, setIsLoading] = useState(false) 
    const {user} = useAppSelector((state) => state.user)
    const router = useRouter();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(user?.email ){
            router.push('/');
            toast.success("Register Sucessfully")
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [user])


    const onsubmit: SubmitHandler<FormValues> = (data) => {
        try{
            console.log(data.email, data.password)
            setIsLoading(true);
            dispatch(createUser({email: data?.email, password: data.password}));
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        }catch(err){}
    }

    
  const onChange = (e: any) => { 
     const formData = new FormData();
    formData.append("image", e.target.files[0]);
    const url = `https://api.imgbb.com/1/upload?key=a57c49961905bdc8992484e12c0aa9d5`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.data.url)
        
      });
  };
  console.log(user);
   return (
<div className="grid grid-cols-12 gap-4">
    <div className="lg:col-span-6 col-span-12 p-4">
        <Image src={registerImg} alt="registerImg" />
    </div>
    <div className="lg:col-span-6 col-span-12 p-4">

    <div className="lg:mt-20">
            
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white mt-3 pl-6 lg:mb-5">Register Now Today!!</h1>
            <Form submitHandler={onsubmit}>
     
    <div className="py-3">
       <FormInput name="email"
                type="email"
                size="large"
                label="Email"
         />
    </div>
    <div className="py-3">
       <FormInput name="password"
                type="password"
                size="large"
                label="Password"
         />
    </div>
            

 
            <Button type="primary" htmlType="submit">
                        Register
                    </Button>
    </Form>
        <ToastContainer/>
        </div>

        
    </div>
</div>
    );
};

export default Registration;