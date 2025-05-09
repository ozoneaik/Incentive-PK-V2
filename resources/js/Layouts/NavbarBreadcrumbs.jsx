import { NavigateNextRounded } from "@mui/icons-material";
import { Breadcrumbs, breadcrumbsClasses, Stack, styled, Typography } from "@mui/material";

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
    margin: theme.spacing(1, 0),
    [`& .${breadcrumbsClasses.separator}`]: {
        color: (theme.vars || theme).palette.action.disabled,
        margin: 1,
    },
    [`& .${breadcrumbsClasses.ol}`]: {
        alignItems: 'center',
    },
}));

const NavbarBreadcrumbStack = {
    display: { xs: 'none', md: 'flex' },
    width: '100%',
    alignItems: { xs: 'flex-start', md: 'center' },
    justifyContent: 'space-between',
    maxWidth: { sm: '100%', md: '1700px' },
    pt: 1.5,
}

export default function NavbarBreadcrumbs({ breadcrumbs }) {
    return (
        <Stack direction="row" sx={NavbarBreadcrumbStack} spacing={2} >
            <StyledBreadcrumbs
                aria-label="breadcrumb"
                separator={
                    <NavigateNextRounded fontSize="small" />
                }
            >
                {breadcrumbs.map((item, index) => (
                    <Typography variant="body1" key={index}
                        sx={breadcrumbs.length - 1 === index ? {
                            color: 'text.primary', fontWeight: 600
                        } : {color : 'text.secondary'}}
                    >
                        {item.label}
                    </Typography>
                ))}
            </StyledBreadcrumbs>
        </Stack>
    );
}