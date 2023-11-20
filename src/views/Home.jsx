import TypewriterComponent from "typewriter-effect";
import Grid  from "@mui/material/Unstable_Grid2";

const Home = () => {
    return (
        <Grid container justifyContent='center' alignItems='center' className='h-screen dark:text-textDarkMode'>
            <Grid>
                Hey, I am
            </Grid>
            <Grid sx={{ margin: '0 2px' }}>
                {/* Adjust the margin value as needed */}
            </Grid>
            <Grid>
                <TypewriterComponent
                    onInit={(typewriter) => {
                        typewriter.typeString("Rohan!")
                        .pauseFor(1000)
                        .deleteChars(6)
                        .typeString("Developer!")
                        .pauseFor(1000)
                        .deleteChars(10)
                        .typeString("Gamer!")
                        .pauseFor(1000)
                        .start();
                    }}
                    options={{
                        loop: true
                    }}
                />
            </Grid>

        </Grid>
    )
}

export default Home;