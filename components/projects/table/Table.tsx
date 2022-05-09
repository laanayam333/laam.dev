interface IProps {
  children: React.ReactNode;
}

const Table = ({ children }: IProps) => {
  return (
    <ul role="list" className="divide-y divide-stone-300">
      {children}
    </ul>
  );
};

export default Table;
