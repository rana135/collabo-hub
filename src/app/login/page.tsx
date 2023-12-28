"use client"
import Form from "@/components/form/form";
import FormInput from "@/components/form/frominput";
import { loginUser } from "@/redux/feature/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import {useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropd from './../../components/shared/dropd';
import Image from "next/image";
import loginImg from "../../../public/login.png";

type FormValues = {
  [x: string]: string;
  id: string;
  password: string;
};
const Login = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector((state) => state.user)
    const router = useRouter();

    useEffect(() => {
        if(user?.email ){
            router.push('/');
            toast.success("Login Sucessfull!!")
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [user])

  const onsubmit: SubmitHandler<FormValues> = (data) => {
    try{
        dispatch(loginUser({email: data?.email, password: data?.password}));
    }catch(err){}
}
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="lg:col-span-6 col-span-12 p-4">
      <Image src={loginImg} alt="loginImg" />
      </div>
      <div className="lg:col-span-6 col-span-12 p-4">
        


    <div className="lg:mt-20">
    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white mt-3 pl-6 lg:mb-5">Login Now!!</h1>
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
                          Login
                      </Button>
             </Form>
             <ToastContainer/>
  
  
             </div>
  
            
      </div>
    </div> 
  )
}

export default Login