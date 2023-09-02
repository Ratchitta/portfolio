import { Typography, TypographyProps } from "@mui/material";

type TextProps = {} & TypographyProps;

const Text = (props: TextProps) => {
  return <Typography {...props} />;
};

export { Text };
export type { TextProps };
