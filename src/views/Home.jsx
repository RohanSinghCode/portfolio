import Grid  from "@mui/material/Unstable_Grid2";
import About from "../components/About";
import Skills from "../components/Skills";

const Home = () => {
    return (
        <Grid container className='dark:text-text-darkMode'  justifyContent={'center'}>
            <Grid xs={12}>
                <About />
            </Grid>        
            <Grid xs={12}>
                <Skills />
            </Grid>
        </Grid>
    )
}

export default Home;