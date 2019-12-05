import React from "react"
import PropTypes from "prop-types"

import SideBar from "../SideBar"

import GloabalStyle from "../../styles/global"
import * as S from "./styles"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GloabalStyle />
      <SideBar />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
