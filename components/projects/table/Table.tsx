interface IProps {
  children: React.ReactNode;
}

const Table = ({ children }: IProps) => {
  return (
    <ul role="list" className="divide-y divide-neutral-200">
      {children}
    </ul>
  );
};

export default Table;
