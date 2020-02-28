import React from 'react'
import TextShadow from 'components/stateless/TextShadow'
import TextBorder from 'components/stateless/TextBorder'
import ButtonBig from 'components/stateless/ButtonBig'

export default function App() {
    return (
        <div>
            <TextShadow title="Enzo" />
            {/* <TextShadow2 title="Eñzó" /> */}
            <TextShadow
                title="Enzo"
                fontSize="100px"
                borderSize="2.5px"
                shadowTop="7px"
            />
            <TextBorder title="Juandi" />
            <TextBorder title="Coypu" color="red" />
            <ButtonBig title="Ranked" />
        </div>
    )
}
