import { Input, Button, Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react";
import { useLogin } from "../../../Hooks/useLogin";

export const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { loading, error, login } = useLogin();
  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        size={"sm"}
        type="email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />

      <Input
        placeholder="Password"
        fontSize={14}
        size={"sm"}
        type="password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      {error && (
        <Alert status="error" fontSize={13} borderRadius={4} >
          <AlertIcon fontSize={12} />
          {"Invalid login credentials"}
        </Alert>
      )}
      <Button
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
        isLoading={loading}
        onClick={() => login(inputs)}
      >
        Log in
      </Button>
    </>
  );
};
