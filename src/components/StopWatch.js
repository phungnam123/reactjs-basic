import React, { useEffect, useRef, useState } from 'react'

const StopWatch = () => {
  const [count, setCount] = useState(0)
  const timerRef = useRef(null)
  const hanldeStart = () => {
    if (timerRef.current) return
    timerRef.current = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(timerRef.current)
    timerRef.current = null
  }

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current)
    }
  }, [])

  return (
    <div>
      <h3>Count: {count}s</h3>
      <div className="mt-2">
        <button onClick={hanldeStart}>Start</button>
        <button onClick={handleStop} className="ml-2">
          Stop
        </button>
      </div>
    </div>
  )
}

export default StopWatch
