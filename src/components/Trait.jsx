export default function Trait(props) {
  return (
    <div className="flex flex-col minGap">
      {props.icon}
      <div>
        <h3>{props.title}</h3>
        <p className="text-gray font-sm half-width">{props.description}</p>
      </div>
    </div>
  )
}