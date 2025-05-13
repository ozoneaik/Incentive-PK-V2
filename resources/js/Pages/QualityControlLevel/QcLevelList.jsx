import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import {
    Button,
    FormLabel,
    Grid, MenuItem, Select, Stack, Table, TableBody, TableCell,
    TableHead, TableRow, TextField
} from "@mui/material";

import {ClearAll, Search} from "@mui/icons-material";

export default function QcLevelList() {
    return (
        <AuthenticatedLayout brt>
            <Head title="ข้อมูลเกณฑ์คำนวณ"/>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Grid container spacing={2}>
                        <Grid size={6}>
                            <FormLabel>ระดับ QC เกรด</FormLabel>
                            <Select variant='outlined' defaultValue={' '} fullWidth size='small'>
                                <MenuItem value={' '}>ทั้งหมด</MenuItem>
                            </Select>
                        </Grid>
                        <Grid size={6}>
                            <FormLabel>ระดับ QC</FormLabel>
                            <Select variant='outlined' defaultValue={' '} fullWidth size='small'>
                                <MenuItem value={' '}>ทั้งหมด</MenuItem>
                            </Select>
                        </Grid>
                        <Grid size={12}>
                            <Stack direction='row' spacing={2} justifyContent='center'>
                                <Button variant='contained' size='small' startIcon={<Search/>}>
                                    ค้นหา
                                </Button>
                                <Button variant='contained' size='small' color='warning' startIcon={<ClearAll/>}>
                                    คืนค่า
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={12}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ลำดับ</TableCell>
                                <TableCell>รหัสระดับ QC</TableCell>
                                <TableCell>ระดับ QC</TableCell>
                                <TableCell>เกรด</TableCell>
                                <TableCell>Rate (คำนวณ) / เครื่อง</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>L001</TableCell>
                                <TableCell>Very Easy</TableCell>
                                <TableCell>C</TableCell>
                                <TableCell>
                                    <TextField fullWidth type="number" size="small"/>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </AuthenticatedLayout>
    )
}
