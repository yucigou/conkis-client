import React from 'react'
import styled from '@emotion/styled'
import { Translate } from 'store/'

export default function Connectivity() {
    const n = 2
    return (
        <ConnectivityContainer>
            <Translate>
                We have lost the connection with the server. Reconnecting in ...
            </Translate>
            &nbsp;&nbsp;&nbsp;
            <ReconnectButton>
                <Translate>Click to reconnect.</Translate>
            </ReconnectButton>
        </ConnectivityContainer>
    )
}

const ConnectivityContainer = styled.div`
    background-color: #d44339;
    position: absolute;
    z-index: 1;
    width: 100%;
    font-size: 14px;
    color: white;
    padding: 10px 0;
    text-align: center;
    box-shadow: 0px 2px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &:hover {
        background-color: #f44339;
    }
    &:active {
        text-decoration: none;
    }
`

const ReconnectButton = styled.span`
    color: white;
    text-decoration: underline;
    opacity: 0.7;
`
