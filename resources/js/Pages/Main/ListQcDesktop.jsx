import { Article, Done } from "@mui/icons-material";
import {
    Button, Chip,Table, TableBody, TableCell, TableHead, TableRow,
} from "@mui/material";

export default function ListQcDesktop({list}) {
    console.log(typeof list);

    return (
        <Table sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
            <TableHead >
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
                {list && list.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell>{item.k_month}</TableCell>
                        <TableCell align="center">
                            <Chip
                                size="small" color="primary"
                                icon={<Done />} label={'complete'}
                            />
                        </TableCell>
                        <TableCell>8</TableCell>
                        <TableCell>26</TableCell>
                        <TableCell>{item.k_month_count}</TableCell>
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
    )
}
