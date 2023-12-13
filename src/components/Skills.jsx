import Grid  from "@mui/material/Unstable_Grid2";
import SkillCard from "./SkillCard";
import { skills } from "../constant";

const Skills = () => {
    return (
        <div name="Skills">
            <Grid container className='my-6'>
                <Grid xs={12} className='flex justify-center'>
                    <p className='text-6xl  border-b'>
                        SKILLS
                    </p> 
                </Grid>
                <Grid xs={12}>
                    <Grid container justifyContent={'center'}>
                        {
                            skills.map(skill => {
                                return (
                                    <Grid xs={4} className='m-2 w-1/4'>
                                        <SkillCard name={skill.name} value={skill.value} key={skill.name} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Skills;