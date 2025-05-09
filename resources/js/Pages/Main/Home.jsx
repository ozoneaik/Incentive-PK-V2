import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Article, DocumentScanner, Done } from "@mui/icons-material";
import { Button, Chip, Grid, MenuItem, Select, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
const breadcrumbs = [{ label: 'QC สินค้าประจำปี' }, { label: 'รายการ' }];
export default function Home({ year_list = [{ label: 2023 }] }) {

    return (
        <AuthenticatedLayout breadcrumbs={breadcrumbs} headPage="INCENTIVE QC">
            <Grid container spacing={2} >
                <Grid size={12}>
                    <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
                        <Select size="small" defaultValue={'2023'}>
                            {year_list.map((year, index) => (
                                <MenuItem value={year.label} key={index}>{year.label}</MenuItem>
                            ))}
                        </Select>
                        <Button variant="contained">+ เพิ่มปี</Button>
                    </Stack>
                </Grid>
                <Grid size={12}>
                    <Table sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>เดือน</TableCell>
                                <TableCell align="center">สถานะ</TableCell>
                                <TableCell>จำนวนพนักงาน</TableCell>
                                <TableCell>จำนวนวันทำงาน</TableCell>
                                <TableCell>จำนวนงาน</TableCell>
                                <TableCell>วันที่คำนวณ</TableCell>
                                <TableCell>วันที่คอนเฟิร์ม</TableCell>
                                <TableCell>วันที่ยืนยันการจ่าย</TableCell>
                                <TableCell align="center">#</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>2025-1</TableCell>
                                    <TableCell align="center">
                                        <Chip
                                            size="small" color="primary"
                                            icon={<Done />} label={'complete'}
                                        />
                                    </TableCell>
                                    <TableCell>8</TableCell>
                                    <TableCell>26</TableCell>
                                    <TableCell>27,462</TableCell>
                                    <TableCell>{new Date().toLocaleString('th-TH')}</TableCell>
                                    <TableCell>
                                        HR ส่งคำขออนุมัติเมื่อ 2025-02-15 08:50:17
                                        <br />
                                        QC อนุมัติเมื่อ 2025-02-17 08:27:55
                                    </TableCell>
                                    <TableCell>{new Date().toLocaleString('th-TH')}</TableCell>
                                    <TableCell align="center">
                                        <Button size="small" variant="outlined">
                                            <Article />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </AuthenticatedLayout>
    )
}