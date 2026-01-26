import { useNavigate } from 'react-router-dom'

const StudentExperienceSection = () => {
    const navigate = useNavigate()
    const dots = Array.from({ length: 5 })

    const handleLearnMore = () => {
        navigate('/edinai-student')
    }

    return (
        <section className="py-16 bg-black" id="student-view">
            <div className="max-w-[800px] mx-auto text-center px-4">
                <h2 className="text-[2.5rem] font-bold mb-8 text-white">Student View – For Learners</h2>

                <figure className="rounded-[20px] overflow-hidden mb-6">
                    <img
                        src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1400&q=80"
                        alt="AI teacher guiding students in a digital classroom"
                        className="w-full h-auto block"
                        loading="lazy"
                    />
                    <figcaption className="text-lg font-semibold mt-4 text-white/90">Attend Live &amp; Recorded Lectures</figcaption>
                </figure>

                <div className="flex justify-center gap-2 my-6" role="presentation">
                    {dots.map((_, index) => (
                        <span
                            key={index}
                            className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-white' : 'bg-white/30'}`}
                            aria-hidden="true"
                        />
                    ))}
                </div>

                <div className="flex items-start gap-3 text-left max-w-[600px] mx-auto my-8 text-white/70 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 flex-shrink-0" aria-hidden="true" />
                    <p>
                        This is AI for teaching that adapts to every learning style from visual to verbal—making lessons clear, fun, and
                        unforgettable.
                    </p>
                </div>

                <div className="text-center">
                    <button type="button" className="bg-gradient-primary text-white border-none py-3.5 px-8 rounded-[50px] text-sm font-semibold lowercase cursor-pointer transition-transform duration-200 hover:scale-105" onClick={handleLearnMore}>learn more</button>
                </div>
            </div>
        </section>
    )
}

export default StudentExperienceSection

