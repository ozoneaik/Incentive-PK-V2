import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Button, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField} from "@mui/material";
import {Download, Search} from "@mui/icons-material";
import {Head} from "@inertiajs/react";

export default function QcLogList() {
    return (
        <AuthenticatedLayout breadcrumbs={[{label: 'รายงาน QC LOG'}]} headPage='รายงาน QC Log'>
            <Head title='รายงาน qc'/>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Stack
                        direction={{xs: 'column', md: 'row'}}
                        justifyContent={{xs: 'start', md: 'space-between'}}
                        alignItems='center'
                        spacing={2}
                    >
                        <Stack direction='row' spacing={2}>
                            <TextField size='small' type={"month"}/>
                            <Button variant='contained' size='small' startIcon={<Search/>}>ค้นหา</Button>
                        </Stack>
                        <Button startIcon={<Download/>} variant='contained' color='info'>ส่งออก exel</Button>
                    </Stack>
                </Grid>
                <Grid size={12}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>วันที่บันทึก</TableCell>
                                <TableCell>รหัสพนักงาน</TableCell>
                                <TableCell>ชื่อพนักงาน</TableCell>
                                <TableCell>ซีเรียล</TableCell>
                                <TableCell>รหัสสินค้า</TableCell>
                                <TableCell>ชื่อสินค้า</TableCell>
                                <TableCell>ระยะเวลามาตรฐาน</TableCell>
                                <TableCell>เกรด</TableCell>
                                <TableCell>ชื่อผู้บันทึกข้อมูล</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>วันที่บันทึก</TableCell>
                                <TableCell>รหัสพนักงาน</TableCell>
                                <TableCell>ชื่อพนักงาน</TableCell>
                                <TableCell>ซีเรียล</TableCell>
                                <TableCell>รหัสสินค้า</TableCell>
                                <TableCell>ชื่อสินค้า</TableCell>
                                <TableCell>ระยะเวลามาตรฐาน</TableCell>
                                <TableCell>เกรด</TableCell>
                                <TableCell>ชื่อผู้บันทึกข้อมูล</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </AuthenticatedLayout>
    )
}
