import { createTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'
const theme = createTheme({
    typography: {
        useNextVariants: true,
        htmlFontSize: 12
    },
    palette: {
        primary: {
            light: '#6573c3',
            main: '#3f51b5',
            dark: '#2c387e',
            contrastText: '#fff',
        },
        secondary: {
            light: '#f73378',
            main: '#f50057',
            dark: '#ab003c',
            contrastText: '#000',
        },
        openTitle: '#3f4771',
        protectedTitle: pink['400'],
        type: 'light'
    }
})
export default theme