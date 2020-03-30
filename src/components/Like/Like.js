import React, { useEffect, useState } from 'react';
import { MainComponent, MainAddButton } from '../Main/components';
import * as S from './style/LikeStyle';
import { Header } from '../public';
import { getLikeMusic } from '../../shared/api';

const Like = () => {
    const [music, musicChange] = useState([]);
    const getLikeList = () => {
        const likeList = localStorage.getItem('like').split('/');
        if(likeList.length < 0){
            return false;
        } else if(likeList[0] === ""){
            likeList.pop();
        }
        return likeList;
    }
    useEffect(()=> {
        const likeList = getLikeList();
        getLikeMusic(likeList)
        .then((musicList)=> {
            musicChange(musicList);
        })
    },[])
    return (
        <S.LikeMain>
            <Header/>
            <S.LikeComponent>
                <p>좋아요 표시한 스트리머</p>
                <div>
                    {
                        music.map((music)=> {
                            if(music){
                                const { url, title, count } = music;
                                return <MainComponent url={url} title={title} count={count}/>
                            }
                            return music;
                        })
                    }
                </div>
                <MainAddButton/>
            </S.LikeComponent>
        </S.LikeMain>
    )
}

export default Like;