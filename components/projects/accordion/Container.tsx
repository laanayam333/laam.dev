interface IProps {
  children: React.ReactNode;
}

const AccordionContainer = ({ children }: IProps) => {
  return <div className="divide-y divide-stone-300">{children}</div>;
};

export default AccordionContainer;
