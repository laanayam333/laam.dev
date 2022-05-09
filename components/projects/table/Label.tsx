interface IProps {
  children: React.ReactNode;
}

const Label = ({ children }: IProps) => {
  return (
    <div className="col-span-1 text-right text-base text-stone-500">
      {children}
    </div>
  );
};

export default Label;
