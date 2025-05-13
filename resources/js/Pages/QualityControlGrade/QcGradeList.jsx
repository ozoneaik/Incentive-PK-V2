import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    Grid, Stack, Table, TableBody, TableCell,
    TableHead, TableRow, TextField, Typography
} from "@mui/material";

export default function QcGradeList() {
    return (
        <AuthenticatedLayout breadcrumbs={[{ label: 'ข้อมูลระดับการ QC' }, { label: 'รายการ' }]} headPage={'ข้อมูลระดับการ QC'}>
            <Head title="ข้อมูลระดับการ QC" />
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>เกรด</TableCell>
                                <TableCell>เวลา</TableCell>
                                <TableCell>ดั้งเดิม</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>เกรด</TableCell>
                                <TableCell>
                                    <Stack direction='row' spacing={2} alignItems='center'>
                                        <TextField
                                            type="number" placeholder="ชั่วโมง" size="small" defaultValue={0}
                                            slotProps={{ input: { inputProps: { min: 0, max: 23 } } }}
                                        />
                                        <Typography fontWeight='bold'>:</Typography>
                                        <TextField
                                            type="number" placeholder="นาที" size="small" defaultValue={0}
                                            slotProps={{ input: { inputProps: { min: 0, max: 59 } } }}
                                        />
                                        <Typography fontWeight='bold'>:</Typography>
                                        <TextField
                                            type="number" placeholder="วินาที" size="small" defaultValue={0}
                                            slotProps={{ input: { inputProps: { min: 0, max: 59 } } }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell>09:00:00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </AuthenticatedLayout>
    )
}