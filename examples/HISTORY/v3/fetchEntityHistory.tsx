// Функция для получения истории изменений сущности с сервера
async function fetchEntityHistory(entityId) {
    try {
      const response = await fetch(`http://92.53.119.132/api/entity/${entityId}/history`);
      if (!response.ok) {
        throw new Error('Проблема с запросом: ' + response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка при получении истории изменений:', error);
    }
  }
