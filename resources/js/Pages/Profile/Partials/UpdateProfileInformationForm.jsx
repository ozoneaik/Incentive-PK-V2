import { useForm, usePage } from '@inertiajs/react';
import { Save } from '@mui/icons-material';
import { Button, FormControl, FormLabel, Stack, TextField } from '@mui/material';

export default function UpdateProfileInformation() {
    const user = usePage().props.auth.user;
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            username: user.username,
        });
    const submit = (e) => {
        e.preventDefault();
        patch(route('profile.update'));
    };

    return (
        <Stack direction='column' spacing={2}>
            <Stack direction='column' spacing={1}>
                <h2>ข้อมูลโปรไฟล์</h2>
                <p>อัปเดตข้อมูล ผู้ใช้งาน และ ชื่อ-นามสกุล</p>
            </Stack>
            <form onSubmit={submit} className="mt-6 space-y-6">
                <Stack direction='column' spacing={2}>
                    <FormControl>
                        <FormLabel error={errors.name} sx={{ mb: 1 }} htmlFor="name">ชื่อ</FormLabel>
                        <TextField
                            error={errors.name} helperText={errors.name}
                            size='small' id="name" value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required autoFocus autoComplete="name"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel error={errors.username} sx={{ mb: 1 }} htmlFor="username">ชื่อผู้ใช้</FormLabel>
                        <TextField
                            error={errors.username} helperText={errors.username}
                            size='small' id="username" value={data.username}
                            onChange={(e) => setData('username', e.target.value)}
                            required autoComplete="username"
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
