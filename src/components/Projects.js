import landing from "../assets/images/landing.webp"
import tictoe from "../assets/images/tictoe.jpg"
import weather from "../assets/images/weather.webp"
import watch from "../assets/images/watch.jpg"
import nostra from "../assets/images/nostra.jpg"
import todo from "../assets/images/todo.webp"
import udemy from "../assets/images/udemy.jpg"
import trip from "../assets/images/trip-advisor.webp"

function Projects() {

    const config = {
        projects: [
            {
                image: landing,
                description: "Responsive Landing Page,Build With FrondEnd Web Development",
                link: "https://santhanakevi333.github.io/Landing-Page/"

            },
            {
                image: tictoe,
                description: "Tic-Tac-Toe Web Application,Build With FrondEnd Web Development",
                link: "https://santhanakevi333.github.io/tic-tac-toe/"

            },
            {
                image: weather,
                description: "Weather API App,Build With FrondEnd and ReactJS",
                link: "https://weather-app-two-chi-86.vercel.app/"
            },
            {
                image: watch,
                description: "Stop Watch Web Application,Build With FrondEnd Web Development",
                link: "https://santhanakevi333.github.io/stopwatch/"

            },
            {
                image: nostra,
                description: "Nostra E-Commerce Website ,Build With FrondEnd Web Development",
                link: "https://santhanakevi333.github.io/Nostro-E-Commerce-website/"

            },
            {
                image: todo,
                description: "ACTodo Website ,Build With FrondEnd And ReactJS",
                link: "https://actodo-nu-opal.vercel.app/"

            },
            {
                image: udemy,
                description: "Udemy Clone Website ,Build With FrondEnd And ReactJs",
                link: "https://react-udemy-lilac.vercel.app/"

            },
            {
                image: trip,
                description: "Trip Advisor Website , Build with FrondEnd Web Development",
                link: "https://santhanakevi333.github.io/trip-advisor/"

            }
        ]
    }

    return (
        <section id="projects" className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10">

                    <h1 className="text-4xl text-white border-b-4 border-[#024337] mb-5 w-[150px] font-bold">Projects</h1>
                    <p className="pb-5">"These are the best projects I have done using web development, showcasing my skills in HTML, CSS, JavaScript, React, Node.js, MongoDB, and Tailwind CSS. Please check them out and explore the technologies I used!"</p>
                </div>

            </div>
            <div className=" flex">
                <div className="flex flex-col md:flex-row px-10 gap-5 flex-wrap justify-around">

                    {config.projects.map((project) => (

                        <div className="relative  md:basis-1/5">
                            <img className="border-2 border-white" src={project.image} alt="1" />
                            <div className="project-desc">
                                <p className="text-center px-5 py-5 font-hero-font">{project.description}</p>
                                <div className="flex justify-center">
                                    <a className="btn" target="_blank" href={project.link}>view project</a>
                                </div>
                            </div>

                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects