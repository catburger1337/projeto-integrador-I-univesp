import React, { useState } from 'react';

function AgendaApp() {
  // Defina os valores possíveis para turmas e dias da semana
  const turmas = ['1A', '2B', '3C'];
  const diasSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];

  // Defina os estados para turma selecionada e dia da semana selecionado
  const [selectedTurma, setSelectedTurma] = useState('');
  const [selectedDiaSemana, setSelectedDiaSemana] = useState('');

  // Funções para atualizar a turma selecionada e o dia da semana selecionado
  const handleTurmaChange = (turma) => {
    setSelectedTurma(turma);
  };

  const handleDiaSemanaChange = (diaSemana) => {
    setSelectedDiaSemana(diaSemana);
  };

  return (
    <div className="agenda-app">
      <header>
        {/* Cabeçalho */}
        <h1>Agenda App</h1>
      </header>
      <main>
        {/* Área de seleção de turma */}
        <div className="turma-selection">
          <h2>Selecione a Turma:</h2>
          <select value={selectedTurma} onChange={(e) => handleTurmaChange(e.target.value)}>
            <option value="">Selecione</option>
            {turmas.map((turma, index) => (
              <option key={index} value={turma}>{turma}</option>
            ))}
          </select>
        </div>
        {/* Área de seleção de dia da semana */}
        <div className="dia-selection">
          <h2>Selecione o Dia da Semana:</h2>
          <select value={selectedDiaSemana} onChange={(e) => handleDiaSemanaChange(e.target.value)}>
            <option value="">Selecione</option>
            {diasSemana.map((dia, index) => (
              <option key={index} value={dia}>{dia}</option>
            ))}
          </select>
        </div>
        {/* Área de exibição de resultados */}
        <div className="results">
          {/* Componente de exibição de resultados */}
          <h2>Resultados:</h2>
          <p>Turma selecionada: {selectedTurma}</p>
          <p>Dia da semana selecionado: {selectedDiaSemana}</p>
        </div>
      </main>
      <footer>
        {/* Rodapé */}
        <p>© 2024 Agenda App. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default AgendaApp;
