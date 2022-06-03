import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const OrderButtonStyled = styled(Button)(
  ({ theme }) => `
        color: ${theme.palette.primary.main};
        background-color: ${theme.palette.secondary.main};
        font-size: 1.2rem;
        font-weight: ${theme.typography.fontWeightBold};
        transition: all 0.5s;
        &:hover {
            background-color: ${theme.palette.secondary.main};
            filter: brightness(90%);
        }
    `
);
