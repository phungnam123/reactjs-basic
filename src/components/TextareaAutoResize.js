import React, { useEffect, useRef, useState } from 'react'

const TextareaAutoResize = () => {
  const [text, setText] = useState('demo')
  const textAreaRef = useRef(null)
  const [textAreaHeight, setTextAreaHeight] = useState('auto')
  const [parentHeight, setParentHeight] = useState('auto')
  const handleChange = (e) => {
    setTextAreaHeight('auto')
    setText(e.target.value)
  }

  useEffect(() => {
    setParentHeight(`${textAreaRef?.current?.scrollHeight}px`)
    setTextAreaHeight(`${textAreaRef?.current?.scrollHeight}px`)
  }, [text])

  return (
    <div className="p-5" style={{ height: parentHeight }}>
      <textarea
        className="transition-all overflow-hidden w-full max-w-[400px] p-5 resize-none border-2 outline-none hover:border-blue-500"
        placeholder="Please enter a content"
        value={text}
        ref={textAreaRef}
        onChange={handleChange}
        style={{ height: textAreaHeight }}
      ></textarea>
    </div>
  )
}

export default TextareaAutoResize
