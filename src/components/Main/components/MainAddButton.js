import React from 'react';
import { withRouter } from 'react-router-dom';
import * as S from '../style/MainStyle';

const MainAddButton = ({ history }) => {
    return (
        <S.MainWriteButton onClick={()=> history.push('/input')}>
            <div className="plus"/>
        </S.MainWriteButton>
    )
}

export default withRouter(MainAddButton);