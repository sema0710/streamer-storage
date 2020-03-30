import styled from 'styled-components';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};

export const DetailBody = styled.div`
    width: 100%;
    min-height: 100vh;
    > div.wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        > div {
            margin: 20px;
        }
    }
`

export const DetailImg = styled.div`
    width: 300px;
    border-radius: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
        width: 100%;
        border-radius: 21px;
    }
`

export const DetailInfo = styled.div`
    font-family: "MainFont";
    font-size: 30px;
    > p {
        margin: 30px;
        text-align: left;
        max-width: 320px;
    }
    > p.explain {
        font-size: 23px;
    }
    > div {
        .heart {
            background-color: ${props => props.isLike ? "red" : "#42A295"};
            display: inline-block;
            height: 20px;
            margin: 0 10px;
            position: relative;
            top: 0;
            transform: rotate(-45deg);
            width: 20px;
            cursor: pointer;
        }

        .heart:before,
        .heart:after {
        content: "";
            background-color: ${props => props.isLike ? "red" : "#42A295"};
            border-radius: 50%;
            height: 20px;
            position: absolute;
            width:20px;
        }

        .heart:before {
            top: -10px;
            left: 0;
        }

        .heart:after {
            left: 10px;
            top: 0;
        }
    }
    > div.center {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const DetailTagDiv = styled.div`
    width: calc(100% - 60px);
    display: flex;
    justify-content: center;
    margin: 30px;
    box-sizing: border-box; 
    > div {
        width: 50%;
        @media ${device.tablet}{
            width: 100%;
        }
        display: flex;
        flex-wrap: wrap;
    }
`

export const DetailTag = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100px;
    margin: 10px;
    padding: 5px;
    background-color: #42A295;
    border-radius: 21px;
    font-family: "MainFont";
    color: white;
    font-size: 30px;
    cursor: pointer;
`

export const DetailSimilerComponent = styled.div`
    width: 100%;
    > p {
        color: #42A295;
        font-size: 40px;
        font-family: "MainFont";
        margin: 30px;
    }
    > div {
        column-width: 250px;
        column-gap: 20px;
        margin: 40px;
    }
`   

export const DetailButton = styled.div`
    cursor: pointer;
    min-width: 70px;
    height: 30px;
    background-color: #42A295;
    font-family: "MainFont";
    margin: 10px;
    padding: 10px;
    border-radius: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AdvertiseDiv = styled.div`
    display: flex;
    justify-content: center;
`