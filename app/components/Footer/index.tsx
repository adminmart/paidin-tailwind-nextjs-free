import Link from "next/link";
import Image from "next/image";

interface links {
    link: string;
}

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/assets/footer/facebook.svg',
        link: 'www.facebook.com',
        width: 10
    },
    {
        imgSrc: '/assets/footer/instagram.svg',
        link: 'www.instagram.com',
        width: 14
    },
    {
        imgSrc: '/assets/footer/twitter.svg',
        link: 'www.twitter.com',
        width: 14
    },

]

const links: links[] = [
    {
        link: 'Product',
    },
    {
        link: 'Pricing',
    },
    {
        link: 'Features',
    },

]



const footer = () => {
    return (

        <div className=" bg-midnightblue">

            <div className="mx-auto max-w-2xl pt-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">

                    {/* COLUMN-1 */}

                    <div className='sm:col-span-6 lg:col-span-3'>
                        <div className="flex flex-shrink-0 items-center border-right">
                            <Image src="/assets/footer/logo.svg" alt="logo" width={214} height={66} />
                        </div>
                    </div>

                    <div className='sm:col-span-6 lg:col-span-5 flex items-center'>
                        <div className='flex gap-4'>
                            {links.map((items, i) => (
                                <div key={i}>
                                    <Link href="/" className="text-lg font-normal text-white flex items-center justify-center">
                                         {items.link}
                                    </Link>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className='sm:col-span-6 lg:col-span-4'>
                        <div className='flex gap-4 lg:justify-end'>
                            {socialLinks.map((items, i) => (
                                <Link href={items.link} key={i}>
                                    <div className="socialBg h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-white">
                                        <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
                                    </div>
                                </Link>
                            ))}

                        </div>
                    </div>

                </div>

                {/* All Rights Reserved */}

                <div className='pt-12 pb-10 lg:flex items-center justify-between border-t border-t-white border-opacity-30'>
                    <h4 className='text-lg text-center md:text-start font-normal text-white opacity-60'>@2023.Paidin.All rights reserved</h4>
                    <div className="flex gap-5 mt-6 md:mt-0 justify-center md:justify-start">
                        <h4 className='opacity-60 text-lg font-normal text-white'><Link href="/" target="_blank">Privacy policy</Link></h4>
                        <div className="h-5 bg-white opacity-60 w-0.5"></div>
                        <h4 className='opacity-60 text-lg font-normal text-white'><Link href="/" target="_blank">Terms & conditions</Link></h4>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default footer;
