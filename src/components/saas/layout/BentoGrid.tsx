
import { cn } from '@/utils/cn'

interface BentoGridProps {
    children: React.ReactNode
    className?: string
}

interface BentoCardProps {
    children: React.ReactNode
    className?: string
    span?: 'default' | 'wide' | 'tall' | 'large'
}

/**
 * Modern bento-grid layout system
 * Creates asymmetric, visually interesting card arrangements
 */
export function BentoGrid({ children, className }: BentoGridProps) {
    return (
        <div
            className={cn(
                'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6',
                className
            )}
        >
            {children}
        </div>
    )
}

/**
 * Individual card within the bento grid
 */
export function BentoCard({ children, className, span = 'default' }: BentoCardProps) {
    const spanClasses = {
        default: '',
        wide: 'md:col-span-2',
        tall: 'md:row-span-2',
        large: 'md:col-span-2 md:row-span-2'
    }

    return (
        <div
            className={cn(
                'glass rounded-2xl p-6 md:p-8 transition-all duration-300',
                'hover:bg-white/15 hover:scale-[1.02]',
                'group relative overflow-hidden',
                spanClasses[span],
                className
            )}
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 
                      group-hover:from-primary-500/10 group-hover:to-secondary-500/10 
                      transition-all duration-500 pointer-events-none" />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}
