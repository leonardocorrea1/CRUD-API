import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

* {
    margin: 0;
    padding: 0:
    font-family: 'Arial', Helvetica;
}


body {
    width: 100vw;
    height: 100vw;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
}
`;

export default Global