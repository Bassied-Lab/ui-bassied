import { Button, Container, Flex, Select } from "@mantine/core";
import { useState } from "react";
import { StyledDiv } from "./styled";
import { MdKeyboardArrowDown, MdLanguage } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
export const Home = () => {
  const [language, setLanguage] = useState<string | null>("az");

  return (
    <StyledDiv>
      <Container size="xl" className="navbar">
        <Select
          radius="xl"
          className="languageSelect"
          size="xs"
          value={language}
          onChange={setLanguage}
          data={[
            { label: "AZ", value: "az" },
            { label: "EN", value: "en" },
            { label: "RU", value: "ru" },
          ]}
          icon={<GrLanguage />}
          rightSection={<MdKeyboardArrowDown />}
        />
        <p>dsdsd</p>
      </Container>
    </StyledDiv>
  );
};
