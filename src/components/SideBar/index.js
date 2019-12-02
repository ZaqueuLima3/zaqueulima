import React, { Component } from "react"

import Profile from "../Profile"

import * as S from "./styles"

export default class SideBar extends Component {
  render() {
    return (
      <S.SidebarWrapper>
        <Profile />
      </S.SidebarWrapper>
    )
  }
}
