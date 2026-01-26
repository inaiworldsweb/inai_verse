
import { cn } from '@/utils/cn'

interface SectionProps {
    children: React.ReactNode
    className?: string
    id?: string
    variant?: 'default' | 'dark' | 'gradient'
    spacing?: 'sm' | 'md' | 'lg' | 'xl'
}

/**
 * Semantic section wrapper with consistent spacing and background variants
 */
export function Section({
    children,
    className,
    id,
    variant = 'default',
    spacing = 'lg'
}: SectionProps) {
    const variantClasses = {
        default: 'bg-transparent',
        dark: 'bg-black/50',
        gradient: 'bg-gradient-to-b from-black via-primary-950/20 to-black'
    }

    const spacingClasses = {
        sm: 'py-12 md:py-16',
        md: 'py-16 md:py-24',
        lg: 'py-20 md:py-32',
        xl: 'py-24 md:py-40'
    }

    return (
        <section
            id={id}
            className={cn(
                'relative w-full',
                variantClasses[variant],
                spacingClasses[spacing],
                className
            )}
        >
            {children}
        </section>
    )
}
