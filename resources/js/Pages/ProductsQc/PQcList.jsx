import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Grid, Stack } from "@mui/material";

const breadcrumbs = [{ label: 'ข้อมูลสินค้า QC' }, { label: 'รายการ' }];

export default function PQcList({ products,filters }) {
    return (
        <AuthenticatedLayout breadcrumbs={breadcrumbs} headPage="ข้อมูลสินค้า QC">
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Stack direction='row' justifyContent='space-between'>
                        <Stack direction='row'></Stack>
                    </Stack>
                </Grid>
            </Grid>
        </AuthenticatedLayout>
    )
}