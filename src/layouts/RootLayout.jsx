import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import ParticlesBackground from '../components/ParticlesBackground';


const RootLayout = () => {
    return (
        <Box className="dark:bg-body-darkMode">
            <ParticlesBackground />
            <Header />
            <Outlet /> 
        </Box>
    )
}

export default RootLayout;