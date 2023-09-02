import { Box, BoxProps } from "@mui/material";

type ImageProps = BoxProps & { src: string };

const Image = (props: ImageProps) => {
  const { src, ...restProps } = props;
  return <Box component="img" src={src} {...restProps}></Box>;
};

export default Image;
export type { ImageProps };
