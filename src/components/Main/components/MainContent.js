import React from 'react';
import * as S from '../style/MainStyle';
import MainComponent from './MainComponent';
import MainAddButton from './MainAddButton';
import { withRouter } from 'react-router-dom';
import { MainDesktopAd } from '../../advertise';

const MainContent = ({ musicData, history }) => {
    const getComponent = () => {
        let buffer = [];
        if(!musicData){
            history.push('/Empty');
        } else {    
            musicData.map((data)=> {
                const { title, singer, count, url } = data;
                buffer.push(<MainComponent count={count} title={title} singer={singer} url={url} key={count}/>);
                return data;
            })
            buffer.push(<MainDesktopAd/>);
            return buffer;
        }
    }

    return (
        <S.MainWrapper>
            <div>
                {
                    getComponent()
                }
            </div>
            <MainAddButton/>
        </S.MainWrapper>
    )
}

export default withRouter(MainContent);