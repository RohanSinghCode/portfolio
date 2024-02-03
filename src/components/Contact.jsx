import Grid  from "@mui/material/Unstable_Grid2";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useDarkSide from '../hooks/useDarkSide';
import { useState } from 'react';
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [colorTheme] = useDarkSide();
    function handleFullNameChange(e) {
        setFullName(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleMessageChange(e) {
        setMessage(e.target.value);
    }

    async function sendEmail(e) {
        e.preventDefault();
        let templateParams = {
            'from_name': fullName,
            'from_email': email,
            'message': message,
            'to_name': 'Rohan Singh'
        }
        await emailjs.send('service_ssyf1nj', 'template_gp7a3ag', templateParams, 'it8gtTu9xzquTYo54');
        setFullName('');
        setEmail('');
        setMessage('');
    };
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
                                <TextField  
                                    label="Full Name" 
                                    variant="outlined" 
                                    fullWidth 
                                    type="text"
                                    required
                                    onChange={handleFullNameChange}
                                    defaultValue={fullName}
                                    className={colorTheme === 'light' ? 'custom-text-field' : ''}  
                                    InputLabelProps={{
                                    style: { color: 'inherit' },
                                    }}
                                />
                            </Grid>
                            <Grid xs={6}>
                                <TextField  
                                label="Email" 
                                variant="outlined" fullWidth
                                type="email" 
                                autoComplete="true"
                                required
                                onChange={handleEmailChange}
                                defaultValue={email}
                                className={colorTheme === 'light' ? 'custom-text-field' : ''} 
                                InputLabelProps={{
                                style: { color: 'inherit' },
                                }}
                                />
                            </Grid>
                            <Grid xs={12}>
                                <TextField 
                                minRows={10} 
                                multiline 
                                fullWidth
                                onChange={handleMessageChange}
                                defaultValue={message}
                                className={colorTheme === 'light' ? 'custom-text-field' : ''}  
                                label="Write Your Message" variant="outlined" type="text"
                                InputLabelProps={{
                                style: { color: 'inherit' },
                                }}
                                />
                            </Grid>
                            <Grid xs={12} >  
                                <Button  className="border border-solid custom-button" onClick={sendEmail}>Send</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact;