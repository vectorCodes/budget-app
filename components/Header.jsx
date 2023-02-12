import React from "react";
import { Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <div>
      <Heading size={"lg"} display={{ base: "none", md: "block" }}>
        My Budget Planner
      </Heading>
      <Heading
        size={"lg"}
        textAlign="center"
        display={{ base: "block", md: "none" }}
      >
        My Budget Planner
      </Heading>
    </div>
  );
};

export default Header;
