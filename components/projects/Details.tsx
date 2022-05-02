import Label from '@/components/projects/table/Label';
import Value from '@/components/projects/table/Value';
import CellContainer from '@/components/projects/table/CellContainer';
import Table from '@/components/projects/table/Table';

interface IProps {
  year: number;
  role: string;
  client: string;
}

const Details = ({ year, role, client }: IProps) => {
  return (
    <Table>
      {year && (
        <CellContainer>
          <Value>{year}</Value>
          <Label>Year</Label>
        </CellContainer>
      )}
      {role && (
        <CellContainer>
          <Value>{role}</Value>
          <Label>Role</Label>
        </CellContainer>
      )}
      {client && (
        <CellContainer>
          <Value>{client}</Value>
          <Label>Client</Label>
        </CellContainer>
      )}
    </Table>
  );
};

export default Details;
