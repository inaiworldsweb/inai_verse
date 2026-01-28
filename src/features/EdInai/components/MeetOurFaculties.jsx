import facultyImage from '../../../assets/Aera.webp'

const MeetOurFaculties = () => {
    return (
        <section className="py-16 bg-black" id="meet-our-faculties">
            <div className="max-w-content mx-auto text-center px-4">
                <h1 className="text-[2.5rem] font-bold mb-8 text-white"> Meet our Smart AI Faculties </h1>
                 <h4>Powered by ED-INAI <br />your always-available digital academic partner.</h4>
                 <br />
                <div className="rounded-[20px] overflow-hidden max-w-[500px] mx-auto">
                    <img src={facultyImage} alt="AI-powered faculty mentor" loading="lazy" className="w-full h-auto block" />
                </div>
            </div>
        </section>
    )
}

export default MeetOurFaculties

