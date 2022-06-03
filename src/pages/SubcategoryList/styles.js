import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

export const CardStyled = styled(Card)(
  ({ theme }) => `
        max-width: 380px;
        border-radius: ${theme.shape.borderRadius * 3}px;
        background-color: ${theme.palette.secondary.main};
        transition: filter 0.5s;
        :hover {
            filter: brightness(85%);
        }
    `
);
