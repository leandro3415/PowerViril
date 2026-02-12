// Exercícios baseados em evidências científicas para disfunção erétil
// Fontes: BJU International, Harvard Health, estudos de fisioterapia pélvica

export const exerciseCategories = [
  { id: 'kegel', name: 'Assoalho Pélvico', icon: '💪', color: '#2c5282', description: 'Os mais eficazes - até 75% de melhora em estudos' },
  { id: 'yoga', name: 'Yoga', icon: '🧘', color: '#2d6a4f', description: 'Melhora fluxo sanguíneo e relaxamento' },
  { id: 'cardio', name: 'Cardiovascular', icon: '❤️', color: '#b91c1c', description: 'Saúde do coração = saúde vascular' },
  { id: 'respirar', name: 'Respiração', icon: '🌬️', color: '#7c3aed', description: 'Reduz ansiedade e melhora oxigenação' },
];

export const exercises = {
  kegel: [
    {
      id: 'kegel-basico',
      name: 'Kegel Básico',
      image: '/images/kegel-basico.png',
      video: '/videos/kegel-basico.mp4',
      duration: 300,
      repetitions: 10,
      instructions: [
        'Localize os músculos do assoalho pélvico (imagine parar o fluxo urinário)',
        'Contraia e segure por 5 segundos',
        'Relaxe por 5 segundos',
        'Repita 10 vezes',
        'Faça 3 séries ao dia para melhores resultados',
      ],
      benefits: 'Fortalece o músculo bulbocavernoso - crucial para ereção',
    },
    {
      id: 'kegel-rápido',
      name: 'Kegel Rápido',
      image: '/images/kegel-basico.png',
      video: '/videos/kegel-rapido.mp4',
      duration: 120,
      repetitions: 20,
      instructions: [
        'Contraia e solte rapidamente os músculos pélvicos',
        'Faça 20 contrações rápidas',
        'Sem pausa entre as contrações',
        'Descansar 30 segundos e repetir',
      ],
      benefits: 'Melhora a resposta rápida dos músculos',
    },
    {
      id: 'kegel-progressivo',
      name: 'Kegel Progressivo (Escada)',
      image: '/images/kegel-basico.png',
      video: '/videos/kegel-progressivo.mp4',
      duration: 240,
      repetitions: 5,
      instructions: [
        'Contraia 2 segundos, relaxe 2 segundos',
        'Contraia 4 segundos, relaxe 4 segundos',
        'Contraia 6 segundos, relaxe 6 segundos',
        'Contraia 8 segundos, relaxe 8 segundos',
        'Contraia 10 segundos, relaxe 10 segundos',
      ],
      benefits: 'Aumenta resistência e controle muscular',
    },
    {
      id: 'ponte-pélvica',
      name: 'Ponte Pélvica',
      image: '/images/ponte-pelvica.png',
      video: '/videos/ponte-pelvica.mp4',
      duration: 180,
      repetitions: 10,
      instructions: [
        'Deitado de costas, joelhos flexionados',
        'Levante o quadril contraindo os glúteos e assoalho pélvico',
        'Segure 5 segundos no topo',
        'Desça lentamente',
        'Repita 10 vezes',
      ],
      benefits: 'Fortalece toda a região pélvica',
    },
  ],
  yoga: [
    {
      id: 'vajrasana',
      name: 'Vajrasana (Postura do Diamante)',
      image: '/images/vajrasana.png',
      duration: 300,
      instructions: [
        'Ajoelhe-se com as nádegas nos calcanhares',
        'Mãos nos joelhos, coluna reta',
        'Respire profundamente por 5 minutos',
        'Melhora circulação na região pélvica',
      ],
      benefits: 'Aumenta fluxo sanguíneo na pelve',
    },
    {
      id: 'paschimottanasana',
      name: 'Paschimottanasana (Dobrar para Frente)',
      image: '/images/paschimottanasana.png',
      duration: 180,
      instructions: [
        'Sente com pernas estendidas',
        'Incline o tronco para frente em direção às pernas',
        'Segure os pés ou tornozelos',
        'Mantenha 30-60 segundos',
      ],
      benefits: 'Alonga região lombar e melhora flexibilidade',
    },
    {
      id: 'ardha-matsyendrasana',
      name: 'Ardha Matsyendrasana (Torção)',
      image: '/images/ardha-matsyendrasana.png',
      duration: 120,
      instructions: [
        'Sente com uma perna cruzada',
        'Gire o tronco na direção oposta',
        'Use o braço para apoio',
        'Mantenha 30 segundos cada lado',
      ],
      benefits: 'Massageia órgãos internos e melhora digestão',
    },
    {
      id: 'sarvangasana',
      name: 'Sarvangasana (Postura da Vela)',
      image: '/images/sarvangasana.png',
      duration: 120,
      instructions: [
        'Deitado, levante pernas e quadril',
        'Apoie as costas com as mãos',
        'Corpo perpendicular ao chão',
        'Mantenha 30-60 segundos (consulte médico se tiver pressão alta)',
      ],
      benefits: 'Fluxo sanguíneo invertido revitaliza a pelve',
    },
    {
      id: 'garudasana',
      name: 'Garudasana (Postura da Águia)',
      image: '/images/garudasana.png',
      duration: 90,
      instructions: [
        'Fique em pé, cruze uma perna sobre a outra',
        'Cruze os braços na frente',
        'Equilibre-se por 30 segundos',
        'Troque os lados',
      ],
      benefits: 'Melhora equilíbrio e concentração',
    },
  ],
  cardio: [
    {
      id: 'caminhada',
      name: 'Caminhada Rápida',
      duration: 1800,
      instructions: [
        'Caminhe em ritmo moderado (30 min)',
        'Mantenha frequência cardíaca elevada',
        'Pelo menos 5x por semana',
        'Consistência é mais importante que intensidade',
      ],
      benefits: 'Melhora saúde cardiovascular - causa #1 de DE',
    },
    {
      id: 'ciclismo',
      name: 'Ciclismo ou Elíptico',
      duration: 1200,
      instructions: [
        '20 minutos de cardio moderado',
        'Evite selim muito duro (pode comprimir nervos)',
        'Ajuste a altura corretamente',
      ],
      benefits: 'Fortalecimento de pernas e fluxo sanguíneo',
    },
    {
      id: 'corrida-leve',
      name: 'Corrida Leve',
      duration: 900,
      instructions: [
        '15 minutos em ritmo confortável',
        'Alternar com caminhada se necessário',
        'Foque na regularidade',
      ],
      benefits: 'Ótimo para circulação e metabolismo',
    },
  ],
  respirar: [
    {
      id: 'respirar-4-7-8',
      name: 'Respiração 4-7-8',
      duration: 300,
      instructions: [
        'Inspire pelo nariz contando 4',
        'Segure a respiração contando 7',
        'Expire pela boca contando 8',
        'Repita 4-5 ciclos',
      ],
      benefits: 'Reduz ansiedade de desempenho rapidamente',
    },
    {
      id: 'respirar-diafragma',
      name: 'Respiração Diafragmática',
      image: '/images/respirar-diafragma.png',
      duration: 420,
      instructions: [
        'Uma mão no peito, outra na barriga',
        'Inspire expandindo a barriga (7 min)',
        'Expire contraindo a barriga',
        'Respire lentamente e profundamente',
      ],
      benefits: 'Oxigenação máxima e relaxamento',
    },
    {
      id: 'pranayama',
      name: 'Pranayama Alternado',
      image: '/images/respirar-pranayama.png',
      duration: 300,
      instructions: [
        'Feche a narina direita, inspire pela esquerda',
        'Feche a esquerda, expire pela direita',
        'Inspire pela direita, expire pela esquerda',
        'Continue alternando por 5 minutos',
      ],
      benefits: 'Equilibra o sistema nervoso',
    },
  ],
};

export const dailyRoutines = [
  {
    id: 'iniciante',
    name: 'Rotina Iniciante',
    description: 'Perfeita para começar - 10 minutos por dia',
    exercises: ['kegel-basico', 'respirar-4-7-8'],
  },
  {
    id: 'intermediario',
    name: 'Rotina Intermediária',
    description: 'Para quem já pratica há 2+ semanas',
    exercises: ['kegel-basico', 'kegel-rápido', 'vajrasana', 'respirar-diafragma'],
  },
  {
    id: 'avancado',
    name: 'Rotina Avançada',
    description: 'Rotina completa para resultados máximos',
    exercises: ['kegel-basico', 'kegel-rápido', 'ponte-pélvica', 'vajrasana', 'paschimottanasana', 'respirar-4-7-8'],
  },
];
