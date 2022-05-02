interface IProps {
  children: React.ReactNode;
}

const CellContainer = ({ children }: IProps) => {
  return (
    <li className="grid grid-cols-3 place-content-center items-center gap-x-3 py-3">
      {children}
    </li>
  );
};

export default CellContainer;
