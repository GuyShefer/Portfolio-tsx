import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./themes";

type Props = {
    theme: ThemeType
}

export default createGlobalStyle<Props>`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline:0;
    }

    body {
        background: ${({theme}) => theme.body};
        color: ${({ theme }) => theme.text};
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        transition: all 0.25s linear;
    }
`;
