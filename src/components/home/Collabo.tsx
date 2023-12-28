import Link from 'next/link';
import React from 'react';

const Collabo = ({collaboData}) => {
    return (
        <Link href={`/nextcollabo/${collaboData.id}`}>
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto"> 
            <div className="relative">
            <div className=" overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                 
                
                style={{ backgroundImage: `url(${collaboData.imgUrl})` }}
                >
                <div
                    className="z-50 relative flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">{collaboData.location}</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">{collaboData.time}</p>
                </div> 
            </div>
              <div className="absolute bottom-0 -z-1 w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">{collaboData.title}</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">{collaboData.date}</p>
                </div>
              </div>



            </div> 
        </section>
        </Link>
    );
};

export default Collabo;