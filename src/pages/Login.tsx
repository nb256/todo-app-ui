import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import Link from "../components/Link";
import tick from "../assets/tick.svg";
import Icon from "../components/Icon";
import Input from "../components/Input";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";

const Container = styled.div`
  width: 390px;
  height: 530px;
  padding: 35px 30px 63px;
  margin: 0 auto;
  margin-top: 33px;
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { jwtToken, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (jwtToken) {
      navigate("/todos");
    }
  }, [jwtToken, navigate]);

  const handleLogin = async () => {
    const { payload } = await login({
      email,
      password,
    });
    if (payload) {
      navigate("/todos");
    }
  };

  return (
    <Container>
      <Icon src={tick} />
      <Title content="Welcome!" />
      <Subtitle content="Log in to continue." />

      <Input
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <Link href="/" content="Don’t have an account? Sign up." />
      <Button label="Log In" onClick={handleLogin} />
    </Container>
  );
}
