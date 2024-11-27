function Contact() {

const config ={
    email:" kevinkevi@gmail.com",
    phone:"+91 7695971980"
}

    return (
        <section className="flex flex-col bg-primary px-5 py-32" id="contact">

            <div className=" flex flex-col items-center ">

                <h1 className="text-4xl text-white border-b-4 border-black mb-5 w-[150px] font-bold">Contact</h1>
                <p className="pb-5 text-white">If you want  to discuss more in details , please contact me</p>
                <p className="py-2 text-white"><span className="font-bold text-black">Email :</span>{config.email}</p>
                <p className="py-2 text-white"><span className="font-bold text-black">Phone :</span> {config.phone}</p>


            </div>


        </section>
    )
}

export default Contact