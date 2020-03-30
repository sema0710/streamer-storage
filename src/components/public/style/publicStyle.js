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

export const MainHeader = styled.div`
    width: 100%;
    height: 6vh;
    background: #C0D6D3;
    display: flex;
    align-items: center;
    text-align: left;
    justify-content: space-between;    
    > h1 {
        @media ${device.tablet} {
            display: none;  
        }
        margin-left: 10px;
        color: white;
        font-size: 1.5rem;
        font-weight: 500;
        cursor: pointer;
    }
    > div {
        margin: 10px;
        .heart {
            background-color: red;
            display: inline-block;
            height: 20px;
            margin: 0 10px;
            position: relative;
            top: 0;
            transform: rotate(-45deg);
            width: 20px;
            cursor: pointer
        }

        .heart:before,
        .heart:after {
        content: "";
            background-color: red;
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
`

export const MainSearch = styled.div`
    @media ${device.tablet} {
        width: 80%;    
    }
    width: 50%;
    height: 70%;
    background-color: white;
    border-radius: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    > input {
        @media ${device.tablet}{
            width: 80%;
        }
        @media ${device.mobileS}{
            width: 70%;
        }
        border: none;
        outline: none;
        width: 85%;
        height: 80%;
        font-size: 17px;
    }
    > div {
        width: 30px;
        height: 26px;
        > img {
            width: 30px;
            height: 26px;
        }
    }
`