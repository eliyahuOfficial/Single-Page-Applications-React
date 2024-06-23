import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './veriants';

interface BannerProps {
    banner: string;
    heading: string;
    subheading: string;
    btn1: string;
    btn2?: string;
}

const Banner: React.FC<BannerProps> = ({ banner, heading, subheading, btn1, btn2 }) => {
    return (
        <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                <motion.div
                    variants={fadeIn("down", 0.25)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <img src={banner} alt="Banner Image" className='lg:h-[386px]' />
                </motion.div>



                <motion.div
                    variants={fadeIn("up", 0.25)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    className="md:w-3/5">
                    <h2 className='md:text-7xl text-4xl font-bold mb-6 leading-relaxed'>{heading}</h2>
                    <p className='text-2xl mb-8'>{subheading}</p>
                    <div className='space-x-5'>
                        <button className='btnPrimary'>{btn1}</button>
                        {btn2 && <button className='btnPrimary'>{btn2}</button>}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
