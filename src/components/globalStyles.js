import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
 ${reset};
    a{
        text-decoration:none;
        color: inherit;
    }
    *{
        box-sizing:border-box;
        margin:0;
    }
    body{
        font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color:#181818;
        color:white;
        padding: 0;
        
        
        
    }
    #root{
        display:flex;
        justify-content:center;
        
        
        
    }
    
`;

export default GlobalStyles;
