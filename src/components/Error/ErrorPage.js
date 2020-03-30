import React from 'react';
import * as S from './style/ErrorPageStyle';
import { Header } from '../public';
import { withRouter } from 'react-router-dom';
import MainAddButton from '../Main/components/MainAddButton';

const ErrorPage = ({ history }) => {
    return (
        <>
            <Header/>
            <S.ErrorPageMain>
                <div className="errorpage">
                    <p>404</p>
                    <p>찾으시는 페이지가 없습니다.</p>
                    <div onClick={() => history.push('/')}>
                        go to MainPage
                    </div>
                </div>
                <MainAddButton/>
            </S.ErrorPageMain>
        </>
    )
}

export default withRouter(ErrorPage);