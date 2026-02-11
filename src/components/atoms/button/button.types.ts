export type ButtonProps = {
    title: string;
    backgroundColor?: string;
    textColor?: string;
    link?: string;
    target?: "_blank" | "_self";
    onClick?: () => void;
  };