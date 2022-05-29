import {styled} from "@mui/material/styles";


export const BoldText = styled('span')(
    ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
    `,
);

export default BoldText;
