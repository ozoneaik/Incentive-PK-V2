import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Card, Grid } from '@mui/material';

const breadcrumbs = [{ label: 'โปรไฟล์ส่วนตัว' }, { label: 'แก้ไข' }];

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout breadcrumbs={breadcrumbs} headPage="โปรไฟล์ส่วนตัว">
            <Head title="โปรไฟล์ส่วนตัว" />
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Card variant="outlined" sx={{ p: 2 }}>
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </Card>
                </Grid>
                <Grid size={12}>
                    <Card variant="outlined" sx={{ p: 2 }}>
                        <UpdatePasswordForm className="max-w-xl" />
                    </Card>
                </Grid>
            </Grid>
        </AuthenticatedLayout>
    );
}
