import { ReactNode, FunctionComponent } from "react";

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-5 max-w-screen-sm">{children}</div>
  );
};

export default Container;
