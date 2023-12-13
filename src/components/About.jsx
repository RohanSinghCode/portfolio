import TypewriterComponent from "typewriter-effect";
import Grid  from "@mui/material/Unstable_Grid2";
import profileImage from '../static/profile.jpg'

const About = () => {
    return (
        <div name="About">
            <Grid container justifyContent='center' alignContent='center'>
                <Grid className='text-8xl font-thin mt-4'>
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
                            typewriter.typeString("a Developer!")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("an Engineer!")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("a Gamer!")
                            .pauseFor(1000)
                            .start();
                        }}
                        options={{
                            loop: true
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent={'center'} alignContent={'center'} >
                <Grid className='mt-4'>
                Hey there! 👋 I'm a tech enthusiast with 2.5 years of coding adventures as a full-stack developer in DeltaX. I'm all about the hustle,<br/>
                a quick learner forever keen on picking up the next big thing. Beyond the keyboard, you'll catch me cheering for Barcelona on the<br/>
                football pitch, battling in gaming realms, and vibing to diverse beats. Let's code, play, and groove together! <br/>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;