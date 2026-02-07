import facultyImage from '../../../assets/Aera.webp'

const MeetOurFaculties = () => {
    return (
        <section className="py-10 md:py-16 bg-black" id="meet-our-faculties">
            <div className="max-w-[1200px] mx-auto text-center px-4">
                <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold mb-4 md:mb-8 text-white px-4"> Meet our Smart AI Faculties </h2>
                <h4 className="text-sm sm:text-base text-white/70 max-w-[500px] mx-auto mb-8">Powered by ED-INAI <br />your always-available digital academic partner.</h4>
                <div className="rounded-[20px] overflow-hidden max-w-[500px] mx-auto border border-white/5 shadow-2xl shadow-white/5">
                    <img src={facultyImage} alt="AI-powered faculty mentor" loading="lazy" className="w-full h-auto block" />
                </div>
            </div>
        </section>
    )
}

export default MeetOurFaculties

