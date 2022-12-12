import { Checkbox, FormControlLabel } from "@mui/material";
import styled from "@emotion/styled/macro";
import { useState } from "react";

import useMarkTodoCompleted from "../hooks/useMarkTodoCompleted";
import useMarkTodoUncompleted from "../hooks/useMarkTodoUncompleted";
import removeIcon from "../assets/remove.svg";
import useDeleteTodo from "../hooks/useDeleteTodo";

const RemoveButton = styled.img`
  width: 32px;
  height: 32px;
  padding: 10px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    ${RemoveButton} {
      display: block;
    }
  }
`;

export default function Todo({
  id,
  title,
  status,
}: {
  id: number;
  title: string;
  status: string;
}) {
  const [checked, setChecked] = useState(status === "COMPLETED");
  const [deleted, setDeleted] = useState(false);

  const markTodoCompleted = useMarkTodoCompleted();
  const markTodoUncompleted = useMarkTodoUncompleted();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setChecked(true);
      markTodoCompleted(id);
    } else {
      setChecked(false);
      markTodoUncompleted(id);
    }
  };

  const deleteTodo = useDeleteTodo();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      deleteTodo(id);
      setDeleted(true);
    }
  };

  if (deleted) {
    return null;
  }

  return (
    <Container>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange} />}
        label={title}
      />
      <RemoveButton src={removeIcon} onClick={handleDelete} />
    </Container>
  );
}
