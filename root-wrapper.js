import React from 'react'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    h1 {
        color: red;
    }

`
export const wrapRootElement = ({ element }) => {
    return (
        <>
            <GlobalStyle />
            {element}
        </>
    )
}