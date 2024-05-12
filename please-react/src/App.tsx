
import MainMenu from './components/MainMenu';
import { CssBaseline, ThemeProvider, Box, Paper} from '@mui/material';
import theme from './theme';
import TopBar from './components/TopBar';
import {useStores} from './context/root-store-general-context';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Entities from './pages/entities.tsx';
import Entity from './pages/entity';
import References from './pages/references';
import Settings from './pages/settings';
import UserIFO from './pages/user';
import { observer } from "mobx-react-lite";
import Page404 from './pages/Page404'

const  App:React.FC = observer(() => {
	const {SideBar} = useStores()
	return (
		<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Box sx={{display:"flex", height:"100vh",width:"100%", flexDirection:"column"}}>
						<Box sx={{ display: "flex", position:"fixed", width:"100%", zIndex:"1000"}}>
							<TopBar></TopBar>
						</Box>
						<Box sx={{ display: "flex", flexDirection: "row",height:"100%" }}>
							<Box sx={{display:"flex", flexDirection:"column", height:"100%", position:"fixed", overflowY:"auto", zIndex:"900"}}>
								<MainMenu></MainMenu>
							</Box>
							<Box className="content" width={"100%"} height={"100%"}>
								<Box sx={{display:"flex", flexDirection:"column", transition: "margin 0.3s ease"}} marginTop={"70px"} marginLeft={SideBar.collapsed ? ("80px"):("250px")}>
									<Routes>
										<Route path='/' element={<Home></Home>}/>
										<Route path='/candidate' element={<Entities rentity_type_name='candidate'></Entities>}/>
										<Route path='/request' element={<Entities rentity_type_name='request'></Entities>}/>
										<Route path='/candidate/:id' element={<Entity entity_id={1}></Entity>}/>
										<Route path='/request/:id' element={<Entity entity_id={1}></Entity>}/>
										<Route path='/references' element={<References></References>}/>
										<Route path='/settings' element={<Settings></Settings>}/>
										<Route path='/user' element={<UserIFO></UserIFO>}/>
										<Route path='*' element={<Page404></Page404>}/>
									</Routes> 	
								</Box>
							</Box>
						</Box>
					</Box>
				</ThemeProvider>
		</BrowserRouter>
		)
});

export default App
