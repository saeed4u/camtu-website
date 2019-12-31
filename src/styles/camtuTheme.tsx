import {createMuiTheme} from "@material-ui/core";
import variables from './_variables.scss'

export const camtuTheme = createMuiTheme({
    palette: {
        primary: {
            main: `${variables.primary_color}`
        },
        secondary: {
            main: `${variables.secondary_color}`
        }
    },
    typography: {
        fontFamily: `${variables.font_family}`
    }
})