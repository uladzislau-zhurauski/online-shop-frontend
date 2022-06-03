import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

export const ToolBarStyled = styled(Toolbar)(
  ({ theme }) => `
        background: linear-gradient(180deg, 
                                    rgba(216, 249, 241, 0.15) 0%, 
                                    rgba(157, 237, 218, 0.69) 45.97%, 
                                    rgba(216, 249, 241, 0.15) 100%);
        display: flex;
        justify-content: center;
        border-top: 1px solid ${theme.palette.primary.main};
        border-bottom: 1px solid ${theme.palette.primary.main};
    `
);

export const IconRow = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;
