import './Button.scss'
const Button = (props) => {
  console.log(props)
  return <button className="btn-primary">{props.children}</button>
}

export default Button
