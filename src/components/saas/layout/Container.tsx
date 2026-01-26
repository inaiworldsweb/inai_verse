
import { cn } from '@/utils/cn'

interface ContainerProps {
    children: React.ReactNode
    className?: string
    as?: 'div' | 'section' | 'article' | 'main'
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

/**
 * Responsive container component with max-width constraints
 * Supports container queries for component-level responsiveness
 */
export function Container({
    children,
    className,
    as: Component = 'div',
    size = 'xl'
}: ContainerProps) {
    const sizeClasses = {
        sm: 'max-w-3xl',
        md: 'max-w-5xl',
        lg: 'max-w-7xl',
        xl: 'max-w-[1400px]',
        full: 'max-w-full'
    }

    return (
        <Component
            className={cn(
                'container-query mx-auto px-4 sm:px-6 lg:px-8',
                sizeClasses[size],
                className
            )}
        >
            {children}
        </Component>
    )
}
