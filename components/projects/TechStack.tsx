import Label from '@/components/projects/table/Label';
import Value from '@/components/projects/table/Value';
import CellContainer from '@/components/projects/table/CellContainer';
import Table from '@/components/projects/table/Table';

interface IProps {
  frontend: string;
  css: string;
  animation: string;
  cms: string;
  hosting: string;
}

const TechStack = ({ frontend, css, animation, cms, hosting }: IProps) => {
  return (
    <Table>
      {frontend && (
        <CellContainer>
          <Value>{frontend}</Value>
          <Label>Frontend</Label>
        </CellContainer>
      )}
      {css && (
        <CellContainer>
          <Value>{css}</Value>
          <Label>Styling</Label>
        </CellContainer>
      )}
      {cms && (
        <CellContainer>
          <Value>{cms}</Value>
          <Label>CMS</Label>
        </CellContainer>
      )}
      {animation && (
        <CellContainer>
          <Value>{animation}</Value>
          <Label>Animation</Label>
        </CellContainer>
      )}
      {hosting && (
        <CellContainer>
          <Value>{hosting}</Value>
          <Label>Hosting</Label>
        </CellContainer>
      )}
    </Table>
  );
};

export default TechStack;
