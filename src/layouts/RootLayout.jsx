import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const RootLayout = () => {
    return (
        <Box className="h-screen dark:bg-body-darkMode">
            <Header />
            <Outlet /> 
        </Box>
    )
}

export default RootLayout;