import React from 'react'
import styled from '@emotion/styled'
import Header from 'components/partials/Header'
import ButtonBig from 'components/stateless/ButtonBig'

export default function Home() {
    return (
        <Container>
            <Background />
            <Top />
            <Bottom />
            <Content>
                <Header />
                <Middle>
                    <Tutorial>
                        <ButtonBig>Tutorial</ButtonBig>
                    </Tutorial>
                    <Tutorial>
                        <ButtonBig>Find Game</ButtonBig>
                    </Tutorial>
                    <Tutorial>
                        <ButtonBig>Ranked</ButtonBig>
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

const Tutorial = styled.div`
    width: 200px;
    height: 50px;
    margin: 0 10px;
`
