import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
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
        placeholder="Username"
        fontSize={14}
        size={"sm"}
        type="text"
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <Input
        placeholder="Full Name"
        fontSize={14}
        size={"sm"}
        type="text"
        value={inputs.fullname}
        onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
      />

      <InputGroup>
        <Input
          placeholder="Password"
          fontSize={14}
          size={"sm"}
          type={showPassword ? "text" : "password"}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => {
              setShowPassword(true);
            }}
          >
            {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
           
          >
            Sign up
          </Button>
    </>
  );
};
