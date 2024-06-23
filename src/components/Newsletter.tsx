import Banner from "./Banner"
import businesshd from '../assets/businesshd.png';

const Newsletter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">

            <Banner banner={businesshd} heading={"Subscribe to Our Newsletter"} subheading={"Stay informed with the latest updates, exclusive offers, and insights delivered straight to your inbox."} btn1={"Subscribe Now"} />

        </div>
    )
}

export default Newsletter