"use client"
import Image from "next/image";
import joinimg from "../../../../public/join.png"; 
import { Button } from "antd";
import Form from "@/components/form/form";
import FormInput from "@/components/form/frominput";
import { SubmitHandler } from "react-hook-form";
import { useCreateCollabMutation } from "@/redux/feature/collabdataSlice/collabdataSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";

type FormValues = {
  name: string,
    email: string;
    phone: number;
    title: string,
    location: string,
    date: string,
};

const JoinForm = ({ params }: { params: { id: string } }) => {
  const collaboData = [
    {
      id: 1,
      title: "React Virtualization",
      date: "12 December 2023",
      location: "Dhaka University",
      time: "4pm",
      details: "A session on React virtualization, exploring efficient rendering techniques.",
      totalSeat: 100,
      guests:  "Jhon Sir, Jhankar Sir",
      subGuests: "Mir Sir , Tonmoy Sir" ,
      description: "React virtualization is a performance optimization technique for rendering large sets of data in React applications efficiently. As user interfaces grow more complex, displaying extensive lists or grids can lead to performance issues due to the rendering of numerous DOM elements. React virtualization addresses this challenge by rendering only the items currently visible on the screen, dynamically loading and unloading components as. This technique employs windowing, where a fixed-size  window  of visible items is rendered, and as the user scrolls, new items are dynamically loaded into the window while the ones outside are unloaded, reducing the memory footprint and boosting rendering speed. React virtualization is particularly beneficial for applications dealing with extensive datasets, such as tables, lists, or dynamic content. Popular libraries like react-virtualized and react-window provide efficient implementations of virtualization in React, offering customizable components and optimizations for optimal performance. By adopting virtualization, React developers can create smooth and responsive user interfaces, ensuring a positive user experience even when dealing with large amounts of data. Overall, React virtualization is a crucial tool in the React developer's toolkit, enhancing the scalability and performance of applications with large and dynamic datasets ",
      imgUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "React Native",
      date: "15 December 2023",
      location: "BUET",
      time: "2pm",
      details: "Interactive workshop on React Native and Its Future",
      totalSeat: 50,
      guests:  "Jak sir, Parsian sir" ,
      subGuests: "Misbah sir, Abedin Sir",
      description: "React Native is an open-source framework developed by Facebook for building cross-platform mobile applications using JavaScript and React. Launched in 2015, it allows developers to use a single codebase to create apps for both iOS and Android platforms, reducing development time and effort. At its core, React Native employs the same principles as React, a popular JavaScript library for building user interfaces. This includes the use of a declarative syntax and a component-based architecture, making it easy for developers to compose rich, interactive mobile UIs. One of React Native's key advantages is its ability to achieve native-like performance by translating JavaScript code into native components. This is made possible by leveraging native APIs and rendering UI components using native views. React Native also supports hot-reloading, enabling developers to see the instant results of code changes during development The vibrant React Native community contributes to its extensive ecosystem, providing a wide range of third-party libraries and tools. Additionally, it allows integration with native modules, ensuring developers can access device-specific functionalities when needed.  Overall, React Native has gained popularity for its efficiency in cross-platform development, allowing developers to build high-quality mobile applications with a familiar and productive development experience",
      imgUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
  ];
  const router = useRouter();
      const selectedEventData = collaboData.find(event => event.id === parseInt(params.id));
      const [addCollabo ] = useCreateCollabMutation()
      const onsubmit: SubmitHandler<FormValues> = (data) => {
        try{
          const joinFormData = {
            name: data?.name,
            email: data?.email,
            phone: data?.phone,
            title: selectedEventData?.title,
            location: selectedEventData?.location,
            date: selectedEventData?.date,
            status: "pending",
          }
          addCollabo(joinFormData)
          toast.success("Successfully Submited!")
          toast.success("One of our Volunteer calls you soon!")
          router.push('/');
        }catch(err){}
    }

    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="lg:col-span-6 col-span-12 pt-5 px-5">
                    <Image src={joinimg} alt="joinimg" />
                </div>
                <div className="lg:col-span-6 col-span-12 p-5">
                  <h1 className="text-gray-500 font-bold lg:text-4xl text-2xl lg:mt-12 lg:mb-5">Join Now by Filling This Form</h1>   

<Form submitHandler={onsubmit}>
     <div className="py-2">
       <FormInput name="name"
                type="text"
                size="large"
                label="Username"
         />
    </div>
    <div className="py-2">
       <FormInput name="email"
                type="email"
                size="large"
                label="Email"
         />
    </div> 

    <div className="py-2">
       <FormInput name="phone"
                type="number"
                size="large"
                label="Phone"
         />
    </div> 

    <hr className="my-5"/> 

    <div className="py-2">
       <FormInput name="title"
                type="text"
                size="large"
                label="Collabo Name"
                value={selectedEventData?.title} 
         />
    </div> 

    <div className="py-2">
       <FormInput name="date"
                type="text"
                size="large"
                label="Date"
                value={selectedEventData?.date} 
         />
    </div> 


    <div className="py-2">
       <FormInput name="location"
                type="text"
                size="large"
                label="location"
                value={selectedEventData?.location} 
         />
    </div> 


    <Button type="primary" htmlType="submit">
    Submit
    </Button> 
            
           </Form>

           
                </div>
            </div>
            <ToastContainer/> 
        </div>
    );
};

export default JoinForm;