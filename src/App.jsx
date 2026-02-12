import { useState } from 'react';
import { exerciseCategories, exercises, dailyRoutines } from './data/exercises';
import ExerciseCard from './components/ExerciseCard';
import ExerciseDetail from './components/ExerciseDetail';
import RoutineCard from './components/RoutineCard';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [selectedRoutine, setSelectedRoutine] = useState(null);

  const getExerciseById = (id) => {
    for (const cat of Object.keys(exercises)) {
      const found = exercises[cat].find((e) => e.id === id);
      if (found) return found;
    }
    return null;
  };

  const getCategoryByExercise = (exerciseId) => {
    for (const cat of Object.keys(exercises)) {
      const found = exercises[cat].find((e) => e.id === exerciseId);
      if (found) return exerciseCategories.find((c) => c.id === cat);
    }
    return null;
  };

  const category = selectedCategory
    ? exerciseCategories.find((c) => c.id === selectedCategory)
    : null;

  const exerciseList = selectedCategory ? exercises[selectedCategory] || [] : [];

  const handleStartRoutine = (routine) => {
    setSelectedRoutine(routine);
    setPage('routine');
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-content">
          <div>
            <h1>💪 Saúde Masculina</h1>
            <p>Exercícios para vitalidade e bem-estar</p>
          </div>
          <img src="/images/logo.png" alt="Logo" className="app-header-logo" />
        </div>
      </header>

      {page === 'home' && (
        <main className="page-content">
          <h2 className="page-title">Escolha uma categoria</h2>
          <p className="page-subtitle">
            Exercícios baseados em evidências científicas para melhora da função sexual
          </p>

          <div className="info-card">
            <p>
              <strong>Estudos comprovam:</strong> Exercícios do assoalho pélvico (Kegel)
              ajudaram até 75% dos homens a recuperar função normal. Consistência é a chave!
            </p>
          </div>

          <div className="category-grid">
            {exerciseCategories.map((cat) => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                type="button"
              >
                <span>{cat.icon}</span>
                <strong>{cat.name}</strong>
              </button>
            ))}
          </div>

          {selectedCategory && (
            <div className="category-section">
              <p className="page-subtitle">{category?.description}</p>
              <div className="exercises-list">
                {exerciseList.map((ex) => (
                  <ExerciseCard
                    key={ex.id}
                    exercise={ex}
                    category={category}
                    onClick={(e) => {
                      setSelectedExercise(e);
                      setPage('exercise');
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </main>
      )}

      {page === 'exercises' && (
        <main className="page-content">
          <h2 className="page-title">Todos os exercícios</h2>
          <p className="page-subtitle">
            Explore a coleção completa e escolha o que fazer hoje
          </p>
          <div className="category-grid">
            {exerciseCategories.map((cat) => (
              <button
                key={cat.id}
                className="category-btn"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setPage('home');
                }}
                type="button"
              >
                <span>{cat.icon}</span>
                <strong>{cat.name}</strong>
              </button>
            ))}
          </div>
          {exerciseCategories.map((cat) => (
            <div key={cat.id} style={{ marginTop: '2rem' }}>
              <h3 style={{ color: cat.color, marginBottom: '0.75rem' }}>{cat.icon} {cat.name}</h3>
              <div className="exercises-list">
                {(exercises[cat.id] || []).map((ex) => (
                  <ExerciseCard
                    key={ex.id}
                    exercise={ex}
                    category={cat}
                    onClick={(e) => {
                      setSelectedExercise(e);
                      setPage('exercise');
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </main>
      )}

      {page === 'routines' && (
        <main className="page-content">
          <h2 className="page-title">Rotinas diárias</h2>
          <p className="page-subtitle">
            Programas prontos para você seguir e ver resultados
          </p>
          <div className="routines-grid">
            {dailyRoutines.map((routine) => (
              <RoutineCard
                key={routine.id}
                routine={routine}
                onStart={handleStartRoutine}
              />
            ))}
          </div>
        </main>
      )}

      {page === 'routine' && selectedRoutine && (
        <main className="page-content">
          <button
            className="back-btn"
            onClick={() => setPage('routines')}
            type="button"
          >
            ← Voltar
          </button>
          <h2 className="page-title">{selectedRoutine.name}</h2>
          <p className="page-subtitle">{selectedRoutine.description}</p>
          <div className="exercises-list">
            {selectedRoutine.exercises.map((exId) => {
              const ex = getExerciseById(exId);
              const exCat = getCategoryByExercise(exId);
              if (!ex) return null;
              return (
                <ExerciseCard
                  key={ex.id}
                  exercise={ex}
                  category={exCat}
                  onClick={(e) => {
                    setSelectedExercise(e);
                    setPage('exercise');
                  }}
                />
              );
            })}
          </div>
        </main>
      )}

      {page === 'exercise' && selectedExercise && (
        <ExerciseDetail
          exercise={selectedExercise}
          category={getCategoryByExercise(selectedExercise.id)}
          onBack={() => setPage(selectedRoutine ? 'routine' : selectedCategory ? 'home' : 'exercises')}
        />
      )}

      <nav className="bottom-nav">
        <button
          className={`nav-btn ${page === 'home' ? 'active' : ''}`}
          onClick={() => setPage('home')}
          type="button"
        >
          <span>🏠</span>
          <span>Início</span>
        </button>
        <button
          className={`nav-btn ${page === 'exercises' ? 'active' : ''}`}
          onClick={() => setPage('exercises')}
          type="button"
        >
          <span>📋</span>
          <span>Exercícios</span>
        </button>
        <button
          className={`nav-btn ${page === 'routines' || page === 'routine' ? 'active' : ''}`}
          onClick={() => setPage('routines')}
          type="button"
        >
          <span>📅</span>
          <span>Rotinas</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
