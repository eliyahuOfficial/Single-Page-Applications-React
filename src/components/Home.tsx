import businesshd from '../assets/businesshd.png';
import Banner from './Banner';

const Home = () => {
    return (
        <div className="md:px-12  p-4  max-w-screen-2xl mx-auto mt-36" id='home' >

            <Banner banner={businesshd} heading={"Welcome to Excellence"} subheading={"Delivering innovative solutions and exceptional service for your success ..."} btn1={"Get Started"} btn2={"Discount"} />

        </div>
    )
}

export default Home