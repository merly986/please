
import {AppBar, Avatar, Box, IconButton, Toolbar, Stack} from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useStores } from "../context/root-store-general-context";
import { observer } from "mobx-react-lite";
import {MenuOpenOutlined, MenuOutlined} from '@mui/icons-material'
import {useEffect} from 'react'

const TopBar:React.FC = observer(() => {
    const {SideBar} = useStores()
    

    
    const handleBtnClickOpenCloseMenu=()=>{
      SideBar.rollAction()
    }

    
    
    return (
      <Box display={"flex"} width={"100%"}>
        <AppBar position="static" elevation={0}>
          {/* <Box></Box> */}
          <Box display={"flex"} justifyContent={"space-between"}>
            <Stack direction={"row"} justifyContent={"end"} alignItems={"center"} sx={{width:"55px"}}>
              <IconButton onClick={()=>handleBtnClickOpenCloseMenu()}>
                {SideBar.collapsed ? (<MenuOutlined sx={{color:"white"}}/>):(<MenuOpenOutlined sx={{color:"white"}}/>)}
              </IconButton>  
            </Stack>
            <Toolbar>
              <IconButton><NotificationsOutlinedIcon sx={{color:"white"}}></NotificationsOutlinedIcon></IconButton>
              <IconButton><SettingsOutlinedIcon sx={{color:"white"}}></SettingsOutlinedIcon></IconButton>
              <Box>
                <Avatar>ЗИ</Avatar>
              </Box>
            </Toolbar>
          </Box>
          
        </AppBar>
     </Box>
  );
});

export default TopBar;