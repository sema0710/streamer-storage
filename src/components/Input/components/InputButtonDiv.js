import React from 'react';
import * as S from '../style/InputStyle';
import { arrowLeft, arrowRight } from '../imgs';

const InputButtonDiv = ({ moveCurrentPage, moveNextPage }) => {
    return (
        <S.InputButtonWrapper>
            <S.InputButton onClick={moveCurrentPage}>
                <img src={arrowLeft} alt=""/>
                <p>이전</p>
            </S.InputButton>
            <S.InputButton onClick={moveNextPage}>
                <p>다음</p>
                <img src={arrowRight} alt=""/>
            </S.InputButton>
        </S.InputButtonWrapper>
    )
}

export default InputButtonDiv;