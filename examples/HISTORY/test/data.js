function getDataFromBackend() {
    // Имитация запроса к backend
    // В данном случае создаем случайные данные для изменения значений атрибутов
    let entity_attr_log = [];
    
    for (let i = 0; i < 10; i++) {
        let change = {
            entity_id: i,
            attribute_name: `attribute_${i}`,
            old_value: `old_value_${i}`,
            new_value: `new_value_${i}`
        };
        
        entity_attr_log.push(change);
    }
    
    return JSON.stringify({ entity_attr_log });
}
const link = {
    id: 1,
    from: 1, // идентификатор первой сущности
    to: 2, // идентификатор второй сущности
    ts_created: new Date(), // время создания связи
    ts_deleted: null // время удаления связи, изначально равно null
  };


// Пример использования функции
let mok_data = getDataFromBackend();
console.log(mok_data);