import React, { useEffect, useState } from 'react';
import * as S from './style/MainStyle';
import { Header } from '../public';
import { MainContent } from './components';
import { getMusic } from '../../shared/api';
// import AdSense from 'react-adsense';

const Main = () => {
    const [musicData, musicDataChange] = useState([]);
    useEffect(()=> {
        getMusic()
        .then((response)=> {
            musicDataChange(response);
        })
    },[])
    return (
        <S.MainBody>
            <Header/>
            <MainContent musicData={musicData}/>
        </S.MainBody>
    )
}

export default Main;