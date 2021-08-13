import styled from 'styled-components';

export const HeaderArea = styled.div`

    background-color:#FFF;
    height: 60px;
    border-bottom: 1px solid #CCC;

    a {
        text-decoration: none;
    }

    .container {
        max-width:1280px;
        margin:auto;
        display:flex;
    }
    .logo {
        flex:1;
        display:flex;
        align-items:center;
        height:60px;

        .let1, .let2, .let3 {
            font-size:27px;
            font-weight:bold;
        }
        .let1 {
            color: #FF0000;
        }
        .let2 {
            color: #00FF00;
        }
        .let3 {
            color: #0000FF;
        }
    }
    nav {
        padding-top: 10px;
        padding-bottom: 10px;
        
        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;

        }
        ul {
            display: flex;
            align-items:center;
            height:40px;
        }
        li {
            margin-left: 20px;
            margin-right: 20px;

            a, button {
                color:#000;
                font-size: 14px;
                border: 0;
                background:none;
                outline: none;
                cursor: pointer;

                &:hover {
                    color:#666;
                }
                &.button {
                    background-color: #00DD00;
                    padding: 7px 12px;
                    border-radius: 5px;
                    color: #FFF;
                    box-shadow: 0px 0px 5px 1px rgba(50, 50, 50, 0.3);
                }
                &.button:hover {
                    background-color: #00EE00;
                }
            }
        }
    }
`;