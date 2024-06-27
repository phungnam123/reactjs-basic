import { useEffect, useRef, useState } from 'react'

const Dropdown = () => {
  const [showDropDown, setShowDropDown] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutDropDown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropDown(false)
      }
    }
    document.addEventListener('click', handleClickOutDropDown)

    return () => {
      document.removeEventListener('click', handleClickOutDropDown)
    }
  }, [])

  return (
    <div className="relative w-full max-w-[500px] m-5" ref={dropdownRef}>
      <div
        className="border-2 border-gray-200 bg-white w-full rounded-lg cursor-pointer py-3"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        Selected
      </div>
      {showDropDown && (
        <div className="border-2 bg-white rounded-lg absolute w-full top-full left-0">
          <div className="py-4 cursor-pointer">JAVASCRIPT</div>
          <div className="py-4 cursor-pointer">NODEJS</div>
          <div className="py-4 cursor-pointer">REACTJS</div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
