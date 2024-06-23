import React from 'react';
import aboutImg from '../assets/about.png';
import aboutImg2 from '../assets/about2.png';
import { motion } from 'framer-motion';
import { fadeIn } from './veriants';



interface SectionProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
    reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({ imgSrc, imgAlt, title, description, reverse }) => {
    return (
        <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} justify-between items-center gap-8`} >
            <motion.div
                variants={fadeIn("up", 0.25)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='lg:w-1/2'>
                <img src={imgSrc} alt={imgAlt} />
            </motion.div>
            <motion.div
                variants={fadeIn("down", 0.15)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='md:w-3/5'>
                <h2 className='md:text-4xl text-2xl font-bold leading-normal'>
                    {title}
                </h2>
                <p className='text-lg mb-7 mt-4'>
                    {description}
                </p>
                <button className='btnPrimary'>Get Started</button>
            </motion.div>
        </div>
    );
}

const About: React.FC = () => {
    return (
        <div className="md:px-14 px-4 max-w-screen-2xl mx-auto mb-12" id='about'>
            <Section
                imgSrc={aboutImg}
                imgAlt="About our commitment"
                title="For many years, we have been committed to continuously improving our products."
                description="For many years, we have focused on continuously improving our products to deliver the best possible experience for our customers."
            />
            <Section
                imgSrc={aboutImg2}
                imgAlt="Our dedication"
                title="Our dedication to the constant enhancement of our offerings has spanned many years."
                description="Our dedication to constant enhancement has spanned many years. We innovate continuously to ensure our products exceed the highest standards."
                reverse={true}
            />
        </div>
    );
}

export default About;
