import styled from 'styled-components';

export const Item = styled.div`
    a {
        background-color: #FFF;
        display:block;
        border: 1px solid #FFF;
        margin:10px;
        text-decoration:none;
        padding:10px;
        border-radius:5px;
        color: #000;

        &:hover {
            border: 1px solid #CCC;
        }

        .itemImg img {
            width:100%;
            border-radius:5px;
        }

        .itemName {
            font-weight:bold;
        }
    }
`;