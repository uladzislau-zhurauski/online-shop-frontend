import { styled } from "@mui/material/styles";

export const NoImageStyled = styled("img")(
  ({ theme }) => `
        max-width: 100%;
        height: auto;
        border-radius: ${theme.shape.borderRadius * 3}px;
    `
);
