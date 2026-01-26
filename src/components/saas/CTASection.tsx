
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface CTASectionProps {
    className?: string
}

/**
 * Call-to-action section with gradient backgrounds and animations
 */
export function CTASection({ className }: CTASectionProps) {
    const [ref, isVisible] = useIntersectionObserver({
        threshold: 0.3,
        freezeOnceVisible: true
    })

    return (
        <section
            ref={ref}
            className={cn('relative py-20 md:py-32 overflow-hidden', className)}
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 opacity-10" />

            {/* Animated orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="glass rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                    >
                        Ready to <span className="gradient-text">Transform</span> Your Workflow?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
                    >
                        Join thousands of teams already building faster and smarter.
                        Start your free trial today—no credit card required.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                            Start Free Trial
                        </button>
                        <button className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
                            Schedule Demo
                        </button>
                    </motion.div>

                    {/* Trust badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
                    >
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>14-day free trial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Cancel anytime</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
