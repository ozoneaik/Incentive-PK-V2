import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    Button, Chip, Grid, MenuItem, Select, Stack, debounce,
    Table, TableBody, TableCell, TableHead, TableRow, TextField, useMediaQuery
} from "@mui/material";
import {GetApp, Add, Edit} from '@mui/icons-material';
import {Head} from "@inertiajs/react";

const breadcrumbs = [{label: 'ข้อมูลสินค้า QC'}, {label: 'รายการ'}];

const LevelDetail = ({levelId = 'level'}) => {
    const level = {
        'L001': {label: 'very Easy', color: 'success'},
        'L002': {label: 'Easy', color: 'info'},
        'L003': {label: 'Middling', color: 'secondary'},
        'L004': {label: 'Hard', color: 'warning'},
        'L005': {label: 'very Hard', color: 'error'},
    }[levelId] || {label: 'no QC', color: 'inherit'};
    return (
        <Chip variant="filled" label={level?.label} color={level?.color}/>
    )
}

export default function PQcList({products, filters}) {
    const isMobile = useMediaQuery('(max-width : 1000px)');
    const TableDetail = () => (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>No</TableCell>
                    <TableCell>รหัสสินค้า</TableCell>
                    <TableCell>ชื่อสินค้า</TableCell>
                    <TableCell>หน่วย</TableCell>
                    <TableCell>เวลา QC มาตรฐาน</TableCell>
                    <TableCell>ระดับ QC</TableCell>
                    <TableCell>#</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products.data.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.pid}</TableCell>
                        <TableCell>{item.pname}</TableCell>
                        <TableCell>{item.unit || 'อัน'}</TableCell>
                        <TableCell>{item.timeperpcs}</TableCell>
                        <TableCell>
                            <LevelDetail levelId={item.levelid}/>
                        </TableCell>
                        <TableCell>
                            <Stack direction='row' spacing={2}>
                                <Button
                                    variant='contained' size='small'
                                    color='warning' startIcon={<Edit/>}>
                                    แก้ไข
                                </Button>
                            </Stack>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );

    return (
        <AuthenticatedLayout breadcrumbs={breadcrumbs} headPage="ข้อมูลสินค้า QC">
            <Head title="ข้อมูลสินค้า QC"/>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Stack direction={{xs: 'column', md: 'row'}} justifyContent='space-between' spacing={2}>
                        <Stack direction='row' spacing={2}>
                            <TextField fullWidth={isMobile} size="small" placeholder="ค้นหาข้อมูล"/>
                            <Select fullWidth={isMobile} size="small" defaultValue={'เลือก'} variant='outlined'>
                                <MenuItem value='เลือก'>ระดับ QC ทั้งหมด</MenuItem>
                                <MenuItem value='1'>1</MenuItem>
                                <MenuItem value='2'>2</MenuItem>
                            </Select>
                        </Stack>
                        <Stack direction='row' spacing={2}>
                            <Button
                                size="small" fullWidth={isMobile} startIcon={<GetApp/>}
                                variant='contained' color="success"
                            >
                                ส่งออก exel
                            </Button>
                            <Button
                                size="small" fullWidth={isMobile}
                                startIcon={<Add/>} variant='contained'
                            >
                                เพิ่มสินค้า
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={12}>
                    <TableDetail/>
                </Grid>
            </Grid>
        </AuthenticatedLayout>
    )
}
