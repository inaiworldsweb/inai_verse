import inaiImage from '../../../assets/inai.webp'
import vinaiImage from '../../../assets/Vinai.webp'
import aeraImage from '../../../assets/Aera.webp'

const MeetOurFaculties = () => {
    return (
        <section className="py-10 md:py-16 bg-black" id="meet-our-faculties">
            <div className="max-w-[1200px] mx-auto text-center px-4">
                <h2 className="text-[25px] md:text-[40px] font-bold mb-4 md:mb-8 text-white px-4 capitalize tracking-tight"> Meet Our Smart AI Faculties </h2>
                <h4 className="text-sm sm:text-base text-white/70 max-w-[500px] mx-auto mb-8 capitalize tracking-normal">Powered By ED-INAI <br />Your Always-Available Digital Academic Partner.</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-[1100px] mx-auto">
                    <div className="rounded-[20px] overflow-hidden w-full border border-white/5 shadow-2xl shadow-white/5">
                        <img src={vinaiImage} alt="VINAI AI faculty" loading="lazy" className="w-full h-auto block" />
                    </div>
                    <div className="rounded-[20px] overflow-hidden w-full border border-white/5 shadow-2xl shadow-white/5">
                        <img src={inaiImage} alt="INAI AI faculty" loading="lazy" className="w-full h-auto block" />
                    </div>
                    <div className="rounded-[20px] overflow-hidden w-full border border-white/5 shadow-2xl shadow-white/5">
                        <img src={aeraImage} alt="AERA AI faculty" loading="lazy" className="w-full h-auto block" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MeetOurFaculties

