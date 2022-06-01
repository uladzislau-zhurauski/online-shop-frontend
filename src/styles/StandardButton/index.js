import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";


const StandardButton = styled(Button)(
    ({ theme }) => `
        color: ${theme.palette.primary.main};
        background-color: ${theme.palette.secondary.main};
        transition: all 0.5s;
        &:hover {
            background-color: ${theme.palette.secondary.main};
            filter: brightness(90%);
        }
    `
);

export default StandardButton;
