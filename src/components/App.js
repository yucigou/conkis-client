import React from 'react'
import Home from 'components/views/Home'
import Login from 'components/views/Login'
import Overlay from 'components/stateless/Overlay'

export default function App() {
    return (
        <div>
            <Home />
            <Overlay>
                <Login />
            </Overlay>
        </div>
    )
}
