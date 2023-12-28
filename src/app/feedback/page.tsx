"use client"
import Form from '@/components/form/form';
import FormInput from '@/components/form/frominput';
import { Button } from 'antd';
import { SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { Rate } from 'antd';
import FormTextArea from '@/components/form/formtextarea';
import FeedBackImg from "../../../public/feedback.png"; 
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { useCreateTestimonialMutation } from '@/redux/feature/apiSlice/apiSlice';

type FormValues = {
    id: string;
    username: string;
    email: string;
    feedback: string;
}; 
const FeedBack = () => {
    const [rating, setRating] = useState<number>(0); 
    const [addFeedback ] = useCreateTestimonialMutation()
    const router = useRouter();
      const onsubmit: SubmitHandler<FormValues> = (data) => {
        try{
            const feedbackData = {...data, rating}
            addFeedback(feedbackData)
            toast.success("Successfully Added!")
            router.push('/');
            
        }catch(err){}
    }
    return (
        <div className="grid grid-cols-12 gap-4">
           
            <div className="lg:col-span-6 col-span-12 p-4">
            <div className="mx-6">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white mt-3 pl-6 lg:mb-5">Give Us a FeedBack!!</h1> 
           <Form submitHandler={onsubmit}>
           <div className='py-3'>
                        <FormInput
                            name="username"
                            type="text"
                            size="large"
                            label="User Name"
                        />
                    </div>
     <div className='py-3'>
       <FormInput name="email"
                type="email"
                size="large"
                label="Email"
         />
    </div>
    <div className='py-3'>
    <h2 className="mb-2">Rate (out of 5)</h2>
    <Rate allowHalf 
    allowClear={true} defaultValue={rating} onChange={(value) => {setRating(value) }}/>
    </div>
    <div className='py-3'>
       <FormTextArea name="feedback"
                rows={4} placeholder="feedback"
                size="large"
                label="feedback"
         />
    </div> 
     
    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form>
                
        </div>
            </div>

            <div className="lg:col-span-6 col-span-12 p-4">
            <Image src={FeedBackImg} alt="FeedBackImg" />
            <ToastContainer/> 
            </div>
        </div>
    );
};

export default FeedBack;