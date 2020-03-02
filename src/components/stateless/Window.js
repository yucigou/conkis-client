import React from 'react'
import styled from '@emotion/styled'

export default function Window({
    title = '',
    width = '100%',
    height = '100%'
}) {
    return (
        <Container width={width} height={height}>
            <Container2>
                <WoodBackground />
                <Header />
                <Content>
                    <Title>{title}</Title>
                </Content>
            </Container2>
        </Container>
    )
}

const Container = styled.div`
    width: ${p => p.width};
    height: ${p => p.height};
    background: url('/assets/img/window-left.png') no-repeat 0 5% / auto 100%,
        url('/assets/img/window-right.png') no-repeat right 5% / auto 100%;
`
const Container2 = styled.div`
    margin: 0 6%;
    box-sizing: content-box;
    background: red;
    height: calc(100% - 0.6em);
    border-radius: 10px;
    background: #684f40;
    background: linear-gradient(135deg, #816850 0%, #573f34 100%);
    border: 0.3em solid;
    position: relative;
    overflow: hidden;
`

const WoodBackground = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background: url('/assets/img/wood-pattern.png') repeat 0 0 / 100%;
    opacity: 0.1;
`

const Header = styled.div`
    height: 30%;
    width: 152%;
    position: absolute;
    top: -28px;
    left: -20px;
    background: black;
    transform: rotate(5deg);
`

const Content = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`

const Title = styled.div`
    /* text-align: center; */
    font-size: 30px;
    font-family: 'Nougata';
    color: white;
    /* margin-top: 12px; */
    height: 20%;
    /* line-height: 20%; */
    display: flex;
    justify-content: center;
    align-items: center;
`
