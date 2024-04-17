import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Save, Delete } from '@mui/icons-material/';

const actions = [
  { icon: <Delete />, name: 'Удалить', key: 'delete' },
  { icon: <Save />, name: 'Сохранить', key: 'save' },
];

export default function EntityAction() {
  return (
      <SpeedDial
        ariaLabel="Entities"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.key}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
  );
}
