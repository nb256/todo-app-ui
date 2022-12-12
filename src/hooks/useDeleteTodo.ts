import { API_TODOS_URL } from "../constants/api";
import { Todo } from "../types/Todo";
import request from "../utils/request";
import useAuth from "./useAuth";

export default function useDeleteTodo() {
  const { jwtToken } = useAuth();

  const deleteTodo = async (id: number) => {
    const response = await request<Todo>(API_TODOS_URL + "/delete", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    return response;
  };

  return deleteTodo;
}
