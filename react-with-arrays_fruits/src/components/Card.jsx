import "./Card.css";

export default function Card({ id, name, color }) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      {name}
    </div>
  );
}
