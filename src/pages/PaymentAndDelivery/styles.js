import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

export const DividerStyled = styled(Divider)(
  ({ theme }) => `
        width: 107%;
        margin-top: 3rem;
        background-color: ${theme.palette.primary.main};
        align-self: center;
    `
);
