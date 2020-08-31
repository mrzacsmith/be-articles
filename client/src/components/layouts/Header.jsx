import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <MainContainer>
      <h1>
        Welcome to the <br />
        MERN Stack Blog
      </h1>
    </MainContainer>
  )
}

export default Header

const MainContainer = styled.div`
  background: url(../../images/header-bg.jpg) no-repeat center/cover;
  height: 25rem;
  h1 {
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-weight: 900;
    position: absolute;
    top: 20%;
    left: 50%;
  }
`
