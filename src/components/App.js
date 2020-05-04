import React from 'react'
import Connectivity from 'components/partials/Connectivity'
import Home from 'components/views/Home'
import Login from 'components/views/Login'
import Overlay from 'components/stateless/Overlay'

export default function App() {
    return (
        <>
            <Connectivity />
            <Home />
            {false && (
                <Overlay>
                    <Login />
                </Overlay>
            )}
        </>
    )
}
