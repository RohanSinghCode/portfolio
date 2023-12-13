import Grid  from "@mui/material/Unstable_Grid2";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectsSection from "../components/ProjectsSection";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <Grid container className='dark:text-text-darkMode'  justifyContent={'center'}>
            <Grid xs={12}>
                <About />
            </Grid>
            <Grid xs={12}>
                <ProjectsSection />
            </Grid>        
            <Grid xs={12}>
                <Skills />
            </Grid>
            <Grid xs={12}>
                <Contact />
            </Grid>
        </Grid>
    )
}

export default Home;