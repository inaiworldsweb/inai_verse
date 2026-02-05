import featureImage from '../../../assets/final/smart automation for educational institute.png'

const AutomationSection = () => {
    return (
        <section className="py-16 bg-black">
            <div className="max-w-[900px] mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-[2rem] font-bold text-white mb-4">How Do You generate and Manage Your Lecture?</h2>
                <p className="text-sm text-white/70 mb-8">Take complete control of your classes with intelligent AI automation.</p>

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
                    <span className="text-sm font-medium text-white">Smart Automation for Educational Institutions</span>
                </div>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed mb-12 text-center max-w-[700px] mx-auto">
                    Ed-INAI simplifies every step of classroom management so teachers can focus on what truly matters: teaching and student success.
                </p>

                {/* Secondary Heading */}
                <h3 className="text-[1.75rem] font-bold text-white mb-4">
                    Think smart and Grow Your Students at a Global Scale
                </h3>

                {/* Secondary Description */}
                <p className="text-sm text-white/70 leading-relaxed">
                    With ED-INAI, institutions can elevate the level of education globally through AI-powered learning, multilingual delivery,
                    and consistent academic quality - without increasing operational complexity.
                </p>
            </div>
        </section>
    )
}

export default AutomationSection
