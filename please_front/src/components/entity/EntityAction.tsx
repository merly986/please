import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Save, Delete, List } from '@mui/icons-material/';
import ConfirmDialog from '@/modal/Confirm'
import { useState } from 'react';
import { createPortal } from 'react-dom';


export default function EntityAction({entityID, rentityTypeName}) {

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showSpeedDeal, setShowSpeedDeal] = useState(false);

  function handleDeleteButton() {
    setShowSpeedDeal(false);
    setShowConfirmDelete(true);
  };

  const actions = [
    { icon: <Delete />, name: 'Удалить', key: 'delete', mb: 0, action: handleDeleteButton },
    { icon: <Save />, name: 'Сохранить', key: 'save', mb: 0, action: saveEntity },
    { icon: <List />, name: 'К списку', key: 'list', mb: 2, action: goToEntityList },
  ];

  function deleteEntity() {
    // let entityForm = new FormData(document.getElementById('formEntityDetail'));
    // console.log(entityID);
  };
  

  function saveEntity() {
    console.log(entityID);
  };

  function goToEntityList() {
    console.log(rentityTypeName);
  };

  function handleCloseConfirmDelete() {
    // setShowSpeedDeal(false);
    setShowConfirmDelete(false);
  };

  return (
    <>
      <SpeedDial
        onFocusCapture={e=>e.stopPropagation()}
        onClose={()=>{setShowSpeedDeal(false)}}
        onOpen={()=>{setShowSpeedDeal(true)}}
        open={showSpeedDeal}
        ariaLabel='Entities'
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            onClick={action.action}
            sx={{ mb: action.mb }}
            key={action.key}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
      {
        showConfirmDelete && createPortal(
          <ConfirmDialog
            open={showConfirmDelete}
            textTitle='ВНИМАНИЕ'
            textContent='Удалить карточку?'
            textCloseBtn='Отмена'
            textOKBtn='Удалить'
            handleClose={()=>setShowConfirmDelete(false)}
            handleOK={()=>setShowConfirmDelete(false)} />, document.body
        )
      }
    </>
  );
};