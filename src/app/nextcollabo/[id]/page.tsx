"use client"
import Image from "next/image";
import Link from "next/link";
 
const NextColabo = ({ params }: { params: { id: string } }) => {
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
  
  const selectedEventData = collaboData.find(event => event.id === parseInt(params.id));
 
   
  
    return ( 
        <>
        
    <section
  className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center"
>
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div
      className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
    >
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        {selectedEventData?.title}
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block">
        {selectedEventData?.details}
      </p>
      <div className="">
        <h2 className="mr-4 text-gray-500 md:mt-4 md:block">Guest: {selectedEventData?.guests}</h2>
        <h2 className="text-gray-500 md:mt-4 md:block">Sub Guest: {selectedEventData?.subGuests}</h2>
      </div>
      <div className="mt-4 md:mt-8">
        <Link
          href={`/joinform/${selectedEventData?.id}`}
          className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Confirm Now
        </Link>
      </div>
    </div>
  </div>

  <Image
    src={selectedEventData?.imgUrl}
    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
    alt="Violin"
    width={500}
    height={500}
    
  />
    </section>

<div className="py-4">
  <h2 className="sr-only">Steps</h2>

  <div>
    <ol
      className="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-3"
    >
      <li className="flex items-center justify-center gap-2 p-4">
        <svg
          className="h-7 w-7 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
          />
        </svg>

        <p className="leading-none">
          <strong className="block font-xl"> ID </strong>
          <small className="mt-1"> Bring Your ID </small>
        </p>
      </li>

      <li
        className="relative flex items-center justify-center gap-2 bg-gray-50 p-4"
      >
        <span
          className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-gray-100 ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50 sm:block"
        >
        </span>

        <span
          className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-gray-100 ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white sm:block"
        >
        </span>

        <svg
          className="h-7 w-7 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>

        <p className="leading-none">
          <strong className="block font-medium"> Address </strong>
          <small className="mt-1"> {selectedEventData?.location} </small>
        </p>
      </li>

      <li className="flex items-center justify-center gap-2 p-4">
        <svg
          className="h-7 w-7 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>

        <p className="leading-none">
          <strong className="block font-medium"> Money </strong>
          <small className="mt-1"> No need Money </small>
        </p>
      </li>
    </ol>
  </div>


  <div className="px-5 py-10 mx-5">
    <h1 className="text-2xl bold py-4">What this is importent?</h1>
    <h2 className="text-lg semi-bold">{selectedEventData?.description}</h2>
    </div>



</div> 



    </>
    );
};

export default NextColabo;