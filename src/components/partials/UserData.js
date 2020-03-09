import React from 'react'
import styled from '@emotion/styled'

export default function UserData({ username }) {
    return (
        <Container>
            <Background />
            <Content>
                {/* <Left>a</Left> */}
                <Right>
                    <Username>{username}</Username>
                    <Progress progress={50}>
                        <ProgressBar />
                    </Progress>
                </Right>
                <Settings />
            </Content>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-width: 210px;
    height: 65px;
    right: -10px;
`

const Background = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    background: linear-gradient(to bottom, #181818 0%, #000 100%);
    height: 100%;
    width: 100%;
    box-shadow: -5px 5px rgba(0, 0, 0, 0.1);
    transform: skewX(20deg);
    border-radius: 2px;
`

const Content = styled.div`
    position: relative;
    color: white;
    font-weight: bold;
    display: flex;
    flex: 1;
    padding: 10px 25px 15px 25px;
`

// const Left = styled.div`
//     background: red;
// `
const Right = styled.div`
    /* background: blue; */
    flex: 1;
`

const Username = styled.div`
    font-size: 18px;
`
const Progress = styled.div`
    height: 10px;
    background: #302a22;
    width: 100%;
`

const ProgressBar = styled.div`
    height: 100%;
    background: linear-gradient(
        to bottom,
        #98846d 0%,
        #98846d 50%,
        #8e785e 51%,
        #8e785e 100%
    );
    width: 30%;
`

const Settings = styled.div`
    position: absolute;
    right: 15px;
    background: url(/assets/img/settings.png) top right / 100% 100%;
    width: 20px;
    height: 20px;
    top: 5px;
`
