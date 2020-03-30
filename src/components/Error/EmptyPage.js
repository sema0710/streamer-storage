import React from 'react';
import * as S from './style/ErrorPageStyle';
import { Header } from '../public';
import { withRouter } from 'react-router-dom';
import MainAddButton from '../Main/components/MainAddButton';

const EmptyPage = ({ history }) => {
    return (
        <>
            <Header/>
            <S.ErrorPageMain>
                <div className="errorpage">
                    <p>너무 조용하군요...</p>
                    <p>첫번째 등록자가 되어주세요.</p>
                    <div onClick={() => history.push('/input')}>
                        go to update
                    </div>
                </div>
                <MainAddButton/>
            </S.ErrorPageMain>
        </>
    )
}

export default withRouter(EmptyPage);