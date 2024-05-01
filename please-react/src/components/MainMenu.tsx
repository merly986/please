import {Sidebar, sidebarClasses} from 'react-pro-sidebar';
import {Box, Typography,List, ListItemButton, ListItemIcon} from '@mui/material'
import { useStores } from "../context/root-store-general-context";
import { observer } from "mobx-react-lite";
import theme from '../theme';
import {HomeOutlined, PeopleOutlined,ListOutlined,MenuBookOutlined,SettingsApplicationsOutlined, HelpOutline} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import {useEffect} from 'react'





const MainMenu: React.FC = observer(() => {
    const {SideBar} = useStores()
    const navigate = useNavigate()

   


    function btnNavigateClick(id:number,followRoute:string){
        SideBar.setSelectedIndexAction(id)
        navigate(followRoute)
    }

    return(
                    <Sidebar id='SideBar' collapsed={SideBar.collapsed} style={{maxWidth:"200px", height:"100%"}}
                        rootStyles={{
                            [`.${sidebarClasses.container}`]:{
                                backgroundColor: theme.palette.primary.main,
                            },
                        }}
                    >
						<Box sx={{display:"flex", flexDirection:"column",height:"100%", justifyContent:"space-between"}}>
                            <Box textAlign={"center"} border={2} borderColor={theme.palette.primary.dark} borderRadius={2} marginTop={"70px"}>
                                <Typography textAlign={"center"} variant='h3' color={"white"} fontWeight={"bold"}>Меню</Typography>
                                <Box sx={{width:"100%"}} justifyContent={"center"}>
                                    <List component={"nav"}>
                                        <ListItemButton selected={SideBar.selectedIndex === 1} onClick={()=>btnNavigateClick(1,"/")} 
                                            sx={{ 
                                                '&.Mui-selected':{
                                                    backgroundColor : theme.palette.primary.dark,
                                                    borderRadius: "4px",
                                                },
                                            }}
                                            >
                                            <ListItemIcon sx={{paddingLeft:"6px"}}>
                                                <HomeOutlined sx={{color:"white"}} fontSize='large'/>
                                            </ListItemIcon>
                                            <Typography fontWeight={"bold"} sx={{paddingLeft:"8px"}} variant='h5'>Домой</Typography>  
                                        </ListItemButton>
                                        <ListItemButton selected={SideBar.selectedIndex === 2} onClick={()=>btnNavigateClick(2,"candidate")}
                                            sx={{ 
                                                '&.Mui-selected':{
                                                    backgroundColor : theme.palette.primary.dark,
                                                    borderRadius: "4px",
                                                },
                                            }}
                                            >
                                            <ListItemIcon sx={{paddingLeft:"6px"}}>
                                                <PeopleOutlined sx={{color:"white"}} fontSize='large'/>
                                            </ListItemIcon>
                                            <Typography fontWeight={"bold"} sx={{paddingLeft:"8px"}} variant='h5'>Кандидаты</Typography>   
                                        </ListItemButton>
                                        <ListItemButton selected={SideBar.selectedIndex === 3} onClick={()=>btnNavigateClick(3,"request")}
                                            sx={{ 
                                                '&.Mui-selected':{
                                                    backgroundColor : theme.palette.primary.dark,
                                                    borderRadius: "4px",
                                                },
                                            }}
                                            >
                                            <ListItemIcon sx={{paddingLeft:"6px"}}>
                                                <ListOutlined sx={{color:"white"}} fontSize='large'/>
                                            </ListItemIcon>
                                            <Typography fontWeight={"bold"} sx={{paddingLeft:"8px"}} variant='h5'>Заявки</Typography>  
                                        </ListItemButton>
                                        <ListItemButton selected={SideBar.selectedIndex === 4} onClick={()=>btnNavigateClick(4,"references")}
                                            sx={{ 
                                                '&.Mui-selected':{
                                                    backgroundColor : theme.palette.primary.dark,
                                                    borderRadius: "4px",
                                                },
                                            }}
                                            >
                                            <ListItemIcon sx={{paddingLeft:"6px"}}>
                                                <MenuBookOutlined sx={{color:"white"}} fontSize='large'/>
                                            </ListItemIcon>
                                            <Typography fontWeight={"bold"} sx={{paddingLeft:"8px"}} variant='h5'>Справочники</Typography>   
                                        </ListItemButton>
                                    </List>
                                </Box>
                            </Box>
                            <Box textAlign={"center"} border={2} borderColor={theme.palette.primary.dark} borderRadius={2} marginBottom={"8px"}>
                                <List component={"nav"}>
                                    <ListItemButton selected={SideBar.selectedIndex === 5} onClick={()=>btnNavigateClick(5,"settings")}
                                    sx={{ 
                                        '&.Mui-selected':{
                                            backgroundColor : theme.palette.primary.dark,
                                            borderRadius: "4px",
                                        },
                                    }}
                                    >
                                        <ListItemIcon sx={{paddingLeft:"6px"}}>
                                            <SettingsApplicationsOutlined sx={{color:"white"}} fontSize='large'/>
                                        </ListItemIcon>
                                        <Typography fontWeight={"bold"} sx={{paddingLeft:"8px"}} variant='h5'>Настройки</Typography>  
                                    </ListItemButton>
                                    <ListItemButton selected={SideBar.selectedIndex === 6} onClick={()=>btnNavigateClick(6,"user")}
                                    sx={{ 
                                        '&.Mui-selected':{
                                            backgroundColor : theme.palette.primary.dark,
                                            borderRadius: "4px",
                                        },
                                    }}
                                    >
                                        <ListItemIcon sx={{paddingLeft:"6px"}}>
                                            <HelpOutline sx={{color:"white"}} fontSize='large'/>
                                        </ListItemIcon>
                                        <Typography fontWeight={"bold"} sx={{paddingLeft:"8px"}} variant='h5'>Помощь</Typography> 
                                    </ListItemButton>
                                </List>
                            </Box>
                            
                        </Box>
                    </Sidebar>
    )
});
export default MainMenu;