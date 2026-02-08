import React from 'react';

const MiraaiFeatures = () => {
    const features = [
        {
            number: '01',
            title: 'AI Vision',
            description: 'Advanced visual intelligence for the next generation of digital products.'
        },
        {
            number: '02',
            title: 'Creative Engine',
            description: 'Pushing the boundaries of what\'s possible with generative AI and design.'
        },
        {
            number: '03',
            title: 'Ecosystem',
            description: 'A seamless integration between human creativity and artificial intelligence.'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
                <div key={feature.number} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white text-white group-hover:text-black transition-colors">
                        <span className="text-xl font-bold">{feature.number}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-zinc-400">{feature.description}</p>
                </div>
            ))}
        </div>
    );
};

export default MiraaiFeatures;
