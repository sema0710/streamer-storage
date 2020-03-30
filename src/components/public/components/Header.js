import React, { useState } from 'react';
import * as S from '../style/publicStyle';
import { search } from '../imgs';
import { withRouter } from 'react-router-dom';

const Header = ({ history }) => {
    const [value, valueChange] = useState("");
    const inputChangeHandler = (event) => {
        const target = event.target;    
        valueChange(target.value);
    }
    const inputKeyPressHandler = (event) => {
        if(event.key === "Enter"){
            history.push(`/search/${value}`);
        }
    }
    return (
        <S.MainHeader>
            <h1 onClick={()=> history.push('/')}>STREAMER STORAGE</h1>
            <S.MainSearch>
                <input onChange={inputChangeHandler} onKeyPress={inputKeyPressHandler}/>
                <div>
                    <img src={search} alt="" onClick={()=> history.push(`/search/${value}`)}/>
                </div>
            </S.MainSearch>
            <div>
                <div className="heart" onClick={()=> history.push('/Like')}/>
            </div>
        </S.MainHeader> 
    )
}

export default withRouter(Header);