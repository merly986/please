import { useState } from 'react'
import {Stack, Button, Typography} from '@mui/material'
import {Home, People, List, Settings, Book} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'


const Navigation: React.FC = () => {

	const [buttonActive, setButtonActive] = useState<number>();
	const navigate = useNavigate();
    const btnNavigateClick =(buttonID:number) =>{
		setButtonActive(buttonID);
		if(buttonID === 1){
			navigate('/');
		}
		if(buttonID === 2){
			navigate('/candidate')
		}
		if(buttonID === 3){
			navigate('/request');
		}
		if(buttonID === 4){
			navigate('/book');
		}
		if(buttonID === 5){
			navigate('/settings');
		}
    }
    return (
    <Stack  spacing={2} padding={2}  bgcolor="ButtonHighlight" textAlign="center" borderRadius={2}>
        <Typography variant='h3' color="primary">Меню</Typography>
        <Button onClick={() => btnNavigateClick(1)} startIcon={<Home/>} variant={buttonActive === 1 ? "contained" : "text"}>Старт</Button>
        <Button onClick={() => btnNavigateClick(2)} startIcon={<People/>} variant={buttonActive === 2 ? "contained" : "text"}>Кандидаты</Button>
        <Button onClick={() => btnNavigateClick(3)} startIcon={<List/>} variant={buttonActive === 3 ? "contained" : "text"}>Заявки</Button>
        <Button onClick={() => btnNavigateClick(4)} startIcon={<Book/>} variant={buttonActive === 4 ? "contained" : "text"}>Справочники</Button>
        <Button onClick={() => btnNavigateClick(5)} startIcon={<Settings/>} variant={buttonActive === 5 ? "contained" : "text"}>Настройки</Button>
    </Stack>
  )
};

export default Navigation;