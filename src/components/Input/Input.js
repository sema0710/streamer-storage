import React, { useState, useRef } from 'react';
import * as S from './style/InputStyle';
import { Header } from '../public';
import { InputButtonDiv } from './components';
import { setMusic, setImg, getCount, setCount } from '../../shared/api';
import { withRouter } from 'react-router-dom';

const Input = ({ history }) => {
    const [hover, hoverChange] = useState(false);
    const [img, imgChange] = useState(false);
    const [isClick, clickChange] = useState(false);
    const [values, valuesChange] = useState({
        title: "",
        singer: "",
        url: "",
    });
    const [tag, tagChange] = useState([]);
    const currentPage = useRef();
    const nextPage = useRef();

    const moveNextPage = () => {
        const nextPageHTML = nextPage.current;
        nextPageHTML.scrollIntoView();
    }

    const moveCurrentPage = () => {
        const currentPageHTML = currentPage.current;
        currentPageHTML.scrollIntoView();
    }

    const inputChange = (event, type) => {
        const target = event.target;
        let buffer = Object.assign({},values);
        buffer[type] = target.value;
        valuesChange(buffer);
    }

    const tagInputEnter = (event) => {
        const target = event.target;
        if(event.key === " " || event.key === "Enter"){
            let buffer = target.value;
            target.value = "";
            target.innerText = "";
            buffer = buffer.replace(/\s+/g, '');
            if(buffer === ""){
                return;
            }
            tagChange([...tag,buffer]);
        }
    }

    const tagInputChange = (event) => {
        const target = event.target;
        const keyCode = event.keyCode;
        if(!target.value && keyCode === 8){
            let buffer = [...tag];
            buffer.pop();
            tagChange(buffer);
        }
    }

    const imgChangeHandler = (event) => {
        const img = event.target.files[0];
        imgChange(img);
    }

    const fileToURL = (file) => {
        return URL.createObjectURL(file);
    }

    const getMusicData = (data,tags,count) => {
        const { title, singer, url } = data;
        return {
            singer,
            title,
            url,
            tags,
            count,
        }
    }

    const musicDataCheck = (musicData) => {
        const { title, singer, url } = musicData;
        if(title.length <= 0){
            return false;
        } else if(singer.length <= 0){
            return false;
        } else if(url.length <= 0){
            return false;
        } else if(!img) {
            return false;
        } else {
            return true;
        }
    }

    const finishButtonHandler = () => {
        getCount()
        .then((response)=> {
            const count = response.val();
            const musicData = getMusicData(values,tag,count);
            if(musicDataCheck(musicData)){
                if(!isClick){
                    setMusic(count,musicData);
                    setCount(count+1);
                    setImg(count,img).then(()=> {
                        history.push('/');
                    });
                    clickChange(true);
                }
            } else {
                alert("작성하지 않은 부분이 없나 확인해 주세요.");
            }
        });
    }

    return ( 
            <S.InputMain>
                <S.InputWrapper>
                    <S.InputComponent ref={currentPage}>
                    <Header/>
                        <div className="inner">
                            <div>
                                <div className="imgWrapper">
                                    <S.InputImg
                                        hover={hover}
                                        onMouseOver={()=> hoverChange(true)}
                                        onMouseLeave={() => hoverChange(false)}
                                        >
                                        <div className="img">
                                            <img src={img && fileToURL(img)} alt=""/>
                                        </div>
                                        <div className="overlay">
                                            <div>
                                                <label>
                                                    <div className="plus"/>
                                                    <input onChange={imgChangeHandler} type="file"/>
                                                </label>
                                            </div>
                                        </div>
                                    </S.InputImg>
                                </div>
                                <InputButtonDiv
                                    moveNextPage={moveNextPage} 
                                    moveCurrentPage={() => history.push('/')}
                                />
                            </div>
                        </div>
                    </S.InputComponent>
                    <S.InputComponent ref={nextPage}>
                    <Header/>
                    <div className="inner">
                        <div className="inputWrapper">
                            <div className="inputs">
                                <S.inputInput placeholder="이름..." onChange={(event)=> inputChange(event,"title")}/>
                                <S.inputTextarea placeholder="간단한 설명..." onChange={(event)=> inputChange(event,"singer")}/>
                                <S.inputInput placeholder="트위치 url..." onChange={(event)=> inputChange(event,"url")}/>
                                <S.inputInput placeholder="태그..." onKeyPress={tagInputEnter} onKeyDown={tagInputChange}/>
                                <S.inputTagDiv>
                                    <div>
                                        {
                                            tag.map((tag)=> {
                                                return <S.inputTag key={tag}>#{tag}</S.inputTag>
                                            })
                                        }
                                    </div>
                                </S.inputTagDiv>
                            </div>
                            <InputButtonDiv
                                moveNextPage={finishButtonHandler} 
                                moveCurrentPage={moveCurrentPage}
                            />
                        </div>
                    </div>
                    </S.InputComponent>
                </S.InputWrapper>
            </S.InputMain>
    )
}

export default withRouter(Input);