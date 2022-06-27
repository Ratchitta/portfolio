import { Typography, TypographyProps, BoxProps } from "@mui/material";

type TextProps = TypographyProps & BoxProps;

const Text = (props: TextProps) => <Typography {...props} />;

export default Text;
