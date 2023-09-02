import { Typography, TypographyProps } from "@mui/material";
import { Link as ReactLink } from "react-router-dom";

type LinkProps = TypographyProps & {
  to: string;
};

const Link = (props: LinkProps) => {
  const { to, children, ...rest } = props;
  return (
    <Typography {...rest}>
      <ReactLink
        to={to}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        {children}
      </ReactLink>
    </Typography>
  );
};

export default Link;
