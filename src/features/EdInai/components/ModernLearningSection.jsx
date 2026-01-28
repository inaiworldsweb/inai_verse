import featureImage from '../../../Assetsa/e.png'

const features = [
    {
        id: 'dashboards',
        image: featureImage,
        title: 'Smart dashboards and\nreal-time feedback',
    },
    {
        id: 'visuals',
        image: featureImage,
        title: 'Engaging visuals and\ngamified learning',
    },
]

const ModernLearningSection = () => {
    return (
        <section className="py-16 bg-black">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-[2rem] font-bold text-white mb-4">Made for the Modern Learning Generation</h2>
                    <p className="text-sm text-white/70 max-w-[700px]">
                        Ed-INAI bridges innovation and education, creating a dynamic ecosystem for schools and colleges.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Left Column - Large Feature Image */}
                    <div className="rounded-[20px] overflow-hidden">
                        <img
                            src={featureImage}
                            alt="AI-powered interactive learning"
                            className="w-full h-full object-cover min-h-[400px]"
                            loading="lazy"
                        />
                    </div>

                    {/* Right Column - Two Feature Cards */}
                    <div className="flex flex-col gap-6">
                        {features.map(({ id, image, title }) => (
                            <div
                                key={id}
                                className="bg-white/5 rounded-[15px] overflow-hidden hover:bg-white/[0.07] transition-colors"
                            >
                                <div className="grid grid-cols-[140px_1fr] gap-4">
                                    {/* Card Image */}
                                    <div className="h-[140px] overflow-hidden">
                                        <img
                                            src={image}
                                            alt={title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Card Content */}
                                    <div className="py-4 pr-4 flex items-center">
                                        <h3 className="text-lg font-semibold text-white whitespace-pre-line">
                                            {title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section - AI-led Interactive Lectures */}
                <div className="max-w-[900px]">
                    <h3 className="text-[1.5rem] font-bold text-white mb-4">AI-led interactive lectures</h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                     ED-INAI brings together innovation and education to create a smart, connected learning ecosystem for schools and colleges.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ModernLearningSection
