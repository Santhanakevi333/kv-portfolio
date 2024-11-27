import one from "../assets/1.png"
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin , AiOutlineNa} from "react-icons/ai";

function Hero() {

    const config = {
        subtitle:"I'm a Full StackWeb Developer",
        social:{
instagram:"https://www.instagram.com/kevi_mithun?igsh=cDZydXNuZDY5MTVi",
facebook:"https://www.facebook.com/profile.php?id=100052795493300&mibextid=ZbWKwL",
linkedin:"http://www.linkedin.com/in/kevin003"

        }
    }

    return (
        <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center  ">
            <div className=" md:w-1/2 flex flex-col">
                <h1 className=" text-white text-6xl font-hero-font ">Hi , <br /> I'm <span className="text-black">Kevin</span> <p className="text-2xl">{config.subtitle}</p></h1>
                <div className="flex py-10">
                    <a target="_blank" href={config.social.instagram} className="pr-5 hover:text-white"><AiOutlineInstagram size={40} /></a>
                    <a target="_blank" href={config.social.facebook} className="pr-5  hover:text-white"><AiOutlineFacebook size={40} /></a>
                    <a target="_blank" href={config.social.linkedin} className="hover:text-white"><AiOutlineLinkedin size={40} /></a>
                </div>
            </div>


            <img className="md:w-1/3" src={one}></img>

        </section>
    )
}
export default Hero