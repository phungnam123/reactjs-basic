import { useState } from 'react'
import './ToggleStyle.css'

const Toggle = () => {
  const [on, setOn] = useState(false)

  const handleToggle = () => {
    setOn(!on)
  }

  return (
    <div>
      <div className={`toggle ${on ? 'active' : ''}`} onClick={handleToggle}>
        <div className={`spinner ${on ? 'active' : ''}`}></div>
      </div>
      {/* <div className="toggle-control">
        <span className="toggle-on" onClick={() => setOn(true)}>
          On
        </span>
        <span className="toggle-off" onClick={() => setOn(false)}>
          Off
        </span>
      </div> */}
    </div>
  )
}

export default Toggle
