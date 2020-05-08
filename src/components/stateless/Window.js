import React from 'react'
import styled from '@emotion/styled'
import ButtonClose from 'components/stateless/ButtonClose'

export default function Window({
    title = '',
    width = 'auto',
    height = 'auto',
    minWidth = 'auto',
    minHeight = 'auto',
    children,
}) {
    return (
        <BackgroundWood
            width={width}
            height={height}
            minWidth={minWidth}
            minHeight={minHeight}
        >
            <Container minWidth={minWidth} minHeight={minHeight}>
                <BackgroundPattern />
                <Header />
                <Content>
                    <Title>{title}</Title>
                    {children}
                </Content>
            </Container>
            <Close>
                <ButtonClose>
                    <CloseIcon src="/assets/img/close.png" />
                </ButtonClose>
            </Close>
        </BackgroundWood>
    )
}

const BackgroundWood = styled.div`
    position: relative;
    width: ${(p) => p.width};
    height: ${(p) => p.height};
    min-width: ${(p) => p.minWidth};
    min-height: ${(p) => p.minHeight};
    background: url('/assets/img/window-left.png') no-repeat 0 5% / auto 100%,
        url('/assets/img/window-right.png') no-repeat right 5% / auto 100%;
`

const Container = styled.div`
    height: calc(100% - 0.6em);
    min-width: ${(p) => p.minWidth};
    min-height: ${(p) => p.minHeight};
    margin: 0 30px;
    box-sizing: content-box;
    background: red;
    border-radius: 10px;
    background: #684f40;
    background: linear-gradient(135deg, #816850 0%, #573f34 100%);
    border: 0.3em solid;
    position: relative;
    overflow: hidden;
`

const BackgroundPattern = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background: url('/assets/img/wood-pattern.png') repeat 0 0 / 100%;
    opacity: 0.1;
`

const Header = styled.div`
    height: 120px;
    width: 152%;
    position: absolute;
    top: -28px;
    left: -20px;
    background: black;
    transform: rotate(3.5deg);
`

const Content = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
`

const Title = styled.div`
    text-align: center;
    padding-top: 25px;
    font-size: 30px;
    font-family: 'Nougat';
    color: white;
    height: 100px;
    /* line-height: 20%; */
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
`

const Close = styled.div`
    width: 70px;
    height: 60px;
    position: absolute;
    right: 10px;
    top: -20px;
    transform: rotate(15deg) scale(0.5);
`

const CloseIcon = styled.img`
    height: 35px;
`
