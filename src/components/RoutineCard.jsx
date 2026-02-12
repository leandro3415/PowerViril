import './RoutineCard.css';

function RoutineCard({ routine, onStart }) {
  return (
    <div className="routine-card">
      <h3 className="routine-title">{routine.name}</h3>
      <p className="routine-desc">{routine.description}</p>
      <div className="routine-exercises">
        <span className="routine-count">{routine.exercises.length} exercícios</span>
      </div>
      <button className="routine-btn" onClick={() => onStart(routine)} type="button">
        Iniciar rotina
      </button>
    </div>
  );
}

export default RoutineCard;
