import React from 'react'
import styled from '@emotion/styled'
import ButtonPlain from 'components/stateless/ButtonPlain'
import UserData from 'components/partials/UserData'

export default function Header() {
    return (
        <Container>
            <HeaderLeft></HeaderLeft>
            <HeaderCenter>
                <Logo src="/assets/img/logo.png" />
            </HeaderCenter>
            {false && (
                <HeaderRight paddingRight="20px" paddingTop="10px">
                    <ButtonPlain>Login</ButtonPlain>
                </HeaderRight>
            )}
            <HeaderRight>
                <UserData username="Enzo" />
            </HeaderRight>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex: 0 1 auto;
    /* background: blue; */
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
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items: flex-start;
    padding-right: ${p => p.paddingRight || '0'};
    padding-top: ${p => p.paddingTop || '0'};
`

const Logo = styled.img`
    width: 125px;
    height: 63px;
    margin-left: -20px;
`
