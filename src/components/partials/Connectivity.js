import React from 'react'
import styled from '@emotion/styled'
import { CONNECTION } from 'const'
import { Translate, translate } from 'locale/'
import useGlobalState from 'components/hooks/useGlobalState'
import { reconnect } from 'store/server'

export default function Connectivity() {
    const [{ connection, connection_trys }] = useGlobalState('connection')
    // OPEN
    if (connection === CONNECTION.OPEN) {
        return null
    }
    // CONNECTING
    if (connection === CONNECTION.CONNECTING) {
        return (
            <ConnectivityContainer>
                <ConnectivityContainerMessage>
                    <Translate>Connecting...</Translate>
                </ConnectivityContainerMessage>
            </ConnectivityContainer>
        )
    }
    // CLOSE
    return (
        <ConnectivityContainer onClick={reconnect}>
            <ConnectivityContainerError>
                {translate(
                    // eslint-disable-next-line
                    'We have lost the connection with the server. Reconnecting in ${seconds}...',
                    { seconds: connection_trys }
                )}
                &nbsp;&nbsp;&nbsp;
                <ReconnectButton>
                    <Translate>Click to reconnect.</Translate>
                </ReconnectButton>
            </ConnectivityContainerError>
        </ConnectivityContainer>
    )
}

const ConnectivityContainer = styled.div`
    background-color: grey;
    position: absolute;
    z-index: 1;
    width: 100%;
    box-shadow: 0px 2px 0 rgba(0, 0, 0, 0.1);

    text-align: center;
    font-size: 14px;
    color: white;
`

const ConnectivityContainerMessage = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 0;
`

const ConnectivityContainerError = styled.div`
    background-color: #d44339;
    width: 100%;
    height: 100%;
    padding: 10px 0;
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
