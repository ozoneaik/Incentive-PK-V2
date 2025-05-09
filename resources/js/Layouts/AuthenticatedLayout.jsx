import { usePage } from '@inertiajs/react';
import { alpha, Box, Card, Grid, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar/SideBar';
import Navbar from './Navbar';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';

const mainStyle = {
    alignItems: 'center', mx: 3, pb: 5, mt: { xs: 8, md: 0 },    
}

export default function AuthenticatedLayout({ children, breadcrumbs = [], headPage = 'หัวข้อ' }) {
    const user = usePage().props.auth.user;
    return (
        <Box sx={{ display: 'flex'}}>
            <Sidebar />
            <Navbar />
            <Box
                component="main"
                sx={(theme) => ({
                    flexGrow: 1,
                    backgroundColor : '#f4f6f9',
                    height: '100vh',
                    // backgroundColor: theme.vars
                    //     ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                    //     : alpha(theme.palette.background.default, 1),
                    overflow: 'auto',
                })}>
                <Stack spacing={2} sx={mainStyle} >
                    {breadcrumbs.length > 0 && <NavbarBreadcrumbs breadcrumbs={breadcrumbs} />}
                    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
                        {headPage && (
                            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                                {headPage}
                            </Typography>
                        )}
                        <Box
                            maxHeight={{
                                xs: 'calc(100vh - 170px)',
                                md: 'calc(100vh - 140px)'
                            }} sx={{ overflowY: 'auto' }}
                        >
                            <Card variant='outlined' sx={{p : 3,borderTop : '4px solid #f25822'}}>
                                {children}
                            </Card>
                        </Box>
                    </Box>

                </Stack>
            </Box >
        </Box >
    );
}
