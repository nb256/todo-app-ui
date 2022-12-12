import { useCallback, useEffect, useState } from "react";

import request from "../utils/request";
import { API_TODOS_URL } from "../constants/api";
import { Todo } from "../types/Todo";
import useAuth from "./useAuth";

export default function useTodos() {
  const { jwtToken } = useAuth();
  const [todos, setTodos] = useState([] as Todo[]);

  const fetchTodos = useCallback(async () => {
    request<Todo[]>(API_TODOS_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }).then((response) => {
      setTodos(response);
    });
  }, [jwtToken]);

  useEffect(() => {
    fetchTodos();
  }, [jwtToken, fetchTodos]);

  const refetch = () => {
    fetchTodos();
  };

  return { todos, refetch };
}
