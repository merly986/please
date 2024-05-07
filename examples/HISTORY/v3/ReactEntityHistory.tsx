import React, { useState, useEffect } from 'react';

// Компонент для отображения истории изменений сущности
const EntityHistory = ({ entityId }) => {
  const [history, setHistory] = useState({ changes: [], relations: [], stages: [] });
  const [filter, setFilter] = useState('');

  // Функция для получения истории изменений
  useEffect(() => {
    fetchEntityHistory(entityId).then(data => setHistory(data));
  }, [entityId]);

  // Функция для фильтрации истории
  const filteredHistory = {
    changes: history.changes.filter(change => change.attrName.includes(filter)),
    relations: history.relations.filter(relation => relation.tsCreated.includes(filter) || (relation.tsDeleted && relation.tsDeleted.includes(filter))),
    stages: history.stages.filter(stage => stage.timestamp.includes(filter))
  };

  return (
    <div>
      <input type="text" placeholder="Фильтр..." value={filter} onChange={e => setFilter(e.target.value)} />
      <h3>Изменения атрибутов:</h3>
      <ul>
        {filteredHistory.changes.map((change, index) => (
          <li key={index}>{`${change.attrName}: ${change.oldValue} -> ${change.newValue} (${change.timestamp})`}</li>
        ))}
      </ul>
      <h3>Связи между сущностями:</h3>
      <ul>
        {filteredHistory.relations.map((relation, index) => (
          <li key={index}>{`ID1: ${relation.entityId1}, ID2: ${relation.entityId2}, Создано: ${relation.tsCreated}, Удалено: ${relation.tsDeleted}`}</li>
        ))}
      </ul>
      <h3>Этапы:</h3>
      <ul>
        {filteredHistory.stages.map((stage, index) => (
          <li key={index}>{`Этап ID: ${stage.stageId}, Пройдено: ${stage.passed}, Время: ${stage.timestamp}`}</li>
        ))}
      </ul>
    </div>
  );
};

// Функция для имитации запроса к серверу и получения мок-данных
function fetchEntityHistory(entityId) {
  // Здесь должна быть ваша реализация получения данных истории изменений
  // ...
}

export default EntityHistory;
