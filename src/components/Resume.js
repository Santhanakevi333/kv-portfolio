import three from "../assets/images/cv.png"
function Resume(){

const config ={
    link:"https://drive.google.com/file/d/1B1-YNmTaF0CKQD7aKXzf3PBqp8DcRtIn/view?usp=drivesdk"
}

    return(
       <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5 justify-end">
        <div className="md:w-1/3 flex justify-center">
            <img className="py-10 w-[300px]" src={three}/>
        </div>
        <div className="md:w-1/2 flex justify-start ">
        <div className="flex flex-col justify-center text-center text-white">
        <h1 className="text-4xl text-white border-b-4 border-[#036755] mb-5 w-[150px] font-bold">Resume</h1>
        <p className="pb-5">You can view my Resume  <a className="btn" href={config.link} target="_blank" >Download</a></p>
        
        </div>
            
        </div>
       </section>
    )
}

export default Resume