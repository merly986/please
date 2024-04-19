import {Chip,Rating,TableContainer,TextField, Box,Typography, ButtonGroup, Button, Stack, Card, Avatar, CardContent, CardActions, List, ListItem,ListItemAvatar, ListItemText, MenuItem, TableHead, TableRow, TableCell, TableBody, Table } from '@mui/material';
import React, {useState, useEffect} from 'react'
import { Sync, Mode, Image } from '@mui/icons-material';
import Spiner from '../components/Spiner';

interface Props {
	entity_type: string;
}

function CreateCandidate(
	id : number,
	name : string,
	last_name : string,
	middle_name : string,
	birthday : string,
	detail : string,
 ){
	return {id, name, last_name, middle_name, birthday, detail}
 };

const row_candidate = [
	CreateCandidate(1,'Илья','123','Геннадьевич','01.01.1993','Я криветко'),
	CreateCandidate(2,'Илья','Захаров','Геннадьевич','01.01.1993','Я криветко'),
	CreateCandidate(3,'213','Захаров','Геннадьевич','01.01.1993','Я криветко'),
	CreateCandidate(4,'Илья','123','Геннадьевич','01.01.1993','Я криветко'),
	CreateCandidate(5,'Илья','Захаров','Геннадьевич','01.01.1993','Я криветко'),
	CreateCandidate(6,'Илья','213','Геннадьевич','01.01.1993','Я криветко'),
	CreateCandidate(7,'213','Захаров','Геннадьевич','01.01.1993','Я криветко'),
	CreateCandidate(8,'Илья','123','Геннадьевич','01.01.1993','Я криветко'),
	CreateCandidate(9,'213','123','Геннадьевич','01.01.1993','Я криветко'),
	CreateCandidate(10,'Илья','Захаров','123','01.01.1993','Я криветко'),
	CreateCandidate(11,'123','Захаров','Геннадьевич','01.01.1993','Я криветко'),
	CreateCandidate(12,'213','Захаров','Геннадьевич','01.01.1993','Я криветко'),
	CreateCandidate(13,'213','Захаров','Геннадьевич','01.01.1993','Я криветко'),
	CreateCandidate(14,'123','Захаров','Геннадьевич','01.01.1993','Я криветко'),
	CreateCandidate(15,'1321','Захаров','Геннадьевич','01.01.1993','Я криветко'),
]



function CreateRequest(
	id : number,
	request_no : string,
	request_state : string,
	request_type : string,
	difficulty : string,
	recrouter : string,
	division : string,
	position_name : string,
 ){
	return {id, request_no, request_state, request_type, difficulty, recrouter,division,position_name}
 };


const row_request = [
	CreateRequest(1,'24-01-0001','Создана', 'Перевод', "Средне", "069-Рубинова-ЗС", "001",'Токарь'),
	CreateRequest(2,'24-01-0002','На согласовнии', 'Из вне', "Сложно", "069-Бабина-ИЗ", "004", "Фрезеровщик"),
	CreateRequest(3,'24-01-0003','Медосмотр', 'Перевод', "Легко", "069-Шубина-АК", "008", "Инженер по АСУП")
]


const EntityList: React.FC<Props> = ({ entity_type }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
	
	 useEffect(() => {
		
		const timer = setTimeout(() => {
			setIsLoading(false);
			}, 2000);

		return ()=> clearTimeout(timer);
		},[]);

	const btnClickLoad = () => {
		setIsLoading(true)
		
		const timer = setTimeout(() => {
			setIsLoading(false);
			}, 2000);
	}
	
	return (
		<Box paddingInlineStart="20px">
			<Typography variant='h6' component="div" color="primary" textAlign="center">
                    {entity_type === 'candiate' ? 'Кандидаты'
					: entity_type === 'request' ? 'Заявки'
					: 'Справочники'}
            <span>{isLoading}</span>
			</Typography>
			
			{entity_type === 'candiate' ? (
				<>
			<Box>
				<Stack spacing={{xs:1, sm:2}} direction="row" useFlexGap flexWrap="wrap">
					<TextField label="Имя"></TextField>
					<TextField label="Фамилия"></TextField>
					<TextField label="Отчество"></TextField>
					<TextField label="Пол" select sx={{ width:"100px"}}>
						<MenuItem key='1' value="М">М</MenuItem>
						<MenuItem key='1' value="Ж">Ж</MenuItem>
					</TextField>
					<ButtonGroup variant='contained' color="primary">
						<Button onClick={()=> btnClickLoad()} startIcon={<Sync/>}>Поиск</Button>
					</ButtonGroup>
				</Stack>
			</Box>
			{isLoading === true ? (<Spiner></Spiner>) : 
			(<Box paddingTop="8px">
			<Stack spacing={{xs:1, sm:2}} direction="row" useFlexGap flexWrap="wrap">
				{row_candidate.map((row) => (
					<Card sx={{ width:"30vh"}}>
						<CardContent>
							<Typography textAlign="center">
								<List>
									<ListItem>
										<ListItemAvatar>
											<Avatar><Image/></Avatar>
										</ListItemAvatar>
										<ListItemText primary={ row.last_name + ' ' + row.name + ' ' + row.middle_name} secondary="01.01.1993"></ListItemText>
									</ListItem>
								</List>
							</Typography>
							<Typography textAlign="center">
								Тут описание 
							</Typography>
						</CardContent>
						<CardActions>
							<Button variant='text'>Детально</Button>
						</CardActions>
					</Card>
				))};
			</Stack>
		</Box>)}
			
			</>
			):entity_type === 'request' ? 
			(<Box>
				<Stack spacing={{xs:1, sm:2}} direction="row" useFlexGap flexWrap="wrap">
					<TextField label="Номер"></TextField>
					<TextField label="Статус" select sx={{width:"200px"}}>
						<MenuItem key='1' value="Создана"><Chip color='primary' label="Создана"/></MenuItem>
						<MenuItem key='2' value="На согласовании"><Chip color='secondary' label="На согласовании"/></MenuItem>
						<MenuItem key='3' value="Медосмотр"><Chip color='secondary' label="Медосмотр"/></MenuItem>
					</TextField>
					<TextField label="Подразделение" sx={{width:"200px"}} select>
						<MenuItem key='1' value="Создана">001</MenuItem>
						<MenuItem key='2' value="На согласовании">004</MenuItem>
						<MenuItem key='3' value="Медосмотр">008</MenuItem>
					</TextField>
					<TextField label="Сложность" select sx={{width:"200px"}}>
						<MenuItem key='1' value="Легко">Легко<Rating defaultValue={0} readOnly></Rating></MenuItem>
						<MenuItem key='2' value="Средне">Средне<Rating defaultValue={2.5} readOnly></Rating></MenuItem>
						<MenuItem key='3' value="Сложно">Сложно<Rating defaultValue={5} readOnly></Rating></MenuItem>
					</TextField>
					<ButtonGroup variant='contained' color="primary">
						<Button onClick={()=>btnClickLoad()} startIcon={<Sync/>}>Поиск</Button>
					</ButtonGroup>
				</Stack>
				{isLoading === true ? (<Spiner></Spiner>) : (
				<TableContainer>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell align='center'>Номер заявки</TableCell>
									<TableCell align='center'>Статус заявки</TableCell>
									<TableCell align='center'>Откуда</TableCell>
									<TableCell align='center'>Сложность</TableCell>
									<TableCell align='center'>Рекрутер</TableCell>
									<TableCell align='center'>Подразделение</TableCell>
									<TableCell align='center'>Вакансия</TableCell>
								</TableRow>
							</TableHead>
							

								<TableBody>
								{row_request.map((row)=>(
									<TableRow>
										<TableCell>{row.request_no}</TableCell>
										<TableCell>{row.request_state === 'Создана' ? (<Chip color='primary' label={row.request_state}/>):(<Chip color='secondary' label={row.request_state}/>)}</TableCell>
										<TableCell>{row.request_type}</TableCell>
										<TableCell>{row.difficulty === 'Средне' ? (<Rating defaultValue={2.5} readOnly></Rating>):row.difficulty === 'Сложно' ? (<Rating defaultValue={5} readOnly></Rating>) : (<Rating defaultValue={0} readOnly></Rating>)}</TableCell>
										<TableCell>{row.recrouter}</TableCell>
										<TableCell align='center'>{row.division}</TableCell>
										<TableCell>{row.position_name}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
							)}
			</Box>) 
			: 
			(<></>)}

			
			
		</Box>
	);
};
  
export default EntityList;