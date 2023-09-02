type TextProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: string | number;
} & React.HTMLAttributes<HTMLParagraphElement>;

const Text = (props: TextProps) => {
  const { variant = "p", children, ...restProps } = props;

  const content = typeof children === "string" ? children : children.toString();

  switch (variant) {
    case "h1":
      return <h1 {...restProps}>{content}</h1>;
    case "h2":
      return <h2 {...restProps}>{content}</h2>;
    case "h3":
      return <h3 {...restProps}>{content}</h3>;
    case "h4":
      return <h4 {...restProps}>{content}</h4>;
    case "h5":
      return <h5 {...restProps}>{content}</h5>;
    case "h6":
      return <h6 {...restProps}>{content}</h6>;
    case "p":
    default:
      return <p {...restProps}>{content}</p>;
  }
};

export default Text;
export type { TextProps };
