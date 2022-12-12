import { Checkbox, FormControlLabel } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";

import useMarkTodoCompleted from "../hooks/useMarkTodoCompleted";
import useMarkTodoUncompleted from "../hooks/useMarkTodoUncompleted";

const Container = styled.div`
  display: block;
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

  return (
    <Container>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange} />}
        label={title}
      />
    </Container>
  );
}
