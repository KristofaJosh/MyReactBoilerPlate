import React from "react";
import styled from "styled-components";
import { backgroundColor, textColor } from "../../../constants/theme/styles";

const MainTemplate = ({ Remove100VhAttribute, children }) => {
  return (
    <Styling variant={"primary"} Remove100VhAttribute={Remove100VhAttribute}>
      {children}
    </Styling>
  );
};

const Styling = styled.div`
  width: 100%;
  color: ${textColor};
  background-color: ${backgroundColor};
  height: ${(props) => (props.Remove100VhAttribute ? "100vh" : null)};
`;

export default MainTemplate;
