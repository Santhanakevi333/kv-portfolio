import two from "../assets/2.png"
function About(){
const config ={
    line1:" Hello👋! I'm a passionate Web Developer I specialize in building responsive, user-friendly websites and take pride in turning creative ideas into digital realities.!",
    line2:'With expertise in HTML, CSS, JavaScript, and frameworks like Tailwind CSS. ',
    line3:'Backend: Node.js and MongoDB for developing scalable and efficient server-side applications.'

}

    return(
       <section className="flex flex-col md:flex-row bg-secondary px-5 justify-between" id="about">
        <div className="md:w-1/3">
            <img className="py-10" src={two}/>
        </div>
        <div className="md:w-1/2 flex justify-center ">
        <div className="flex flex-col justify-center text-white">
        <h1 className="text-4xl text-white border-b-4 border-[#036755] mb-5 w-[180px] font-bold">About Me</h1>
        <p className="pb-5"> {config.line1}</p>
        <p className="pb-5">{config.line2}</p>
        <p className="pb-5">{config.line3}</p>
        </div>
            
        </div>
       </section>
    )
}

export default About