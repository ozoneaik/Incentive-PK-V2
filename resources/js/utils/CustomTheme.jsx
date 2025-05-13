// theme.js
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const getDesignTokens = () => {
    const theme = createTheme(); // สร้างธีมชั่วคราวเพื่อเข้าถึง theme.palette

    return createTheme({
        palette: {
            pumpkin: theme.palette.augmentColor({
                color: {
                    main: '#fd7e14',
                    light: '#fd7e14',
                },
                name: 'pumpkin',
            }),
            greyColor: {
                light: grey[300],
                main: grey[700],
                dark: '#252525',
                contrastText: '#eaeaea',
            },
        },
    });
};

export const theme = getDesignTokens();
