import {
    Alert,
    Button,
    Dialog, DialogContent, DialogTitle, FormControl,
    FormLabel, Grid, Stack, TextField, Typography
} from '@mui/material';

import {Close, EditNote, Save} from '@mui/icons-material'
import {useForm, usePage} from "@inertiajs/react";

export default function WdForm({open, setOpen, selected}) {
    const {data, setData, processing, post} = useForm({
        ...selected
    });

    const handleClose = (e, r) => {
        if (r === 'escapeKeyDown' || r === 'backdropClick') return;
        setOpen(false)
    }

    const handleOnChange = (e) => {
        const {value, name} = e.target;
        setData(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('workday.store'),{
            onFinish : () => {
                setOpen(false)
            }
        })
    }

    const {flash} = usePage().props;
    return (
        <Dialog
            open={open}
            onClose={(event, reason) => handleClose(event, reason)}
        >
            <DialogTitle>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <EditNote/>
                    <Typography variant='h6' fontWeight='bold'>
                        แก้ไขจำนวนวันทำงาน
                    </Typography>
                </Stack>
            </DialogTitle>
            <DialogContent>
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
                </Grid>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid component={FormControl} size={6}>
                            <FormLabel>ปี</FormLabel>
                            <TextField fullWidth size='small' disabled value={data.year}/>
                        </Grid>
                        <Grid component={FormControl} size={6}>
                            <FormLabel>เดือน</FormLabel>
                            <TextField fullWidth size='small' disabled value={data.month}/>
                        </Grid>
                        <Grid component={FormControl} size={12}>
                            <FormLabel>จำนวนวันทำงาน</FormLabel>
                            <TextField
                                onChange={handleOnChange} name='work_day' fullWidth
                                type='number' size='small' value={data.work_day}
                            />
                        </Grid>
                        <Grid component={FormControl} size={6}>
                            <FormLabel htmlFor='created_by'>ผู้สร้าง</FormLabel>
                            <TextField
                                onChange={handleOnChange} disabled name='created_by' fullWidth
                                size='small' value={data.created_by}
                            />
                        </Grid>
                        <Grid component={FormControl} size={6}>
                            <FormLabel>ผู้อัพเดท</FormLabel>
                            <TextField
                                onChange={handleOnChange} disabled name='updated_by' fullWidth
                                size='small' value={data.updated_by}
                            />
                        </Grid>
                        <Grid component={FormControl} size={6}>
                            <FormLabel>สร้างเมื่อ</FormLabel>
                            <TextField
                                onChange={handleOnChange} disabled name='created_at' fullWidth
                                size='small' value={data.created_at}
                            />
                        </Grid>
                        <Grid component={FormControl} size={6}>
                            <FormLabel>อัพเดทเมื่อ</FormLabel>
                            <TextField
                                onChange={handleOnChange} disabled name='updated_at' fullWidth
                                size='small' value={data.updated_at}
                            />
                        </Grid>
                        <Grid size={12}>
                            <Stack direction='row' spacing={2} justifyContent='end'>
                                <Button
                                    loading={processing} variant='contained'
                                    startIcon={<Save/>} type='submit'
                                >
                                    บันทึก
                                </Button>
                                <Button
                                    loading={processing} variant='contained' color='secondary'
                                    startIcon={<Close/>} onClick={() => handleClose()}
                                >
                                    ยกเลิก
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
        </Dialog>
    )
}
