import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import tick from "../assets/tick.svg";
import Icon from "../components/Icon";
import Input from "../components/Input";
import Title from "../components/Title";
import useAuth from "../hooks/useAuth";
import { default as TodosComponent } from "../components/Todos";
import useTodos from "../hooks/useTodos";
import useAddTodo from "../hooks/useAddTodo";
import TodoFilters from "../components/TodoFilters";

const Container = styled.div`
  width: 390px;
  padding: 35px 30px 63px;
  margin: 0 auto;
  margin-top: 33px;
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export default function Todos() {
  const [title, setTitle] = useState("");
  const [currentFilter, setCurrentFilter] = useState<
    "ALL" | "COMPLETED" | "UNCOMPLETED"
  >("ALL");

  const { jwtToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwtToken) {
      navigate("/login");
    }
  }, [jwtToken, navigate]);

  const { todos, refetch } = useTodos();
  const addTodo = useAddTodo();

  const handleAddTodo = async () => {
    const { id } = await addTodo(title);

    if (id) {
      setTitle("");
      refetch();
    }
  };

  return (
    <Container>
      <Icon src={tick} />
      <Title content="Todo List" />
      <br />
      <Input
        placeholder="Add a new todo"
        onChange={(event) => setTitle(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleAddTodo();
          }
        }}
        value={title}
      />
      <br />
      <TodosComponent todos={todos} currentFilter={currentFilter} />
      <br />
      <TodoFilters
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
    </Container>
  );
}
