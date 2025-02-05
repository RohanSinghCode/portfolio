import Chip from '@mui/material/Chip';

const SkillCard = ({ name, value }) => {
    return (
        <Chip className='font-bold dark:text-text-darkMode dark:bg-appbar-darkMode' label={name} />
    );
};

export default SkillCard;
