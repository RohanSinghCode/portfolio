import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import useDarkSide from '../hooks/useDarkSide';
import { useState } from 'react';
import emailjs from '@emailjs/browser'
import { CircularProgress } from "@mui/material";
import {Call, Email, LocationOn} from '@mui/icons-material';


const Contact = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFullNameValid, setIsFullNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isMessageSending, setIsMessageSending] = useState(false);
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

    function validateName() {
        if (!fullName || fullName.trim() === '') {
            setIsFullNameValid(false);
            return false;
        } 
        
        setIsFullNameValid(true)
        return true;
    }

    function validateEmail() {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            setIsEmailValid(false);
            return false;
        }

        setIsEmailValid(true);
        return true;
        
    }
    const sendEmail = async () => {
        try {
            if (validateName() && validateEmail()) {
                setIsMessageSending(true);
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
            }
        } finally {
            setIsMessageSending(false);
        }
    }

    return (
        <div name="Contact">
            <Grid container className='my-6 flex justify-center'>
                <Grid item xs={12} className='flex justify-center'>
                    <p className='text-6xl  border-b'>
                        CONTACT
                    </p> 
                </Grid>
                <Grid item xs={12} className='flex justify-center mt-4'>
                <Grid container direction="row" justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Grid container justifyContent="center" className='pr-5'>
                                <Grid item xs={12} className="text-lg flex lg:justify-end justify-center my-2">
                                    <Call className='mr-3'/> +91-8469313398
                                </Grid>
                                <Grid item xs={12}  className="text-lg flex lg:justify-end justify-center my-2">
                                    <Email className='mr-3' /> srohan2508@gmail.com
                                </Grid>
                                <Grid item xs={12}  className="text-lg flex lg:justify-end justify-center my-2">
                                    <LocationOn className='mr-3' /> Bengaluru, Karnataka
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} className='pr-lg-5 flex justify-center lg:justify-start'>
                            <Grid container spacing={1} className="flex justify-cente w-5/6">
                                <Grid item xs={6}>
                                    <TextField  
                                        label="Full Name" 
                                        variant="outlined" 
                                        fullWidth 
                                        type="text"
                                        required
                                        error={!isFullNameValid}
                                        onChange={handleFullNameChange}
                                        onFocus={() => setIsFullNameValid(true)}
                                        helperText={isFullNameValid ? null : "Please add valid name"}
                                        value={fullName}
                                        className={colorTheme === 'light' ? 'custom-text-field' : ''}  
                                        InputLabelProps={{
                                        style: { color: 'inherit' },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField  
                                        label="Email" 
                                        variant="outlined" fullWidth
                                        type="email" 
                                        autoComplete="true"
                                        required={true}
                                        error={!isEmailValid}
                                        onChange={handleEmailChange}
                                        onFocus={() => setIsEmailValid(true)}
                                        helperText={isEmailValid ? null : "Please add valid email"}
                                        value={email}
                                        className={colorTheme === 'light' ? 'custom-text-field' : ''} 
                                        InputLabelProps={{
                                        style: { color: 'inherit' },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField 
                                    minRows={10} 
                                    multiline 
                                    fullWidth
                                    onChange={handleMessageChange}
                                    value={message}
                                    className={colorTheme === 'light' ? 'custom-text-field mt-2' : 'mt-2'}  
                                    label="Write Your Message" variant="outlined" type="text"
                                    InputLabelProps={{
                                    style: { color: 'inherit' },
                                    }}
                                    />
                                </Grid>
                                <Grid item xs={12}>  
                                    <LoadingButton
                                    loading={isMessageSending}
                                    color="inherit"
                                    className="border border-solid"
                                    onClick={sendEmail}
                                    loadingIndicator={<CircularProgress color="primary"/>}
                                    >
                                        <span>Send</span>
                                    </LoadingButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact;