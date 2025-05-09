import * as React from 'react';
import { styled } from '@mui/material/styles';
import CoverPumpkin from '../../assets/Cover.png';
import { Login, PermContactCalendar, Https } from '@mui/icons-material';
import {
    Card as MuiCard, Stack, Typography, TextField,
    FormControl, FormLabel, Divider, Button,
    InputAdornment
} from '@mui/material';
import { Head, useForm } from '@inertiajs/react';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));


const SignInContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

const IconSlot = ({ icon }) => (<InputAdornment position='start'>{icon}</InputAdornment>);

export default function SignIn({ }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        password: '',
        remember: false,
    });

    const onChangeValue = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
}
    return (
        <>
            <Head title='เข้าสู่ระบบ' />
            <SignInContainer direction="column" justifyContent="space-between">
                <Card variant="outlined" sx={{ p: 0 }}>
                    <img src={CoverPumpkin || ''} alt='logo pumpkin' width={'100%'} height={'100%'} />
                    <Typography
                        textAlign='center'
                        color='#f05423'
                        fontWeight='bold'
                        sx={{ width: '100%', fontSize: 28 }}
                    >
                        INCENTIVE QC
                    </Typography>
                    <Divider />
                    <Typography textAlign='center'>เวอร์ชั่น 2</Typography>
                    <form onSubmit={handleSubmit} >
                        <Stack direction='column' spacing={2} sx={{ p: 3, pt: 0 }}>
                            <FormControl>
                                <FormLabel error={errors.username} htmlFor="username">รหัสพนักงาน</FormLabel>
                                <TextField
                                    error={errors.username} helperText={errors.username}
                                    size='small' id="username" type="text" name="username"
                                    autoComplete="username" onChange={onChangeValue}
                                    autoFocus required fullWidth value={data.username}
                                    variant="outlined"
                                    color={'primary'}
                                    slotProps={{
                                        input: { startAdornment: <IconSlot icon={<PermContactCalendar />} /> }
                                    }}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="password">รหัสผ่าน</FormLabel>
                                <TextField
                                    error={errors.password} helperText={errors.password}
                                    size='small' name="password" type="password"
                                    id="password" onChange={onChangeValue}
                                    autoComplete="current-password" value={data.password}
                                    required fullWidth variant="outlined" color={'primary'}
                                    slotProps={{
                                        input: { startAdornment: <IconSlot icon={<Https />} /> }
                                    }}
                                />
                            </FormControl>
                            <Button
                                loading={processing}
                                type="submit" fullWidth variant="contained" startIcon={<Login />}>
                                เข้าสู่ระบบ
                            </Button>
                        </Stack>
                    </form>
                </Card>
            </SignInContainer>
        </>
    );
}