import styled from 'styled-components';

export const SearchArea = styled.div`
    background-color: #ddd;
    border-bottom: #ccc;
    padding: 20px 0;

    .searchBox {
        background-color:#9bb83c;
        padding: 20px 15px;
        border-radius:5px;
        box-shadow: 1px 1px 1px 0.3px rbga(0,0,0,0.2);
        display:flex;
    }

    form {
        flex:1;
        display:flex;

        input, select {
            height: 40px;
            border:0;
            border-radius: 5px;
            outline:0;
            margin-right:20px;
            font-size: 14px;
        }

        input {
            flex:1;
            padding: 0 10px;
        }

        select {
            width:100px;
            background-color: #FFF;
        }
        button {
            background-color: #49AEEF;
            color: #FFF;
            border:0;
            border-radius: 5px;
            cursor: pointer;
            font-size:14px;
            font-weight: bold;
            padding: 0 10px;
        }
    }

    .categoryList {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;

        .categorieItem {
            width:25%;
            display:flex;
            align-items:center;
            color:#000;
            text-decoration: none;
            height: 50px;
            margin-bottom:10px;

            &:hover {
                color:#666;
            }

            img {
                widht:45px;
                height:45px;
                margin-right:10px;

            }
        }
    }
`;
export const PageArea = styled.div`
    .list {
        display:flex;
        flex-wrap: wrap;
    }
    .seeAllLink {
        color:#000;
        text-decoration:none;
        font-weight:bold;
        display:inline-block;
        margin-top:10px;

        &:hover {
            color:#0000FF;
        }
    }
`;