import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, usePage} from "@inertiajs/react";
import {Add, Edit} from "@mui/icons-material";
import {
    Alert,
    Button, Grid, MenuItem, Select, Stack, Table,
    TableBody, TableCell, TableHead, TableRow,
} from "@mui/material";
import {useState} from "react";
import WdForm from "@/Pages/WorkDay/WdForm.jsx";

export default function WdList({list}) {
    const [openForm, setOpenForm] = useState(false);
    const [selected, setSelected] = useState();
    const handleForm = (item) => {
        setSelected(item);
        setOpenForm(true)
    }
    const {flash} = usePage().props;
    return (
        <AuthenticatedLayout headPage="จำนวนวันทำงาน" breadcrumbs={[{label: 'วันทำงาน'}, {label: 'รายการ'}]}>
            <Head title="จำนวนวันทำงาน"/>
            {openForm && <WdForm open={openForm} setOpen={setOpenForm} selected={selected}/>}
            <Grid container spacing={2}>
                {flash.success && (
                    <Grid size={12}>
                        <Alert>{flash.success}</Alert>
                    </Grid>
                )}
                {flash.error && (
                    <Grid size={12}>
                        <Alert>{flash.error}</Alert>
                    </Grid>
                )}
                <Grid size={12}>
                    <Stack direction='row' justifyContent='center' spacing={2}>
                        <Select variant='outlined' size="small" value={' '}>
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
                                <TableCell sx={{textAlign: 'center'}}>#</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {list.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.month}</TableCell>
                                    <TableCell>{item.work_day}</TableCell>
                                    <TableCell>{item.created_at}</TableCell>
                                    <TableCell>{item.created_by}</TableCell>
                                    <TableCell>{item.updated_at}</TableCell>
                                    <TableCell>{item.updated_by}</TableCell>
                                    <TableCell sx={{textAlign: 'center'}}>
                                        <Button
                                            size='small' color='warning' variant='contained' startIcon={<Edit/>}
                                            onClick={() => handleForm(item)}
                                        >
                                            แก้ไข
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
