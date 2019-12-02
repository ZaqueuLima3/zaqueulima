import React from "react"
import PropTypes from "prop-types"

import SideBar from "../SideBar"

import GloabalStyle from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <>
      <GloabalStyle />
      <SideBar />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
