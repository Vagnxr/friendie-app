import React, { useState } from "react";
import {
  Container,
  Box,
  Line,
  Footer,
  List,
  Input,
  Popup,
  Menu,
} from "./styles";
import { Link } from "react-router-dom";
import { FiAlignRight, FiHeadphones, FiSearch } from "react-icons/fi";
import LogoFriendie from "../../assets/logo.png";
import moment from 'moment';

const Header: React.FC = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const date = moment.utc().format('LL');

  return (
    <Container>
      <Line>
        <Box>
          <img alt="Logo" src={LogoFriendie} />
        </Box>

        <Box className="menu">
          <List>
            <Link to="/">Home</Link>
            <Link to="/media">Media</Link>
            <Link to="/social-media">Social Media</Link>
          </List>
        </Box>

        <Box className="input" flex="0 1 50%">
          <Input placeholder="Pesquisar" type="text" />
          <FiSearch
            onClick={() => {
              setShowInput((r) => !r);
            }}
            size={30}
          />

          {showInput && (
            <Popup>
              <Input placeholder="Pesquisar" />
            </Popup>
          )}
        </Box>

        <Box justifyContent="center" flex="1">
          <FiHeadphones size={30} />
        </Box>

        <Box justifyContent="center" flex="1">
          <FiAlignRight
            onClick={() => {
              setShowMenu((r) => !r);
            }}
            size={30}
          />
            <Menu active={showMenu}>
              <span>
                <Link to="/">Home</Link>
              </span>
              <span>
                <Link to="/media" >Media</Link>
              </span>
              <span>
                <Link to="social-media">Social Media</Link>
              </span>
            </Menu>
        </Box>
      </Line>

      <Footer><p>{date}</p></Footer>
    </Container>
  );
};

export default Header;
