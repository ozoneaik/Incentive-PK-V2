import { useForm } from '@inertiajs/react';
import { Save } from '@mui/icons-material';
import { Button, FormControl, FormLabel, Stack, TextField } from '@mui/material';
import { useRef } from 'react';

export default function UpdatePasswordForm() {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();
    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();
        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <Stack direction='column' spacing={2}>
            <Stack direction='column' spacing={1}>
                <h2>อัปเดตรหัสผ่าน</h2>
                <p>ตรวจสอบให้แน่ใจว่าบัญชีของคุณใช้รหัสผ่านแบบสุ่มที่ยาวเพื่อความปลอดภัย</p>
            </Stack>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <Stack direction='column' spacing={2}>
                    <FormControl>
                        <FormLabel error={errors.current_password} sx={{ mb: 1 }} htmlFor="current_password">
                            รหัสผ่านปัจจุบัน
                        </FormLabel>
                        <TextField
                            error={errors.current_password} helperText={errors.current_password}
                            size='small' id="current_password" value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                            required autoComplete="current_password" type='password'
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel error={errors.password} sx={{ mb: 1 }} htmlFor="password">
                            รหัสผ่านใหม่
                        </FormLabel>
                        <TextField
                            error={errors.password} helperText={errors.password}
                            size='small' id="password" value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            required autoComplete="password" type='password'
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel error={errors.password_confirmation} sx={{ mb: 1 }} htmlFor="password_confirmation">
                            ยืนยันรหัสผ่าน
                        </FormLabel>
                        <TextField
                            error={errors.password_confirmation} helperText={errors.password_confirmation}
                            size='small' id="password_confirmation" value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required autoComplete="password_confirmation" type='password'
                        />
                    </FormControl>

                    <Stack direction='row-reverse' spacing={2}>
                        <Button
                            type='submit' variant='contained'
                            startIcon={<Save />} loading={processing}
                        >
                            บันทึก
                        </Button>
                        {recentlySuccessful && 'บันทึกข้อมูลเรียบร้อยแล้ว'}
                    </Stack>
                </Stack>
            </form>
        </Stack>
    );
}
