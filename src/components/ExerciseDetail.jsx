import { useState, useEffect } from 'react';
import './ExerciseDetail.css';

function ExerciseDetail({ exercise, category, onBack }) {
  const [timeLeft, setTimeLeft] = useState(exercise.duration || 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setTimeLeft(exercise.duration || 60);
    setIsRunning(false);
  };

  return (
    <div className="exercise-detail">
      <button className="back-btn" onClick={onBack} type="button">
        ← Voltar
      </button>

      <div className="detail-header">
        <span className="detail-icon" style={{ backgroundColor: category?.color }}>
          {category?.icon || '💪'}
        </span>
        <h1 className="detail-title">{exercise.name}</h1>
      </div>

      {exercise.duration && (
        <div className="timer-section">
          <div className="timer-display">{formatTime(timeLeft)}</div>
          <div className="timer-controls">
            <button
              className="timer-btn primary"
              onClick={() => setIsRunning(!isRunning)}
              type="button"
            >
              {isRunning ? '⏸ Pausar' : '▶ Iniciar'}
            </button>
            <button className="timer-btn" onClick={resetTimer} type="button">
              🔄 Reiniciar
            </button>
          </div>
        </div>
      )}

      <div className="benefits-box">
        <strong>Benefícios:</strong> {exercise.benefits}
      </div>

      {exercise.video && (
        <div className="exercise-video">
          <p className="exercise-video-label">Assista o vídeo demonstrativo</p>
          <video controls poster={exercise.image} preload="metadata" playsInline>
            <source src={exercise.video} type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      )}

      {exercise.image && !exercise.video && (
        <div className="exercise-image">
          <img src={exercise.image} alt={`Ilustração: ${exercise.name}`} />
        </div>
      )}

      <div className="instructions-section">
        <h2>Instruções</h2>
        <ol className="instructions-list">
          {exercise.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ExerciseDetail;
