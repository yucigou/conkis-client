import React from 'react'
import styled from '@emotion/styled'

export default function Home() {
    return (
        <Container>
            <Top />
            <Bottom />
            <Content>
                <Header>
                    <HeaderLeft></HeaderLeft>
                    <HeaderCenter>
                        <Logo src="/assets/img/logo.png" />
                    </HeaderCenter>
                    <HeaderRight></HeaderRight>
                </Header>
                <Middle></Middle>
                {/* <Footer>Hola</Footer> */}
            </Content>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(217, 216, 208);
    background: radial-gradient(
        circle,
        rgba(217, 216, 208, 0.9) 0%,
        rgba(217, 216, 208, 0) 90%
    );
`
const Top = styled.div`
    width: 100%;
    height: 5%;
    background: black;
`

const Bottom = styled.div`
    width: 100%;
    height: 5%;
    background: black;
    bottom: 0;
    position: absolute;
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    flex: 0 1 auto;
`

const Middle = styled.div`
    flex: 1;
`

const Footer = styled.div`
    background: green;
    width: 100%;
    display: flex;
    flex: 0 1 auto;
`

const HeaderLeft = styled.div`
    flex: 1;
`
const HeaderCenter = styled.div`
    flex: 0 1;
    display: flex;
    justify-content: center;
`
const HeaderRight = styled.div`
    flex: 1;
`

const Logo = styled.img`
    width: 125px;
    height: 63px;
`
