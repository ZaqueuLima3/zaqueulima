import React, { Component } from "react"

import Profile from "../Profile"
import MenuLinks from "../MenuLinks"
import SocialLinks from "../SocialLinks"
import Search from "../Search"

import * as S from "./styles"

export default class SideBar extends Component {
  render() {
    return (
      <S.SidebarWrapper>
        <Profile />
        <MenuLinks />
        <SocialLinks />
        <Search />
      </S.SidebarWrapper>
    )
  }
}
