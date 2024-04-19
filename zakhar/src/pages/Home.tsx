import React from 'react'
import Spiner from '../components/Spiner';
import { Box,Typography } from '@mui/material';


type Props = {}

function Home({}: Props) {
  return (
    <Box>
       <Typography variant='h6' component="div" color="primary" textAlign="center">
        Стартовая страница
      </Typography>
    </Box>
  )
}

export default Home