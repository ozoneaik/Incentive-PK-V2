import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import OptionsMenu from './OptionsMenu';
import { usePage } from '@inertiajs/react';
import { Chip } from '@mui/material';
import MenuContent from './MenuContent';
import backgroundSidebar from '../../assets/background_sidebar.jpeg';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
    width: drawerWidth,
    flexShrink: 0,
    boxSizing: 'border-box',
    mt: 10,
    [`& .${drawerClasses.paper}`]: {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
});

export default function SideBar() {
    const { user } = usePage().props.auth;
    return (
        <Drawer
            variant="permanent"
            sx={(theme) => ({
                display: { xs: 'none', md: 'block' },
                [`& .${drawerClasses.paper}`]: {
                  backgroundColor: theme.palette.greyColor.dark,
                  color: theme.palette.greyColor.contrastText,
                  borderRight: `1px solid ${theme.palette.divider}`,
                },
              })}
              
        >
            <Box
                sx={{
                    display: 'flex',
                    // mt: 'calc(var(--template-frame-height, 0px) + 4px)',
                    // p: 1.5,
                }}
            >
                <img src={backgroundSidebar || ''} alt="backgroundSidebar" height={80} width={'100%'} />
            </Box>
            <Divider />
            <Box
                sx={{
                    overflow: 'auto',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <MenuContent />
            </Box>
            <Stack
                direction="row"
                sx={{
                    p: 2,
                    gap: 1,
                    alignItems: 'center',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Avatar
                    sizes="small"
                    alt="Profile_Picture"
                    src="https://images.pumpkin.tools/UserLogo.jpg"
                    sx={{ width: 36, height: 36 }}
                />
                <Box sx={{ mr: 'auto' }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px', mb: 1 }}>
                        {user.name}
                    </Typography>
                    <Chip
                        color={{
                            'admin': 'success',
                            'hr': 'warning',
                            'qc': 'secondary'
                        }[user.role] ?? 'error'}
                        label={user.role} size='small'
                    />
                </Box>
                <OptionsMenu />
            </Stack>
        </Drawer>
    );
}