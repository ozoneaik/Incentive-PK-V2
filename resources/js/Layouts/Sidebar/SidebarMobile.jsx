
import { Avatar, Button, Divider, Drawer, drawerClasses, Stack, Typography } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuContent from './MenuContent';
import { router, usePage } from '@inertiajs/react';

export default function SidebarMobile({ open, setOpen, toggleDrawer }) {
    const { user } = usePage().props.auth;
    return (
        <Drawer
            anchor="right" open={open}
            onClose={toggleDrawer(false)}
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                [`& .${drawerClasses.paper}`]: {
                    backgroundImage: 'none',
                    backgroundColor: 'background.paper',
                },
            }}
        >
            <Stack sx={{ maxWidth: '70dvw', height: '100%' }}>
                <Stack direction="row" p={2} pb={0} spacing={1}>
                    <Stack direction="row" alignItems='center' spacing={1} p={1}>
                        <Avatar color='primary' sx={{ width: 30, height: 30 }} />
                        <Typography component="p" variant="h6">
                            {user.name}
                        </Typography>
                    </Stack>
                </Stack>
                <Divider />
                <Stack flexGrow={1}>
                    <MenuContent />
                    <Divider />
                </Stack>
                <Stack sx={{ p: 2 }}>
                    <Button
                        onClick={() => router.post(route('logout'))}
                        color='error' variant="contained" fullWidth
                        startIcon={<LogoutRoundedIcon />}
                    >
                        ออกจากระบบ
                    </Button>
                </Stack>
            </Stack>
        </Drawer>
    )
}