import React, { useEffect, useRef } from 'react'

const Input = () => {
  const divRef = useRef()
  const inputRef = useRef()
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])
  return (
    <div className="input-div m-2" ref={divRef}>
      <input
        type="text"
        ref={inputRef}
        className="inline-block p-3 border-2 border-gray-200 focus:border-blue-500 outline-none"
        placeholder="Auto focus input"
      />
    </div>
  )
}

export default Input
