import React, {useState} from "react";
import SignOutButton from "../SignOut";
import { Link } from "react-router-dom";
import MainViewLink from "../Link/MainViewLink";
import styled from "styled-components";


const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) =>
      open ? "black" : "white"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #f0f0f0;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
const AdminMenu = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className="admin__menu">
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Ul open={open}>
        <li>
          <Link to="/admin">
            <button className="nav">Plan zajęć</button>
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/users">
            <button className="nav">Użytkownicy</button>
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/admin-info">
            <button className="nav">Ogłoszenia</button>
          </Link>
        </li>
        <li>
          <MainViewLink />
        </li>
        <li>
          {" "}
          <SignOutButton />
        </li>
      </Ul>
    </div>
  );
};
export default AdminMenu;
