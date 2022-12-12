import { login as loginAction, signUp as signUpAction } from "../features/auth";

import { useAppDispatch, useAppSelector } from "../store";

export default function useAuth() {
  const loading = useAppSelector((state) => state.auth.loading);
  const error = useAppSelector((state) => state.auth.error);
  const jwtToken = useAppSelector((state) => state.auth.jwtToken);

  const dispatch = useAppDispatch();

  const login = ({ email, password }: { email: string; password: string }) =>
    dispatch(loginAction({ email, password }));

  const signUp = ({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) => dispatch(signUpAction({ email, password, name }));

  return { error, loading, jwtToken, login, signUp };
}
