import styled from 'styled-components';

export const Fake = styled.div`
    background-color: #DDD;
    height: ${props=>props.height || 20}px;
`;

export const PageArea = styled.div`
    display: flex;
    margin-top: 20px;

    .box {
        display: flex;
        background-color: #FFF;
        margin-bottom: 20px;
        border-radius: 4px;
        -webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.3); 
        box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.3);
    }

    .box--padding {
        padding: 10px;
    }
    .leftSide {
        flex:1;
        margin-right: 20px;

        .adImage {
            width: 320px;
            height: 320px;
            margin-right: 20px;

            .slide img {
                display: flex;
                align-items: center;
                justify-content: center;
                background-size: cover;
                height: 320px;

            }
        }
        .adInfo {
            flex: 1;
            .adName {
                margin-bottom:20px;
            }

            h3 {
                margin-bottom: 0;
            }
            .adDescription {

            }
        }
    }

    .rightSide {
        width: 250px;
    }
`;