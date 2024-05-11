function getEntity(rEntityTypeName, entityID) {
  const data = [
    {
      'entity_id': 83,
      'rentity_type_name': 'candidate',
      'rentity_type_label': 'Кандидат',
      'entity_attr': [
        {
          'entity_attr_id': '772',
          'rattr_type': 'date',
          'rattr_name': 'resume',
          'rattr_label': 'Дата поступления резюме',
          'rattr_view': null,
          'entity_attr_value': '17.04.2024'
        },
        {
          'entity_attr_id': '773',
          'rattr_type': 'string',
          'rattr_name': 'last_name',
          'rattr_label': 'Фамилия',
          'rattr_view': null,
          'entity_attr_value': 'Иванов'
        },
        {
          'entity_attr_id': '783',
          'rattr_type': 'string',
          'rattr_name': 'first_name',
          'rattr_label': 'Имя',
          'rattr_view': null,
          'entity_attr_value': 'Василий'
        },
        {
          'entity_attr_id': '774',
          'rattr_type': 'bool',
          'rattr_name': 'resume',
          'rattr_label': 'Впервые',
          'rattr_view': null,
          'entity_attr_value': false
        },
        {
          'entity_attr_id': '775',
          'rattr_type': 'longstring',
          'rattr_name': 'last_name',
          'rattr_label': 'Комментарий',
          'rattr_view': null,
          'entity_attr_value': 'Здесь будет какой-то очень длинный текст, который едва ли влезет в одну строчку, но по какой-то неведомой причине его просто необходимо здесь написать, потому что очень хочется'
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
          'rattr_type': 'string',
          'rattr_name': 'number',
          'rattr_label': 'Номер заявки',
          'rattr_view': null,
          'entity_attr_value': '222322'
        },
        {
          'entity_attr_id': '173',
          'read_only': true,
          'rattr_type': 'date',
          'rattr_name': 'date',
          'rattr_label': 'Дата утверждения заявки',
          'rattr_view': null,
          'entity_attr_value': '16.04.2024'
        },
        {
          'entity_attr_id': '174',
          'rattr_type': 'bool',
          'rattr_name': 'resume',
          'rattr_label': 'новая',
          'rattr_view': null,
          'entity_attr_value': true
        },
        {
          'entity_attr_id': '175',
          'rattr_type': 'longstring',
          'rattr_name': 'last_name',
          'rattr_label': 'Комментарий',
          'rattr_view': null,
          'entity_attr_value': 'Здесь будет какой-то очень длинный текст, котрый едва ли влезет в одну строчку, но по какой-то неведомой причине его просто необходимо здесь написать, потому что очень хочется'
        }
      ]
    },  
  ];
  return data.find(elem => elem?.entity_id == entityID);
};

function dateToMUI(dateString) {
  if (dateString) {
    return dateString.split('.').reverse().join('-');
  };
};

export { dateToMUI, getEntity }
