export function getEntity(rEntityTypeName, entityID) {
  const data = [
    {
      'entity_id': 83,
      'rentity_type_name': 'candidate',
      'rentity_type_label': 'Кандидат',
      'entity_attr': [
        {
          'entity_attr_id': '772',
          'rattr_name': 'resume',
          'rattr_label': 'Дата поступления резюме',
          'rattr_view': null,
          'entity_attr_value': '2024-14-16'
        },
        {
          'entity_attr_id': '775',
          'rattr_name': 'last_name',
          'rattr_label': 'Фамилия',
          'rattr_view': null,
          'entity_attr_value': 'Иванов'
        }
      ]
    },
    {
      'entity_id': 85,
      'rentity_type_name': 'request',
      'rentity_type_label': 'Заявка на подбор кандидата',
      'entity_attr': [
        {
          'entity_attr_id': '172',
          'rattr_name': 'number',
          'rattr_label': 'Номер заявки',
          'rattr_view': null,
          'entity_attr_value': '222322'
        },
        {
          'entity_attr_id': '175',
          'rattr_name': 'date',
          'rattr_label': 'Дата утверждения заявки',
          'rattr_view': null,
          'entity_attr_value': '2024-14-16'
        }
      ]
    },  
  ];
  return data.find(elem => elem?.rentity_type_name == rEntityTypeName && elem?.entity_id == entityID);
};
