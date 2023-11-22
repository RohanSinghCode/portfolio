import TypewriterComponent from "typewriter-effect";
import Grid  from "@mui/material/Unstable_Grid2";
import profileImage from '../static/profile.jpg'

const Home = () => {
    return (
        <Grid  className='h-screen dark:text-text-darkMode'>
            <Grid container justifyContent='center' alignContent='center'>
                <Grid className='text-8xl mt-6 font-thin'>
                    ROHAN SINGH
                </Grid>
            </Grid>
            <Grid container justifyContent={'center'} alignContent={'center'} >
                <Grid className='rounded-full overflow-hidden h-60 w-60 my-6'>
                    <img src={profileImage} alt="profile"/> 
                </Grid>
            </Grid>
            <Grid  container justifyContent='center' alignContent='center' className='text-xl'>
                <Grid>
                    Hey, I am
                </Grid>
                <Grid sx={{ margin: '0 2px' }}>
                </Grid>
                <Grid>
                    <TypewriterComponent
                        onInit={(typewriter) => {
                            typewriter.typeString("Developer!")
                            .pauseFor(1000)
                            .deleteChars(10)
                            .typeString("Engineer!")
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
        </Grid>
    )
}

export default Home;