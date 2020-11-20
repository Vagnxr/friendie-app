import React from "react";
import { Container, Card, Column } from "./styles";
import Logo from "../../assets/logo.png";

const Home: React.FC = () => {
  return (
    <Container>
      <Column>
        <Card>
        <span>
          <label>FRIENDIE</label>
          </span>
          <h1>Lil Smoke</h1>
          <img alt="Logo" src={Logo} />
        </Card>

        <Card>
        <span>
          <label>FRIENDIE</label>
          </span>
          <h1>Herculano</h1>
          <img alt="Logo" src={Logo} />
        </Card>
      </Column>
      <Column>
        <Card>
          <span>
          <label>FRIENDIE</label>
          </span>
          <h1>Maiws</h1>
          <img alt="Logo" src={Logo} />
        </Card>

        <Card>
          <span>
            <label>FRIENDIE</label>
          </span>
          <h1>Lil Featured</h1>
          <img alt="Logo" src={Logo} />
        </Card>
      </Column>
      <Column>
        <Card>
          <span>
            <label>FRIENDIE</label>
          </span>
          <h1>Gang</h1>
          <img alt="Logo" src={Logo} />
        </Card>

        <Card>
          <span>
            <label>FRIENDIE</label>
          </span>
          <h1>Gang</h1>
          <img alt="Logo" src={Logo} />
        </Card>
      </Column>
    </Container>
  );
};

export default Home;
