import React, { useState } from 'react';

const EntityHistory = ({ entityId }) => {
  const [history, setHistory] = useState(null);

  const fetchEntityHistory = () => {
    const entityHistory = getEntityHistory(entityId);
    setHistory(entityHistory);
  };

  return (
    <div>
      <button onClick={fetchEntityHistory}>Get History</button>
      {history && (
        <div>
          <h2>Entity History for Entity ID: {entityId}</h2>
          <ul>
            {history.attributeChanges.map(change => (
              <li key={change.timestamp}>{`${change.timestamp}: Changed ${change.attribute} from ${change.oldValue} to ${change.newValue}`}</li>
            ))}
            {history.entityRelations.map(relation => (
              <li key={relation.timestamp}>{`${relation.timestamp}: ${relation.action} relation between ${relation.entity1} and ${relation.entity2}`}</li>
            ))}
            {history.entityStages.map(stage => (
              <li key={stage.timestamp}>{`${stage.timestamp}: Reached stage ${stage.stage}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EntityHistory;