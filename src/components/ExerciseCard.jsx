import './ExerciseCard.css';

function ExerciseCard({ exercise, category, onClick }) {
  const duration = exercise.duration ? Math.floor(exercise.duration / 60) : null;
  const reps = exercise.repetitions || null;

  return (
    <button
      className="exercise-card"
      onClick={() => onClick(exercise)}
      type="button"
    >
      <div className="exercise-card-header">
        <span className="exercise-card-icon" style={{ backgroundColor: category?.color }}>
          {category?.icon || '💪'}
        </span>
        <h3 className="exercise-card-title">{exercise.name}</h3>
      </div>
      <div className="exercise-card-meta">
        {duration && <span className="meta-badge">⏱ {duration} min</span>}
        {reps && <span className="meta-badge">🔄 {reps} reps</span>}
      </div>
      <p className="exercise-card-benefits">{exercise.benefits}</p>
      <span className="exercise-card-cta">Ver instruções →</span>
    </button>
  );
}

export default ExerciseCard;
