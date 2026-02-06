import cloudImage from '../../../assets/Integration Options/100% Cloud-Based Platform.png'
import multiDeviceImage from '../../../assets/Integration Options/Accessible via smart TV, web app, or projector.png'
import systemIntegrationImage from '../../../assets/Integration Options/Seamlessly integrates with existing systems.png'

const integrationOptions = [
    {
        id: 'cloud-platform',
        title: '100% Cloud-Based Platform',
        image: cloudImage
    },
    {
        id: 'multi-device',
        title: 'Accessible via smart TV, web app, or projector',
        image: multiDeviceImage
    },
    {
        id: 'system-integration',
        title: 'Seamlessly integrates with existing systems',
        image: systemIntegrationImage
    },
]

const IntegrationOptionsSection = () => {
    return (
        <section className="py-16 bg-black" id="integration-options">
            <div className="max-w-content mx-auto px-4">
                <h3 className="text-[2rem] font-bold text-center mb-12 text-white">Integration Options</h3>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
                    {integrationOptions.map(({ id, title, image }) => (
                        <div key={id} className="bg-white/[0.03] rounded-[15px] p-6 text-center transition-transform duration-200 hover:-translate-y-1.5">
                            <figure className="rounded-[10px] overflow-hidden mb-4">
                                <img src={image} alt={title} className="w-full h-[200px] object-cover" loading="lazy" />
                            </figure>
                            <p className="text-base text-white/90 font-medium">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default IntegrationOptionsSection

