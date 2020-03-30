import React, { useEffect, useState } from 'react';
import { MainComponent, MainAddButton } from '../Main/components';
import * as S from './style/SearchStyle';
import { searchMusic } from '../../shared/api';
import { useParams } from 'react-router-dom';
import { Header } from '../public';
import { withRouter } from 'react-router-dom';

const Search = ({ history }) => {
    const { params } = useParams();
    const [music, musicChange] = useState([]);
    useEffect(()=> {
        searchMusic(params)
        .then((searchedData)=> {
            if(searchedData.length <= 0){
                history.push('/Empty');
            }
            musicChange(searchedData);
        })
        .catch(()=> {
            alert("네트워크를 확인해 주세요.");
        })
    },[params])
    return (
        <S.SearchBody>
            <Header/>
            <S.SearchWrapper>
                <div>
                    {
                        music.map((musicData)=> {
                            const { count, singer, title, url } = musicData;
                            return <MainComponent key={count} count={count} singer={singer} title={title} url={url}/>
                        })
                    }
                </div>
                <MainAddButton/>
            </S.SearchWrapper>
        </S.SearchBody>
    )
}

export default withRouter(Search);