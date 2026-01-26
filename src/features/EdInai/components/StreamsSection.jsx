const streamRows = [
    {
        id: 'streams-top',
        items: ['Secondary Education', 'Higher Secondary', 'Science', 'Commerce'],
    },
    {
        id: 'streams-middle',
        items: ['Arts & Humanities', 'Engineering', 'Medical Preparation'],
        offset: true,
    },
    {
        id: 'streams-bottom',
        items: ['Technology & Coding', 'Competitive Exams', 'Professional Upskilling', 'Language Learning'],
    },
]

const StreamsSection = () => {
    return (
        <section className="py-16 bg-black" id="streams">
            <div className="max-w-content mx-auto px-4">
                <h2 className="text-[2.5rem] font-bold text-center mb-12 text-white">Streams We Cover</h2>

                <div className="flex flex-col gap-6">
                    {streamRows.map(({ id, items, offset }) => (
                        <div key={id} className={`flex justify-center flex-wrap gap-4 ${offset ? 'md:pl-8' : ''}`}>
                            {items.map((label) => (
                                <span key={label} className="bg-white/5 border border-white/10 rounded-[50px] py-3 px-6 text-sm text-white/90 transition-all duration-200 hover:bg-white/10 hover:border-white/20">
                                    {label}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StreamsSection

