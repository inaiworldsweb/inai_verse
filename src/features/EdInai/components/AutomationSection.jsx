import featureImage from '../../../assets/final/smart automation for educational institute.png'

const AutomationSection = () => {
    return (
        <section className="py-10 md:py-16 bg-black" id="automation">
            <div className="max-w-[900px] mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-[25px] md:text-[40px] font-bold text-white mb-4 capitalize tracking-tight">How Do You Generate And Manage Your Lecture?</h2>
                <p className="text-sm text-white/70 mb-8 capitalize tracking-normal">Take Complete Control Of Your Classes With Intelligent AI Automation.</p>

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
                    <span className="text-sm font-medium text-white capitalize tracking-wide">Smart Automation For Educational Institutions</span>
                </div>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed mb-12 text-center max-w-[700px] mx-auto capitalize tracking-normal">
                    Ed-INAI Simplifies Every Step Of Classroom Management So Teachers Can Focus On What Truly Matters: Teaching And Student Success.
                </p>

                {/* Secondary Heading */}
                <h3 className="text-[1.75rem] font-bold text-white mb-4 capitalize tracking-tight">
                    Think Smart And Grow Your Students At A Global Scale
                </h3>

                {/* Secondary Description */}
                <p className="text-sm text-white/70 leading-relaxed capitalize tracking-normal">
                    With ED-INAI, Institutions Can Elevate The Level Of Education Globally Through AI-Powered Learning, Multilingual Delivery,
                    And Consistent Academic Quality - Without Increasing Operational Complexity.
                </p>
            </div>
        </section>
    )
}

export default AutomationSection
