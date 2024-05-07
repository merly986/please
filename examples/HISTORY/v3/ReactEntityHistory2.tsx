import React, { useState, useEffect } from 'react';

// Мок-данные для имитации ответа сервера
const mockData = {
  entity_attr_log: [
    { id: 1, attribute: 'name', oldValue: 'Старое имя', newValue: 'Новое имя', timestamp: '2024-05-07T12:00:00Z' },
    // Другие записи изменений атрибутов...
  ],
  entity_entity: [
    { id: 1, entityId1: 101, entityId2: 201, ts_created: '2024-05-07T12:00:00Z', ts_deleted: null },
    // Другие записи создания и удаления связей...
  ],
  entity_stage: [
    { id: 1, entityId: 101, stage: 'Начальный этап', timestamp: '2024-05-07T12:00:00Z' },
    // Другие записи прохождения этапов...
  ]
};

// Функция для имитации запроса к серверу
const fetchEntityHistoryMock = (entityId) => {
  // Фильтрация данных по entityId, если необходимо
  return Promise.resolve(mockData);
};

// Компонент для отображения истории изменений сущности
const EntityHistory = ({ entityId }) => {
  const [history, setHistory] = useState(null);

  useEffect(() => {
    fetchEntityHistoryMock(entityId).then(data => {
      setHistory(data);
    });
  }, [entityId]);

  // Функция для фильтрации и поиска в истории
  const filterHistory = (searchTerm) => {
    // Реализация фильтрации и поиска...
  };

  return (
    <div>
      <h1>История изменений сущности</h1>
      {/* Компоненты для фильтрации и поиска */}
      {/* Отображение истории изменений */}
      {history && (
        <ul>
          {history.entity_attr_log.map(log => (
            <li key={log.id}>{`Атрибут ${log.attribute} изменен с "${log.oldValue}" на "${log.newValue}" в ${new Date(log.timestamp).toLocaleString()}`}</li>
          ))}
          {/* Отображение других частей истории */}
        </ul>
      )}
    </div>
  );
};

export default EntityHistory;