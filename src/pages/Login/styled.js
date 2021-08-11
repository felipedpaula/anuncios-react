import styled from 'styled-components';

export const PageArea = styled.div`
    form {
        background-color: #FFF;
        border-radius:5px;
        padding: 20px 10px;
        box-shadow: 0px 0px 5px 1px rgba(50, 50, 50, 0.3);

        .area {
            display:flex;
            align-items:center;
            padding: 10px;
            max-width:500px;

            .area--title {
                width:200px;
                text-align:right;
                padding-right:20px;
                font-weight:bold;
                font-size:14px;
            }
            .area--input {
                flex:1;
                justify-content: start;

                input {
                    width:100%;
                    font-size:14px;
                    padding:5px;
                    border:1px solid #DDD;
                    border-radius:3px;
                    outline:0;
                    transition: all ease .3s;

                    &:focus {
                        border:1px solid #666;
                        color:#333;
                    }
                }

                button {
                    background-color: #0089FF;
                    border:0;
                    outline:0;
                    padding: 7px 12px;
                    border-radius:4px;
                    color: #FFF;
                    font-size: 14px;
                    cursor:pointer;

                    &:hover {
                        background-color: #006FCE;
                    }
                }

            }
        }

    }
`;