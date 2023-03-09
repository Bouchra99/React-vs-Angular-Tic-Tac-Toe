import "../styles/Box.css";

export default function Box(props) {
  return (
    <div className="box">
      <button
        disabled={props.value ? true : false}
        className="box-btn"
        onClick={() => props.onClick()}
      >
        {props.value}
      </button>
    </div>
  );
}
