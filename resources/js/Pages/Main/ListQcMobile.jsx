import {Button, Card, Chip, Grid, Stack, Typography} from "@mui/material";

const Detail = ({ Label, value, status = false,size=6 }) => (
    <Grid size={size}>
        <Stack direction='row' spacing={1} alignItems='center'>
            <Typography fontWeight="bold">{Label} :</Typography>
            {status ? (
                <Chip label={value} color={{
                    complete : 'primary',
                    active : 'secondary',
                    wait : 'warning',
                    cancel : 'error',
                }[value]}/>
            ) : (
                <Typography variant="">{value}</Typography>
            )}
        </Stack>
    </Grid>
)

export default function ListQcMobile({ list = [] }) {
    return (
        <Stack direction='column' spacing={2}>
            {list && list.map((item, index) => (
                <Card key={index} sx={{ p: 1 }} variant="outlined">
                    <Grid container spacing={2}>
                        <Detail Label={'ปี'} value={item.name} />
                        <Detail Label={'สถานะ'} value={item.status} status={true} />
                        <Detail Label={'จำนวนพนักงาน'} value={item.employee} />
                        <Detail Label={'จำนวนวันทำงาน'} value={item.workday} />
                        <Detail Label={'จำนวนงาน'} value={item.k_month_count} />
                        <Detail size={6} Label={'วันที่คำนวณ'} value={item.date_calculate} />
                        <Detail size={6} Label={'วันที่คอนเฟิร์ม'} value={item.date_confirm} />
                        <Detail size={12} Label={'วันที่ยืนยันการจ่าย'} value={item.date_pay} />
                        <Grid size={12}>
                            <Button size="small" variant="contained">จัดการ</Button>
                        </Grid>
                    </Grid>
                    <Stack direction='column' spacing={1}>

                    </Stack>
                </Card>
            ))}
        </Stack>
    )
}
