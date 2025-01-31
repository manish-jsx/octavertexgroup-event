
import { useRef, useEffect } from "react"

export const useParallax = (speed = 10) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current
      if (element) {
        const scrollY = window.pageYOffset
        element.style.transform = `translateY(${scrollY / speed}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed])

  return ref
}

