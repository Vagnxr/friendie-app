import React, { useState, useEffect } from "react";
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
import LogoFriendie from '../../assets/logo.png';

const Header: React.FC = () => {
  const [timer, setTimer] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setTimer("bateu");
    }, 10000);
  }, [timer]);

  return (
    <Container>
      <Line>
        <Box>
          <img
            alt="Logo"
            src={LogoFriendie}
          />
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
              <p>Home</p>
            </span>
            <span>
              <p>Media</p>
            </span>
            <span>
              <p>Social Media</p>
            </span>
          </Menu>
        </Box>
      </Line>

      <Footer>{timer && <p>{timer}</p>}</Footer>
    </Container>
  );
};

export default Header;
