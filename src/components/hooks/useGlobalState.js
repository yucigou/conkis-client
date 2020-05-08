import { useState, useEffect } from 'react'
import { store, setGlobalState } from 'store/'

export default function useGlobalState(...props) {
    const [, forceUpdate] = useState()
    useEffect(() => {
        const filter =
            typeof props[0] === 'function'
                ? props[0]
                : ({ path }) => props.includes(path.join('.'))
        return store.subscribe(forceUpdate, filter)
    }, [props])
    return [store.state, setGlobalState]
}
