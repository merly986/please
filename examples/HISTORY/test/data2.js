// Пример функции, имитирующей обращение к backend
const fetchEntityHistory = async (entityId) => {
    // Сделаем имитацию задержки запроса для реалистичного сценария работы
   await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Моковые данные для истории изменений
    const mockHistoryData = {
      entity_id: entityId,
      history: [
        {
          event_type: "attribute_changed",
          attribute_name: "Статус",
          old_value: "В процессе",
          new_value: "Завершен",
          timestamp: "2023-10-15T10:30:00Z"
        },
        {
          event_type: "link_created",
          source_entity_id: "154",
          target_entity_id: "231",
          relationship_type: "related_to",
          timestamp: "2023-10-14T15:45:00Z"
        },
        {
          event_type: "stage_completed",
          stage_name: "Валидация данных",
          user: "Иванов",
          timestamp: "2023-10-13T09:20:00Z"
        }
      ]
    };
  
    return mockHistoryData;
  };
  
  // Пример использования функции для получения истории изменений для сущности с ID 154
  const entityId = "154";
  fetchEntityHistory(entityId)
    .then(historyData => {
      console.log(historyData);
      // Здесь вы можете обрабатывать данные и использовать их в вашем React-приложении
    })
    .catch(error => {
      console.error(error);
    });