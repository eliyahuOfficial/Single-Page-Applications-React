import feature from '../assets/feature.png';
import feature3 from '../assets/feature3.png';
import feature2 from '../assets/feature2.png';
import { motion } from 'framer-motion';
import { fadeIn } from './veriants';


const Feature = () => {
    return (
        <div className="mt-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id='feature' >
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <motion.div
                    variants={fadeIn("right", 0.15)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="lg:w-1/4">
                    <h3 className="text-3xl font-bold lg:w-1/2 mb-3">What Sets Us Apart</h3>
                    <p className="text-lg">
                        We prioritize your needs with personalized solutions, exceptional quality, and unmatched support to ensure your success.
                    </p>
                </motion.div>
                <motion.div
                    variants={fadeIn("up", 0.25)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="w-full lg:w-3/4">
                    <div className="grid md:grid-cols-3 sm:grid-cols-1 items-start md:gap-12 gap-8">
                        <div className="bg-[rgba(70,48,48,0.04)] rounded-[35px] h-96 shadow-xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                            <div>
                                <img src={feature} alt="Organized study plan" className="w-72" />
                                <h5 className="text-2xl font-semibold px-5 text-center">Organized study plan</h5>
                            </div>
                        </div>
                        <div className="bg-[rgba(70,48,48,0.04)] rounded-[35px] h-96 shadow-xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                            <div>
                                <img src={feature3} alt="Structured study routine" className="w-72" />
                                <h5 className="text-2xl font-semibold px-5 text-center">Structured study routine</h5>
                            </div>
                        </div>
                        <div className="bg-[rgba(70,48,48,0.04)] rounded-[35px] h-96 shadow-xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                            <div>
                                <img src={feature2} alt="Streamlined study schedule" className="w-72" />
                                <h5 className="text-2xl font-semibold px-5 text-center">Streamlined study schedule</h5>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Feature;
