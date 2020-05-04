import React from 'react'
import styled from '@emotion/styled'

export default function Connectivity() {
    return (
        <ConnectivityContainer>
            We have lost the connection with the server. Reconnecting in
            5...&nbsp;&nbsp;&nbsp;
            <ReconnectButton>Reconnect now.</ReconnectButton>
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
`

const ReconnectButton = styled.span`
    color: white;
    text-decoration: underline;
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
    &:active {
        text-decoration: none;
    }
`
