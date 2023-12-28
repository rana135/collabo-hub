"use client"
import CarouselHome from "@/components/home/Carousel"; 
import CollaborationFAQ from "@/components/home/CollaborationFAQ";
import ContactUs from "@/components/home/ContactUs";
import Cta from "@/components/home/Cta";
import NextCollabo from "@/components/home/NextCollabo";
import RecentCollabo from "@/components/home/RecentCollabo";
import Testimonial from "@/components/home/Testimonial";
import auth from "@/redux/feature/userSlice/firebase";
import { setLoading, setUser } from "@/redux/feature/userSlice/userSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
 
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react"; 
 
export default function Home() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setLoading(true))
    onAuthStateChanged( auth, (user) => {
      if(user){
        dispatch(setUser(user.email))
        dispatch(setLoading(false))
      }
    } )
  }, [dispatch])
  return (
    <main className="">
        <CarouselHome/> 
        <NextCollabo/>
        <CollaborationFAQ/> 
        <RecentCollabo /> 
        <Testimonial/>
        <ContactUs/>
        <Cta/>    
    </main>
  )
}
