import Collabo from "./Collabo";

const NextCollabo = () => {
    const collaboData = [
        {
          id: 1,
          title: "React Virtualization",
          date: "12 December 2023",
          location: "Dhaka University",
          time: "4pm",
          details: "A session on React virtualization, exploring efficient rendering techniques.",
          totalSeat: 100,
          guests: ["Speaker 1", "Speaker 2"],
          subGuests: ["Guest 1", "Guest 2"],
          description: "Join us for an insightful exploration of React virtualization. Limited seats available!",
          imgUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
          id: 2,
          title: "React Native Future",
          date: "15 December 2023",
          location: "Tech Hub",
          time: "2pm",
          details: "Interactive workshop on React Native and his future with effective collaboration tools and strategies.",
          totalSeat: 50,
          guests: ["Facilitator 1", "Facilitator 2"],
          subGuests: ["Participant 1", "Participant 2"],
          description: "Unlock the power of collaboration tools. Limited seats. Don't miss this opportunity!",
          imgUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
      ];
            
    return (
        <div className="py-6 mx-4">
             <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white mt-3 pl-6">Upcomming Collabo</h1>
            <div className="grid grid-cols-12 gap-4">
                <div className="lg:col-span-6 col-span-12">
                    <Collabo collaboData={collaboData[0]} />
                </div>
                <div className="lg:col-span-6 col-span-12">
                    <Collabo collaboData={collaboData[1]}/>
                </div>
            </div>
        </div>
    );
};

export default NextCollabo;