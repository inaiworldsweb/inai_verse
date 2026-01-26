import featureImage from '../../../Assetsa/e.png'

const AutomationSection = () => {
    return (
        <section className="py-16 bg-black">
            <div className="max-w-[900px] mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-[2rem] font-bold text-white mb-4">How Do You Manage Your Lecture?</h2>
                <p className="text-sm text-white/70 mb-8">Take full control of your classes with AI automation.</p>

                {/* Feature Image */}
                <div className="rounded-[20px] overflow-hidden mb-8">
                    <img
                        src={featureImage}
                        alt="AI-powered classroom management"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Automation Label */}
                <div className="text-center mb-6">
                    <span className="text-sm font-medium text-white">Automation for Institutions</span>
                </div>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed mb-12 text-center max-w-[700px] mx-auto">
                    Ed-INAI simplifies every step of classroom management so teachers can focus on what truly matters: teaching and student success.
                </p>

                {/* Secondary Heading */}
                <h3 className="text-[1.75rem] font-bold text-white mb-4">
                    Think Bigger and Grow Your Students at a Global Scale
                </h3>

                {/* Secondary Description */}
                <p className="text-sm text-white/70 leading-relaxed">
                    Your institution can now teach, train, and inspire students worldwide through virtual AI teachers that deliver consistent,
                    multilingual, and high-quality lectures anytime, anywhere. From local classrooms to international audiences, Ed-INAI transforms
                    education into a borderless experience, helping schools and colleges reach global standards with ease and innovation.
                </p>
            </div>
        </section>
    )
}

export default AutomationSection
