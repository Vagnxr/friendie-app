import React from "react";
import { Container, Box, Line, Footer, List } from "./styles";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <Container>
      <Line>
        <Box>
          <img alt="Logo" src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-built_knockout.png?hl=pt-br" />
        </Box>

        <Box>
          <List>
            <Link to="/">Home</Link>
            <Link to="/media">Media</Link>
            <Link to="/social-media">Social Media</Link>
          </List>
        </Box>
      </Line>

      <Footer>
        <p>dec. 21</p>
      </Footer>
    </Container>
  );
};

export default Header;
