"use client";
import { SetStateAction, useState } from 'react';
import Image from 'next/image';

const names = [
    {
        heading: "Lite",
        price: 41,
        subscriber: 0.50,
        button: "Start free trial",
        option: 'Sed ut perspiciatis unde',
        category: 'yearly',
        imgSrc: '/assets/pricing/starone.svg',
    },
    {
        heading: "Basic",
        price: 29,
        subscriber: 0.50,
        button: "Start free trial",
        option: 'Sed ut perspiciatis unde',
        category: 'yearly',
        imgSrc: '/assets/pricing/startwo.svg',
    },
    {
        heading: "Plus",
        price: 139,
        subscriber: 0.50,
        button: "Start free trial",
        option: 'Sed ut perspiciatis unde',
        category: 'yearly',
        imgSrc: '/assets/pricing/starthree.svg',
    },
    {
        heading: "Plus",
        price: 139,
        subscriber: 0.50,
        button: "Start free trial",
        option: 'Sed ut perspiciatis unde',
        category: 'monthly',
        imgSrc: '/assets/pricing/starone.svg',
    },
    {
        heading: "Lite",
        price: 41,
        subscriber: 0.50,
        button: "Start free trial",
        option: 'Sed ut perspiciatis unde',
        category: 'monthly',
        imgSrc: '/assets/pricing/startwo.svg',
    },
    {
        heading: "Basic",
        price: 29,
        subscriber: 0.50,
        button: "Start free trial",
        option: 'Sed ut perspiciatis unde',
        category: 'monthly',
        imgSrc: '/assets/pricing/starthree.svg',
    },
]


const Pricing = () => {

    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const handleCategoryChange = (category: SetStateAction<string>) => {
        setSelectedCategory(category);
    };

    const filteredData = names.filter((item) => item.category === selectedCategory);

    return (
        <div id="pricing" className='pricing-bg relative py-10'>
            <Image src="/assets/pricing/upperline.png" alt="upperline-image" width={280} height={219} className='absolute top-[160px] left-[90px] hidden sm:block' />
            <Image src="/assets/pricing/lowerline.png" alt="lowerline-image" width={180} height={100} className='absolute bottom-[0px] right-[90px]' />
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>Our Pricing Plan.</h3>

                <p className='text-lg font-normal text-center text-black opacity-60 pt-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br /> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>

                <div className='mt-6 relative'>
                    <div className='flex justify-center'>
                        <div className='bg-cornflowerblue flex py-1 px-1 rounded-full '>
                            <h3
                                className={`text-xl font-medium cursor-pointer ${selectedCategory === 'yearly' ? 'text-electricblue bg-white rounded-full py-2 px-4 sm:py-4 sm:px-16' : 'text-white py-2 px-4 sm:py-4 sm:px-16'
                                    }`}
                                onClick={() => handleCategoryChange('yearly')}
                            >
                                Yearly
                            </h3>
                            <h3
                                className={`text-xl font-medium cursor-pointer ${selectedCategory === 'monthly' ? 'text-electricblue bg-white rounded-full py-2 px-4 sm:py-4 sm:px-16' : 'text-white py-2 px-4 sm:py-4 sm:px-16'
                                    }`}
                                onClick={() => handleCategoryChange('monthly')}
                            >
                                Monthly
                            </h3>
                        </div>
                    </div>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-6'>
                    {
                        filteredData.map((item, index) => (
                            <div className='pt-10 pb-28 pl-10 pr-10 bg-white rounded-3xl bxshd relative cursor-pointer hover:bg-dodgerblue group' key={index}>
                                <Image src={item.imgSrc} alt="star-image" width={154} height={154} className='absolute bottom-0 right-0' />
                                <h4 className='text-4xl sm:text-5xl font-semibold mb-8 text-midnightblue group-hover:text-white'>{item.heading}</h4>
                                <button className='text-xl font-medium text-white w-full bg-blue hover:text-white group-hover:bg-cornflowerblue group-hover:border-cornflowerblue border-2 border-blue rounded-full py-4 px-12 mb-8'>{item.button}</button>
                                <h2 className='text-4xl sm:text-5xl font-semibold text-midnightblue mb-3 group-hover:text-white'>${item.price}/<span className='text-lightgrey'>mo</span></h2>
                                <p className='text-lg font-normal text-black group-hover:text-white'>${item.subscriber}<span>/ Subscriber</span></p>
                                <p className='text-lg font-normal text-black opacity-40 mb-6 group-hover:text-white'>(per subscriber per month)</p>

                                <div className='flex gap-4'>
                                    <Image src="/assets/pricing/tick.svg" alt="tick-image" width={32} height={32} />
                                    <p className='text-lg font-medium text-black opacity-60 group-hover:text-translucentwhite'>{item.option}</p>
                                </div>
                                <div className='flex gap-4 pt-6'>
                                    <Image src="/assets/pricing/tick.svg" alt="tick-image" width={32} height={32} />
                                    <p className='text-lg font-medium text-black opacity-60 group-hover:text-translucentwhite'>{item.option}</p>
                                </div>
                                <div className='flex gap-4 pt-6'>
                                    <Image src="/assets/pricing/tick.svg" alt="tick-image" width={32} height={32} />
                                    <p className='text-lg font-medium text-black opacity-60 group-hover:text-translucentwhite'>{item.option}</p>
                                </div>
                                <div className='flex gap-4 pt-6'>
                                    <Image src="/assets/pricing/tick.svg" alt="tick-image" width={32} height={32} />
                                    <p className='text-lg font-medium text-black opacity-60 group-hover:text-translucentwhite'>{item.option}</p>
                                </div>
                            </div>
                        ))}
                </div>

            </div>
        </div>
    );
}

export default Pricing;
