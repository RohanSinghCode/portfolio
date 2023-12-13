import Grid  from "@mui/material/Unstable_Grid2";
import { projects } from "../constant";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
    return (
        <Grid container className='my-6' name="Projects">
            <Grid xs={12} className='flex justify-center'>
                <p className='text-6xl  border-b'>
                    PROJECTS
                </p> 
            </Grid>
            <Grid xs={12} className='mt-4'>
                <Grid container justifyContent={'center'}>
                {
                    projects.map((project) => {
                        return (
                            <Grid xs={4} className='m-2'>
                                <ProjectCard title={project.title} description={project.description} liveUrl={project.liveUrl} repoUrl={project.repoUrl} />
                            </Grid>
                        )
                    })
                }
                </Grid>
            </Grid>
        </Grid>
        
    )
}

export default ProjectsSection;