import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    Box,
    Button, Grid, MenuItem, Select,
    Skeleton, Stack, useMediaQuery
} from "@mui/material";
import ListQcDesktop from "./ListQcDesktop";
import ListQcMobile from "./ListQcMobile";
import {useEffect, useState} from "react";

const breadcrumbs = [{label: 'QC สินค้าประจำปี'}, {label: 'รายการ'}];
export default function Home({year_list = [{label: 2023}]}) {
    const [loading, setLoading] = useState(false);
    const isMobile = useMediaQuery('(max-width : 1000px)');
    const [listData, setListData] = useState([]);

    useEffect(() => {
        // fetchData().finally(() => setLoading(false));
    });
    const fetchData = async () => {
        try {
            setLoading(true);
            const {data, status} = await axios.get(route('qc.index'));
            console.log(data, status);
            setListData(data.list)
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthenticatedLayout breadcrumbs={breadcrumbs} headPage="INCENTIVE QC">
            <Button onClick={() => fetchData()}>fetch</Button>
            <Grid container spacing={2} mb={2}>
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
            </Grid>
            <Grid container spacing={2}>
                {loading ? (
                    <Grid size={12}>
                        <Skeleton variant="text" sx={{fontSize: '1rem'}}/>
                        <Skeleton variant="circular" width={40} height={40}/>
                        <Skeleton variant="rectangular" width={210} height={60}/>
                        <Skeleton variant="rounded" width={210} height={60}/>
                    </Grid>
                ) : (
                    <Grid size={12}>
                        {listData && listData.length > 0 && isMobile ?
                            <ListQcMobile list={listData}/> : <ListQcDesktop list={listData}/>
                        }
                    </Grid>
                )}
            </Grid>
        </AuthenticatedLayout>
    )
}
