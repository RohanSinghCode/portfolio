import Grid  from "@mui/material/Unstable_Grid2";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import useDarkSide from '../hooks/useDarkSide';


const Contact = () => {
    const [colorTheme] = useDarkSide();
    console.log(colorTheme);
    return (
        <div name="Contact">
            <Grid container className='my-6'>
                <Grid xs={12} className='flex justify-center'>
                    <p className='text-6xl  border-b'>
                        CONTACT
                    </p> 
                </Grid>
                <Grid xs={12} className='flex justify-center  mt-4'>
                    <Box className='grow mx-2 justify-center flex'>
                        <Grid container  justifyContent={'center'}  spacing={1} className='w-10/12'>
                            <Grid xs={6}>
                                <TextField  label="Full Name" variant="outlined" fullWidth type="text"
                                className={colorTheme === 'dark' ? 'custom-text-field' : ''}  
                                InputLabelProps={{
                                style: { color: 'inherit' },
                                }}
                                />
                            </Grid>
                            <Grid xs={6}>
                                <TextField  label="Email" variant="outlined" fullWidth type="email" autoComplete 
                                className={colorTheme === 'dark' ? 'custom-text-field' : ''} 
                                InputLabelProps={{
                                style: { color: 'inherit' },
                                }}
                                />
                            </Grid>
                            <Grid xs={12}>
                                <TextField minRows={10} multiline 
                                fullWidth
                                className={colorTheme === 'dark' ? 'custom-text-field' : ''}  
                                label="Write Your Message" variant="outlined" type="text"
                                InputLabelProps={{
                                style: { color: 'inherit' },
                                }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact;