import { useEffect, useMemo, useState } from "react"

const onScreen = (ref) => {
  cont [isIntersecting, setIsIntersecting] = useState(false)
  const observer = useMemo(() => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting)), ref)
  useEffect(() => {
    ref.current && observer.observe(ref.current)
    return observer.disconnect()
  }, [])
  return isIntersecting;
}

export default onScreen;