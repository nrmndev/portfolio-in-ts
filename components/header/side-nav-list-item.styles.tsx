import { Link } from "react-scroll";
import styled from "styled-components";

export const StyledNavListItem = styled.li`
  list-style: none;
  margin-bottom: 5px;
`;
export const StyledNavLink = styled(Link)`
  list-style: none;
  background-color: #f8f8f8;
  text-decoration: none;
  font-size: 12px;
  text-align: right;
  display: block;
  color: #333 !important;
  border-top-right-radius: 0.625rem;
  padding: 3px 5px;
  margin-top: 5px;
  width: 70px;
  position: relative;
  border-left: 2px solid #f8f8f8;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    width: 80px;
    background: linear-gradient(102deg, #43cea2 0%, #185a9d);
    border-left: 2px solid #fff;
    color: yellow !important;
    cursor: pointer;
    outline: none;
  }
  &.active {
    width: 80px;
    background: linear-gradient(102deg, #43cea2 0%, #185a9d);
    border-left: 2px solid #fff;
    color: yellow !important;
    cursor: pointer;
    outline: none;
  }
`;
