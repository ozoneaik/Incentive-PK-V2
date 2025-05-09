import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import Stack from '@mui/material/Stack';
import {
    PeopleRounded, CalendarMonth, HdrAuto, Inventory2,
    RequestQuote, Storage, Description
} from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemText, useTheme } from '@mui/material';
import { router } from '@inertiajs/react';



const mainListItems = [
    { text: 'INCENTIVE QC', icon: <RequestQuote />, path: 'home' },
    { text: 'ข้อมูลสินค้า QC', icon: <Inventory2 />, path: 'product.index' },
    { text: 'จำนวนจำนวนวันทำงาน', icon: <CalendarMonth />, path: 'home2' },
    { text: 'ข้อมูลระดับการ QC', icon: <Storage />, path: 'home3' },
    { text: 'ข้อมูลเกณฑ์คำนวณ', icon: <HdrAuto />, path: 'home4' },
    { text: 'รายงาน', icon: <Description />, path: 'home5' },
];

const secondaryListItems = [
    { text: 'ข้อมูลผู้ใช้งาน', icon: <PeopleRounded />, path: 'profile.edit' },
];

export default function MenuContent() {
    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
            <List dense>
                {mainListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            '&.Mui-selected': { backgroundColor: '#f25822', color: 'white' },
                            '&.Mui-selected:hover': { backgroundColor: '#bf451a' },
                            borderRadius: 2,p : 1
                        }} selected={route().current(item.path)} onClick={() => router.visit(route(item.path))}>
                            {/* <ListItemIcon sx={{ color: '#eaeaea' }}> */}
                            {/* </ListItemIcon> */}
                            {item.icon}&nbsp;&nbsp;
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <List dense>
                {secondaryListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{
                            '&.Mui-selected': { backgroundColor: '#f25822', color: 'white', },
                            '&.Mui-selected:hover': { backgroundColor: '#bf451a', },
                            borderRadius: 2,p : 1
                        }} selected={route().current(item.path)} onClick={() => router.visit(route(item.path))}>
                            {/* <ListItemIcon sx={{ color: '#eaeaea' }}>{item.icon}</ListItemIcon> */}
                            {item.icon}&nbsp;&nbsp;
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}
