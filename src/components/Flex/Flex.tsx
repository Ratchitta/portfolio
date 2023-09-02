import { Box, BoxProps } from "@mui/material";

type FlexProps = BoxProps & {};

const defaultProps: FlexProps = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "100%",
  height: "100%",
  p: 0,
  m: 0,
};

const Flex = (props: BoxProps) => {
  const { children, ...restProps } = props;
  const newProps = { ...defaultProps, ...restProps };

  return (
    <Box display="flex" {...newProps}>
      {children}
    </Box>
  );
};

export default Flex;
export type { FlexProps };
