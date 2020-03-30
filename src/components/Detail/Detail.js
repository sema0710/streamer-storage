import React, { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { getOneMusic, getImg, getSimilerMusic, deleteMusic } from '../../shared/api';
import { Header } from '../public';
import * as S from './style/DetailStyle';
import MainComponent from '../Main/components/MainComponent';
// import AdSense from 'react-adsense';
import { MainDesktopAd } from '../advertise';

const Detail = ({ history }) => {
    const { params } = useParams();
    const [music, musicChange] = useState({});
    const [recommend, recommendChange] = useState([]);
    const [img, imgChange] = useState();
    const [isLike, isLikeChange] = useState(false);
    useEffect(()=> {
        getOneMusic(params)
        .then((response)=> {
            getImg(response.count)
            .then((img)=> {
                imgChange(img);
            })
            .catch((err)=> {
                console.log(err)
                history.push('/404');
            })
            if(response.tags){
                getSimilerMusic(response.tags)
                .then((response)=> {
                    recommendChange(response);
                })
                .catch((err)=> {
                    console.log(err)
                    history.push('/404');
                })
            }
            isLikeChange(isLikeExist(response.count,getLikeList()));
            musicChange(response);
        })
        .catch((err)=> {
            console.log(err)
            history.push('/404');
        })
    },[params])
    const getTag = (tags) => {
        let buffer = [];
        tags.map((tag)=> {
            buffer.push(<S.DetailTag onClick={()=> history.push(`/search/${tag}`)}>#{tag}</S.DetailTag>)
        })
        return buffer;
    }
    const getLikeList = () => {
        const likeList = localStorage.getItem('like').split('/');
        if(likeList.length < 0){
            return false;
        } else if(likeList[0] === ""){
            likeList.pop();
        }
        return likeList;
    }

    const isLikeExist = (count,likeList) => {
        if(count){
            return likeList.findIndex(e => e === count.toString()) !== -1;
        }
        return false;
    }
    const heartClickHandler = () => {
        const likeList = getLikeList();
        if(isLikeExist(music.count, likeList)){
            likeComponent(likeList)
        } else {
            unLikeComponent(likeList);
        }
    }
    const likeComponent = (likeList) => {
        const likeIndex = likeList.findIndex(e => e === music.count.toString());
        likeList.splice(likeIndex,1);
        localStorage.setItem('like',likeList.join('/'));
        isLikeChange(false);
    }

    const unLikeComponent = (likeList) => {
        likeList.push(music.count.toString());
        localStorage.setItem('like',likeList.join('/'));
        isLikeChange(true);
    }
    const linkClickHandler = () => {
        window.open(music.url);
    }
    const deleteClickHandler = () => {  
        if(window.confirm("정말로 삭제하겠습니까? 복구 할 수 없습니다. 다른사람의 프로필이라면 삭제하지 마십시오.")){
            deleteMusic(music.count);
            history.push('/');
        }
    }
    return (
        <S.DetailBody>
            <Header/>
            <div className="wrapper">
                <S.DetailImg>
                    <img src={img} alt=""/>
                </S.DetailImg>
                <S.DetailInfo isLike={isLike}>
                    <p>이름: {music.title}</p>
                    <p className="explain">간단설명: <br/>{music.singer}</p>
                    <div className="center">
                        <div className="heart" onClick={heartClickHandler}/>
                        <S.DetailButton onClick={linkClickHandler}>바로가기</S.DetailButton>
                        <S.DetailButton onClick={deleteClickHandler}>삭제</S.DetailButton>
                    </div>
                </S.DetailInfo>
            </div>
            <S.DetailTagDiv>
                <div>
                    {
                        music.tags ? getTag(music.tags) : ""
                    }
                </div>
            </S.DetailTagDiv>
                <S.AdvertiseDiv>
                    <MainDesktopAd/>
                    <MainDesktopAd/>
                    <MainDesktopAd/>
                </S.AdvertiseDiv>
            <S.DetailSimilerComponent>
                <p>비슷한 스트리머</p>
                <div>
                    {
                        recommend.map((recommendMusic)=> {
                            const { title, singer, url, tags, count } = recommendMusic;
                            if(count === music.count){
                                return "";
                            }
                            return <MainComponent title={title} singer={singer} url={url} tags={tags} count={count}/>
                        })
                    }
                </div>
            </S.DetailSimilerComponent>
        </S.DetailBody>
    )
};

export default withRouter(Detail);