
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface FeatureCardProps {
    icon: React.ReactNode
    title: string
    description: string
    className?: string
    delay?: number
}

/**
 * Feature card with container queries and scroll animations
 */
export function FeatureCard({
    icon,
    title,
    description,
    className,
    delay = 0
}: FeatureCardProps) {
    const [ref, isVisible] = useIntersectionObserver({
        threshold: 0.2,
        freezeOnceVisible: true
    })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay }}
            className={cn(
                'glass rounded-2xl p-6 md:p-8 transition-all duration-300',
                'hover:bg-white/15 hover:scale-105 hover:shadow-2xl',
                'group relative overflow-hidden container-query',
                className
            )}
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 
                      group-hover:from-primary-500/10 group-hover:to-secondary-500/10 
                      transition-all duration-500" />

            <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 
                      bg-gradient-to-br from-primary-500 to-secondary-500 
                      rounded-xl flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed @md:text-lg">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}
