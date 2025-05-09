import * as React from 'react';
import { styled } from '@mui/material/styles';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import {
    Badge, badgeClasses, Button, IconButton, Divider, dividerClasses, Menu, MenuItem as MuiMenuItem,
    listClasses, ListItemText, ListItemIcon, listItemIconClasses, paperClasses
} from '@mui/material';
import { router } from '@inertiajs/react';
import MenuButton from '@/Components/MenuButton';


const MenuItem = styled(MuiMenuItem)({
    margin: '2px 0',
});


export default function OptionsMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        router.post(route('logout'));
    }
    return (
        <React.Fragment>
            <MenuButton
                aria-label="Open menu" onClick={handleClick}
                sx={(theme) => ({
                    color: theme.palette.greyColor.contrastText,
                })}
            >
                <MoreVertRoundedIcon />
            </MenuButton>
            <Menu
                anchorEl={anchorEl}
                id="menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                sx={{
                    [`& .${listClasses.root}`]: {
                        padding: '4px',
                    },
                    [`& .${paperClasses.root}`]: {
                        padding: 0,
                    },
                    [`& .${dividerClasses.root}`]: {
                        margin: '4px -4px',
                    },
                }}
            >
                <MenuItem onClick={() => router.visit(route('profile.edit'))}>โปรไฟล์</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>การตั้งค่า</MenuItem>
                <Divider />
                <MenuItem
                    onClick={handleClose}
                    sx={{
                        [`& .${listItemIconClasses.root}`]: {
                            ml: 'auto',
                            minWidth: 0,
                        },
                    }}
                >
                    <Button color='error' onClick={handleLogout} variant='contained' endIcon={<LogoutRoundedIcon />}>
                        ออกจากระบบ
                    </Button>
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
