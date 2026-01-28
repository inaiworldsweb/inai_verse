import { useNavigate } from 'react-router-dom'
import stepImage from '../../../assets/2.jpg'

const implementationSteps = [
    {
        id: 'register-institution',
        title: 'Register your institution and create an admin profile.',
    },
    {
        id: 'upload-syllabus',
        title: 'Upload your syllabus or academic modules.',
    },
    {
        id: 'schedule-lectures',
        title: 'Schedule AI-led lectures and assign topics.',
    },
    {
        id: 'run-classes',
        title: 'Let Ed-INAI conduct classes, handle Q&A, and generate analytics.',
    },
]

const VisionSection = () => {
    const navigate = useNavigate()

    const handleLearnMore = () => {
        navigate('/edinai-student')
    }

    return (
        <section className="py-16 bg-black" id="vision">
            <div className="max-w-content mx-auto px-4">
                {/* <header className="text-center">
                    <h2 className="text-[2.5rem] font-bold mb-4 text-white">Our Vision</h2>
                    <p className="text-2xl text-white/80 mb-4">We don't want India to be left behind</p>
                    <p className="text-lg text-white/70 max-w-[800px] mx-auto my-2 leading-relaxed">
                        At INAI Worlds, we are shaping the next generation of education through AI innovation, accessibility, and empowerment
                        for every learner.
                    </p>
                    <p className="text-lg font-semibold text-white max-w-[800px] mx-auto my-2 leading-relaxed">We are for people. We are for New India.</p>
                </header> */}

                <div className="my-6">
                    <h3 className="text-[2rem] font-bold text-center mb-2 text-white">How to Implement ED-INAI in Your Institution?</h3>
                    <p className="text-center text-white/70 mb-8">Implementation Steps</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
                        {implementationSteps.map(({ id, title }, index) => (
                            <div key={id} className="bg-white/[0.03] rounded-[15px] p-6 text-center">
                                <figure className="rounded-[10px] overflow-hidden mb-4">
                                    <img src={stepImage} alt={`Step ${index + 1}`} className="w-full h-[200px] object-cover" loading="lazy" />
                                </figure>
                                <p className="text-sm text-white/80 leading-normal font-medium">{title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <button type="button" className="bg-gradient-primary text-white border-none py-3.5 px-8 rounded-[50px] text-sm font-semibold lowercase cursor-pointer transition-transform duration-200 hover:scale-105" onClick={handleLearnMore}>learn more</button>
                </div>
            </div>
        </section>
    )
}

export default VisionSection

