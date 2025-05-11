import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Add } from "@mui/icons-material";
import {
    Button, Chip, Grid, MenuItem, Select, Stack, Table,
    TableBody, TableCell, TableHead, TableRow, TextField
} from "@mui/material";

export default function WdList() {
    return (
        <AuthenticatedLayout headPage="จำนวนวันทำงาน" breadcrumbs={[{ label: 'วันทำงาน' }, { label: 'รายการ' }]}>
            <Head title="จำนวนวันทำงาน" />
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Stack direction='row' justifyContent='center' spacing={2}>
                        <Select size="small" value={' '}>
                            <MenuItem value={' '}>เลือก</MenuItem>
                        </Select>
                        <Button size="small" variant="contained" startIcon={<Add/>}>เพิ่มปี</Button>
                    </Stack>
                </Grid>
                <Grid size={12}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>เดือน</TableCell>
                                <TableCell>จำนวนวัน</TableCell>
                                <TableCell>วันที่-เวลาสร้าง</TableCell>
                                <TableCell>ชื่อผู้สร้าง</TableCell>
                                <TableCell>วันที่-เวลาอัพเดท</TableCell>
                                <TableCell>ชื่อผู้อัพเดท</TableCell>
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