interface IProps {
  children: React.ReactNode;
}

const Value = ({ children }: IProps) => {
  return (
    <div className="col-span-2 place-items-end text-left text-lg text-neutral-900">
      {children}
    </div>
  );
};

export default Value;
