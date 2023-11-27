import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const SkillCard = ({name, value}) => {
    return (
        <>
            <Typography component="legend" className='font-bold'>{name}</Typography>
            <LinearProgress
                name="simple-controlled"
                value={value}
                variant="determinate"
                color='inherit'
            />
        </>
    )
}

export default SkillCard;