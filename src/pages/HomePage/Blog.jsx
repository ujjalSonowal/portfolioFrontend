import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  position: absolute;
  top: 70px;
  margin: 30px;
`;

export function Blog() {
  return (
    <MainContainer>
      <p>Nothing to show!</p>
    </MainContainer>
  );
}

export default Blog;
