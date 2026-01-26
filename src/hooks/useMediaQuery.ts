import { useState, useEffect } from 'react'

/**
 * Custom hook for responsive media queries
 * @param query - CSS media query string
 * @returns boolean indicating if the query matches
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        // Check if window is defined (SSR safety)
        if (typeof window === 'undefined') {
            return
        }

        const media = window.matchMedia(query)

        // Set initial value
        setMatches(media.matches)

        // Create event listener
        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches)
        }

        // Modern browsers
        if (media.addEventListener) {
            media.addEventListener('change', listener)
            return () => media.removeEventListener('change', listener)
        } else {
            // Legacy browsers
            media.addListener(listener)
            return () => media.removeListener(listener)
        }
    }, [query])

    return matches
}

/**
 * Predefined breakpoint hooks
 */
export const useIsMobile = () => useMediaQuery('(max-width: 767px)')
export const useIsTablet = () => useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)')
