import Image from 'next/image';
import React from 'react';

const RecentCollabo = () => {
    return ( 
            <div className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Recent Collabo</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
             
            <div className="lg:flex">
                <Image className="object-cover w-full h-56 rounded-lg lg:w-64 mb-3" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80" alt="colalbo"
                width={500}
                height={500}
                />

                <div className="flex flex-col justify-between lg:mx-6">
                    <div className="pb-4">
                    <h2 className="text-xl font-semibold text-gray-800   dark:text-white"> Collaboration with Docker</h2>
                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 30 September 2023</span>
                    </div>
                    <div>
                       <p>Discover the transformative blend of AWS and Docker, amplifying cloud capabilities. From elastic scalability to containerized efficiency, this collaboration pioneers a future where innovation meets unparalleled infrastructure prowess</p>
                    </div>
                </div>
            </div>

            <div className="lg:flex">
                <Image className="object-cover w-full h-56 rounded-lg lg:w-64 mb-3" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80" alt="img" width={500}
      height={500} />

<div className="flex flex-col justify-between lg:mx-6">
                    <div className="pb-4">
                    <h2 className="text-xl font-semibold text-gray-800   dark:text-white"> Crafting AWS</h2>
                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 30 October 2023</span>
                    </div>
                    <div>
                       <p className=''>Witness the symphony of Docker and AWS and with jest, orchestrating a seamless collaboration. Unleash scalable solutions and containerized efficiency as these titans converge, reshaping the landscape of cloud technology.</p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</div> 
    );
};

export default RecentCollabo;