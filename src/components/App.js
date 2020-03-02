import React from 'react'
import Home from 'components/views/Home'
import Window from 'components/stateless/Window'
import Overlay from 'components/stateless/Overlay'

export default function App() {
    return (
        <div>
            <Home />
            <Overlay>
                <Window title="Login" width="500px" height="350px" />
            </Overlay>
        </div>
    )
}
