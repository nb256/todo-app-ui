import Link from "./Link";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
  align-items: center;
`;

export default function TodoFilters({
  currentFilter,
  setCurrentFilter,
}: {
  currentFilter: string;
  setCurrentFilter: Function;
}) {
  return (
    <Container>
      Show:
      {currentFilter === "ALL" ? (
        <b>All</b>
      ) : (
        <Link
          onClick={() => {
            setCurrentFilter("ALL");
          }}
          content="All"
        />
      )}
      {currentFilter === "COMPLETED" ? (
        <b>Completed</b>
      ) : (
        <Link
          onClick={() => {
            setCurrentFilter("COMPLETED");
          }}
          content="Completed"
        />
      )}
      {currentFilter === "UNCOMPLETED" ? (
        <b>Incompleted</b>
      ) : (
        <Link
          onClick={() => {
            setCurrentFilter("UNCOMPLETED");
          }}
          content="Incompleted"
        />
      )}
    </Container>
  );
}
