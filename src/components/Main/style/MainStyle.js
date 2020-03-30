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

export const MainBody = styled.div`
    width: 100%;
    min-height: 100vh;
`

export const MainWrapper = styled.div`
    width: 100%;
    display: flex;
    > div {
        column-width: 250px;
        column-gap: 20px;
        margin: 40px;
    }
`

export const MainContent = styled.figure`
    border-radius: 21px; 
    display: inline-block;
    width: 250px;
    margin-bottom: 20px;
    cursor: default;
    > .img {
        width: 100%;
        height: 100%;
        z-index: 1;
        position: relative;
        > img {
            width: 100%;
            height: auto;
            border-radius: 21px;
        }
        > .info {
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            border-radius: 21px;
            display: flex;
            opacity: ${props => props.hover ? "0.7" : "0"};
            color: white;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            background-color: black;
            position: absolute;
            transition: 0.3s;
            > div {
                width: 100%;    
                text-align: center;
                > p{
                    text-align: center;
                    width: 100%;
                    font-size: 23px;
                    font-family: MainFont;
                    font-weight: 600;
                }
                > p.link {
                    transition: 0.3s;
                    &:hover {
                        color: #42A295; 
                    }
                }
            }
            .heart {
            background-color: ${props => props.isLike ? "red" : "white"};
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
            background-color: ${props => props.isLike ? "red" : "white"};
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
    }
`

export const MainWriteButton = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C0D6D3;
    position: fixed;
    @media ${device.mobileL}{
        left: 65vw;
    }
    left: 85vw;
    top: 80vh;
    z-index: 2;
    > .plus{
        position: relative;
        width: 30px;
        height: 30px;

        &:before,
        &:after{
            content: "";
            position: absolute;
            background-color: white;
            transition: transform 0.25s ease-out;
        }

        /* Vertical line */
        &:before{
            top: 0;
            left: 50%;
            width: 4px;
            height: 100%;
            margin-left: -2px;
        }

        /* horizontal line */
        &:after{
            top: 50%;
            left: 0;
            width: 100%;
            height: 4px;
            margin-top: -2px;
        }
        
        &:hover{
            cursor: pointer;
            &:before{ transform: rotate(90deg); }
            &:after{ transform: rotate(180deg); }
        }
    }
`