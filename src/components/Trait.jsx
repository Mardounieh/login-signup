export default function Trait(props) {
  return (
    <div>
      {props.icon}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}