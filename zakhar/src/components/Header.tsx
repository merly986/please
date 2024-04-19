import React, { Component } from 'react'
import {Box, Toolbar, AppBar, Typography, Button, Stack} from '@mui/material'
import Spiner from './Spiner'
import { SettingsAccessibility,Key } from '@mui/icons-material'
import { ReactComponent as CustomLogo } from './../image/logo/EHP_falt_logo_wihte.svg'
const Header = () =>{
    return (
      <Box bgcolor="white" sx={{ flexGrow: 1}}>
        <AppBar position='static'>
			<Toolbar>
				<Box><CustomLogo width={128} height={68}></CustomLogo>
				</Box>
                <Typography variant='h6' component="div" sx={{flexGrow : 1}} paddingLeft={2}>
						      <Stack direction="row">
                    Система подбора персонала
                  </Stack>
                </Typography>
               <Button startIcon={<Key/>} color="inherit">Вход</Button>
            </Toolbar> 
        </AppBar>
        <div></div>
      </Box>
    )
}

export default Header;