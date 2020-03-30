import styled from 'styled-components';

export const ErrorPageMain = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    > div.errorpage {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        > p {
            width: 100%;    
            font-size: 50px;
            font-family: "MainFont";
            margin: 10px;
            text-align: center;
        }
        > div {
            width: 260px;
            height: 70px;
            border-radius: 50px;
            background-color: #42A295;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: "MainFont";
            margin: 10px;
            font-size: 30px;
            cursor: pointer;
        }
    }
`