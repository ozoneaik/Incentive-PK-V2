import { Button, Card, Chip, Stack, Typography } from "@mui/material";

const Detail = ({ Label, value, status = false }) => (
    <Stack direction='row' spacing={1}>
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
)

export default function ListQcMobile({ list = [] }) {
    return (
        <Stack direction='column' spacing={2}>
            {list && list.map((item, index) => (
                <Card key={index} sx={{ p: 1 }} variant="outlined">
                    <Stack direction='column' spacing={1}>
                        <Detail Label={'ปี'} value={item.name} />
                        <Detail Label={'สถานะ'} value={item.status} status={true} />
                        <Detail Label={'จำนวนพนักงาน'} value={item.employee} />
                        <Detail Label={'จำนวนวันทำงาน'} value={item.workday} />
                        <Detail Label={'จำนวนงาน'} value={item.job} />
                        <Detail Label={'วันที่คำนวณ'} value={item.date_calculate} />
                        <Detail Label={'วันที่คอนเฟิร์ม'} value={item.date_confirm} />
                        <Detail Label={'วันที่ยืนยันการจ่าย'} value={item.date_pay} />
                        <Button size="small" variant="contained">จัดการ</Button>
                    </Stack>
                </Card>
            ))}
        </Stack>
    )
}