interface IProps {
  children: React.ReactNode;
}

const AccordionContainer = ({ children }: IProps) => {
  return <div className="divide-y divide-neutral-200">{children}</div>;
};

export default AccordionContainer;
