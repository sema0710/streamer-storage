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

export const InputMain = styled.div`
    width: 100%;
    height: 100vh;
    scroll-behavior: smooth;
    overflow-x: hidden;
`

export const InputWrapper = styled.div`
    width: 200%;
    height: 100%;   
    display: flex;
`

export const InputComponent = styled.div`
    width: 50%;
    height: 100%;
    @media ${device.mobileL}{
        height: 100%;
    }
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    > .inner {
        height: 80%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        > .inputWrapper {
            @media ${device.tablet}{
                width: 90%;
            }
            width: 40%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            .inputs {
                width: 500px;
                @media ${device.mobileL}{
                    width: 90%;
                }
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
            }
        }
        > div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            > .imgWrapper {
                width: 100%;
                display: flex;
                justify-content: center;
                > input {
                    display: none;
                }
            }
        }
    }
`

export const InputButtonWrapper = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-around;
    margin: 10px;
`

export const InputButton = styled.div`
    width: 110px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #42A295;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    > img {
        width: 20px;
    }
    > p {
        font-weight: 600;
        color: #42A295;
        font-family: "MainFont";
    }
`

export const InputImg = styled.div`
    width: 300px;
    height: auto;
    min-height: 400px;
    border-radius: 21px;
    border: 1px solid #42A295;
    position: relative;
    display: flex;
    align-items: center;
    > .img {
            width: 100%;
        > img {
            width: 100%;
            border-radius: 21px;
        }
    }
    > .overlay {
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transition-duration: 0.5s;
        border-radius: 21px;
        opacity: ${props => props.hover ? "0.7" : "0"};
        display: flex;
        color: white;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        background-color: black;
        position: absolute;
        > div {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
            border-radius: 25px;
            > label {
                > input{
                    display: none;
                }
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
            }
        }
    }
`

export const inputInput = styled.input`
    width: 100%;
    max-width: 500px;
    height: 50px;
    border: 1px solid #C0D6D3;
    border-radius: 21px;
    margin: 10px;
    outline: none;
    font-family: "MainFont";
    font-size: 20px;
    padding-left: 10px;
    padding-right: 10px;
`

export const inputTextarea = styled.input`
    width: 100%;
    max-width: 500px;
    height: 50px;
    border: 1px solid #C0D6D3;
    border-radius: 21px;
    margin: 10px;
    outline: none;
    font-family: "MainFont";
    font-size: 20px;
    padding-left: 10px;
    padding-right: 10px;
`

export const inputTag = styled.p`
    min-width: 50px;
    margin: 10px;
    padding: 5px;
    background-color: #C0D6D3;
    border-radius: 21px;
    font-family: "MainFont";
    color: white;
    font-size: 17px;
`

export const inputTagDiv = styled.div`
    width: 100%;
    height: auto;
    max-width: 500px;
    border-radius: 21px;
    outline: none;
    font-family: "MainFont";
    overflow-x: scroll;
    > div {
        display: flex;
        flex-wrap: wrap;
    }
`