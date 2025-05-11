import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    Button, Chip, Grid, MenuItem, Select, Stack,
    Table, TableBody, TableCell, TableHead, TableRow, TextField, useMediaQuery
} from "@mui/material";
import { GetApp, Add } from '@mui/icons-material';
import { Head } from "@inertiajs/react";

const breadcrumbs = [{ label: 'ข้อมูลสินค้า QC' }, { label: 'รายการ' }];

export default function PQcList({ products, filters }) {
    const isMobile = useMediaQuery('(max-width : 1000px)');
    return (
        <AuthenticatedLayout breadcrumbs={breadcrumbs} headPage="ข้อมูลสินค้า QC">
            <Head title="ข้อมูลสินค้า QC" />
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' spacing={2}>
                        <Stack direction='row' spacing={2}>
                            <TextField fullWidth={isMobile} size="small" placeholder="ค้นหาข้อมูล" />
                            <Select fullWidth={isMobile} size="small" defaultValue={'เลือก'}>
                                <MenuItem value='เลือก'>ระดับ QC ทั้งหมด</MenuItem>
                                <MenuItem value='1'>1</MenuItem>
                                <MenuItem value='2'>2</MenuItem>
                            </Select>
                        </Stack>
                        <Stack direction='row' spacing={2}>
                            <Button size="small" fullWidth={isMobile} startIcon={<GetApp />} variant='contained' color="success">ส่งออก exel</Button>
                            <Button size="small" fullWidth={isMobile} startIcon={<Add />} variant='contained'>เพิ่มสินค้า</Button>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={12}>
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
                            <TableRow>
                                <TableCell>No</TableCell>
                                <TableCell>รหัสสินค้า</TableCell>
                                <TableCell>ชื่อสินค้า</TableCell>
                                <TableCell>หน่วย</TableCell>
                                <TableCell>เวลา QC มาตรฐาน</TableCell>
                                <TableCell>
                                    <Chip label='Very Easy' color="success" size="small" />
                                </TableCell>
                                <TableCell>#</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </AuthenticatedLayout>
    )
}