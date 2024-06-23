import { useState } from "react";
import { motion } from 'framer-motion';
import { fadeIn } from './veriants';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        {
            name: "Start",
            monthlyPrice: 19,
            yearlyPrice: 199,
            description: "Affordable pricing to kickstart your journey with essential features and support.",
            features: [
                "Essential features included",
                "Affordable startup pricing",
                "Basic support available",
            ],
            yellow: "/src/assets/yellow.png"
        },
        {
            name: "Advance",
            monthlyPrice: 39,
            yearlyPrice: 399,
            description: "Unlock enhanced capabilities and support with our mid-tier pricing option.",
            features: [
                "Enhanced capabilities ",
                "Mid-tier pricing option",
                "Improved support access",
            ],
            yellow: "/src/assets/yellow.png"
        },
        {
            name: "Premium",
            monthlyPrice: 59,
            yearlyPrice: 599,
            description: "Experience our full suite of features and top-tier support with exclusive pricing.",
            features: [
                "Full features suite",
                "Exclusive premium pricing",
                "Top-tier support",
            ],
            yellow: "/src/assets/yellow.png"
        },
    ];

    return (
        <div className="md:px-14 px-4 max-w-screen-2xl mx-auto mb-4" id='pricing'>
            <div className="text-center">
                <h2 className="md:text-4xl text-2xl font-bold mb-4">Explore all our plans here</h2>
                <p className='md:w-1/3 mx-auto px-4 text-lg'>Explore all our plans here. Each one is designed to meet your unique needs and preferences.</p>

                <div className="mt-16">
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                        <span className="mr-8 text-2xl font-semibold">Monthly</span>
                        <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out relative">
                            <div className={`w-6 h-6 bg-yellow-400 rounded-full absolute transition-transform duration-200 ease-in-out ${isYearly ? "transform translate-x-8" : ""}`}></div>
                        </div>
                        <span className="ml-8 text-2xl font-semibold">Yearly</span>
                    </label>
                    <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
                </div>
            </div>
            <motion.div
                variants={fadeIn("up", 0.15)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-12/12 mx-auto">
                {
                    packages.map((pkg, index) => (
                        <div key={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-2xl">
                            <h3 className="text-2xl font-bold text-center">{pkg.name}</h3>
                            <p className="text-center my-5 text-lg">{pkg.description}</p>
                            <p className="mt-5 text-center text-yellow-500 text-4xl font-bold">
                                {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}
                                <span className="text-base font-medium">/{isYearly ? 'year' : 'month'}</span>
                            </p>
                            <ul className="mt-4 space-y-2 px-4">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex gap-3 items-center">
                                        <img src={pkg.yellow} alt="" className="w-4 h-4" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="w-full mx-auto mt-8 flex items-center justify-center">
                                <button className="btnPrimary">Get Started</button>
                            </div>
                        </div>
                    ))
                }
            </motion.div>
        </div>
    );
}

export default Pricing;
