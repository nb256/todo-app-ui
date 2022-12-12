import { API_TODOS_URL } from "../constants/api";
import { Todo } from "../types/Todo";
import request from "../utils/request";
import useAuth from "./useAuth";

export default function useAddTodo() {
  const { jwtToken } = useAuth();

  const addTodo = async (title: string) => {
    const response = await request<Todo>(API_TODOS_URL + "/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    return response;
  };

  return addTodo;
}
