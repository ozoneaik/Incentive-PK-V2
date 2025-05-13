import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Button, Grid, MenuItem, Select,Stack,useMediaQuery} from "@mui/material";
import ListQcDesktop from "./ListQcDesktop";
import ListQcMobile from "./ListQcMobile";
const breadcrumbs = [{ label: 'QC สินค้าประจำปี' }, { label: 'รายการ' }];
export default function Home({ year_list = [{ label: 2023 }] }) {
    const listMock = [
        { name: '2023-1', status: 'complete', employee: 8, workday: 26, job: 27462, date_calculate: new Date().toLocaleString('th-TH'), date_confirm: new Date().toLocaleString('th-TH'), date_pay: new Date().toLocaleString('th-TH') },
        { name: '2023-2', status: 'wait', employee: 8, workday: 26, job: 27462, date_calculate: new Date().toLocaleString('th-TH'), date_confirm: new Date().toLocaleString('th-TH'), date_pay: new Date().toLocaleString('th-TH') },
        { name: '2023-3', status: 'pending', employee: 8, workday: 26, job: 27462, date_calculate: new Date().toLocaleString('th-TH'), date_confirm: new Date().toLocaleString('th-TH'), date_pay: new Date().toLocaleString('th-TH') },
    ];
    const isMobile = useMediaQuery('(max-width : 1000px)');
    return (
        <AuthenticatedLayout breadcrumbs={breadcrumbs} headPage="INCENTIVE QC">
            <Grid container spacing={2} >
                <Grid size={12}>
                    <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
                        <Select variant='outlined' size="small" defaultValue={'2023'}>
                            {year_list.map((year, index) => (
                                <MenuItem value={year.label} key={index}>
                                    {year.label}
                                </MenuItem>
                            ))}
                        </Select>
                        <Button variant="contained">+ เพิ่มปี</Button>
                    </Stack>
                </Grid>
                <Grid size={12}>
                    {isMobile ? (
                        <ListQcMobile listMock={listMock}/>
                    ) : (
                        <ListQcDesktop listMock={listMock} />
                    )}
                </Grid>
            </Grid>
        </AuthenticatedLayout>
    )
}
