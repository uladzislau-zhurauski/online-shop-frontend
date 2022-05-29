import createTheme from "@mui/material/styles/createTheme";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";
import {MAIN_BACKGROUND_COLOR, MAIN_TEXT_COLOR} from "../consts";

let theme = createTheme({
    palette: {
        primary: {
            main: MAIN_TEXT_COLOR,
        },
        secondary: {
            main: MAIN_BACKGROUND_COLOR,
        },
        text: {
            primary: "rgb(116, 159, 149)",
            secondary: "rgba(116, 159, 149, 0.8)",
        }
    },
});
theme = responsiveFontSizes(theme);

export default theme;
