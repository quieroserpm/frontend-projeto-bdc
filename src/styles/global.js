import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    //font-family: 'Roboto Slab', serif;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    //font-family: 'Roboto Slab', serif;
    font-size: 14px;
    background: #7159c1;
    //background-color: transparent;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}

html, body, #root {
    height: 100%;
}

h1 {
    text-align: center;
    color: #999;
    font-weight: 700;
    font-size: 40px;
    margin-top: .5rem;
}

h3 {
    text-align: center;
    color: #999;
    margin: .5rem 0;
}

h2 {
    margin: .5rem 0;

}
`;

