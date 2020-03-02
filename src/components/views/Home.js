import React from 'react'
import styled from '@emotion/styled'
import ButtonBig from 'components/stateless/ButtonBig'

export default function Home() {
    return (
        <Container>
            <Background />
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
                <Middle>
                    <Tutorial>
                        <ButtonBig title="Tutorial" />
                    </Tutorial>
                    <Tutorial>
                        <ButtonBig title="Normal" />
                    </Tutorial>
                    <Tutorial>
                        <ButtonBig title="Ranked" />
                    </Tutorial>
                </Middle>
                <Footer></Footer>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(246, 216, 208);
    background: radial-gradient(
        circle,
        rgba(246, 236, 219, 0.9) 0%,
        rgba(246, 236, 219, 0) 100%
    );
`

const Background = styled.div`
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('/assets/img/weaponsbg.png') 0 0 / auto 200px;
    opacity: 0.1;
    animation: AnimationName 20s linear infinite;

    @keyframes AnimationName {
        0% {
            background-position: 0 200px;
        }
        100% {
            background-position: 0 0;
        }
    }
`

const Top = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 30px;
    background: black;
`

const Bottom = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    background: black;
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
    /* background: blue; */
`

const Middle = styled.div`
    flex: 1;
    /* background: red; */
    display: flex;
    justify-content: center;
    align-items: center;
`

const Footer = styled.div`
    /* background: green; */
    width: 100%;
    height: 50px;
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
    margin-left: 10px;
`

const Tutorial = styled.div`
    width: 200px;
    height: 50px;
    margin: 0 10px;
`
