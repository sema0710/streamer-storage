import React, { useState, useEffect } from 'react';
import * as S from '../style/MainStyle';
import { getImg } from '../../../shared/api';
import { withRouter } from 'react-router-dom';

const MainComponent = ({ title, count, url, history }) => {
    const [hover, hoverChange] = useState(false);
    const [img, imgChange] = useState("");
    const [isLike, likeChange] = useState(false);

    useEffect(()=> {
        getImg(count)
        .then((response)=> {
            imgChange(response);
            if(isLikeExist(count,getLikeList())){
                likeChange(true);
            }
        })
        .catch((err)=> {
            console.log(err);
            alert("네트워크 상태를 확인 해주세요.");
        })
    },[count])

    const getLikeList = () => {
        try{
            const likeList = localStorage.getItem('like').split('/');
            if(likeList.length < 0){
                return false;
            } else if(likeList[0] === ""){
                likeList.pop();
            }
            return likeList;
        } catch {
            localStorage.setItem('like',"");
            return [];
        }
    }

    const isLikeExist = (count,likeList) => {
        return likeList.findIndex(e => e === count.toString()) !== -1;
    }

    const heartClickHandler = (event) => {
        event.stopPropagation();
        const likeList = getLikeList();
        if(isLikeExist(count, likeList)){
            likeComponent(likeList)
        } else {
            unLikeComponent(likeList);
        }
    }

    const likeComponent = (likeList) => {
        const likeIndex = likeList.findIndex(e => e === count.toString());
        likeList.splice(likeIndex,1);
        localStorage.setItem('like',likeList.join('/'));
        likeChange(false);
    }

    const unLikeComponent = (likeList) => {
        likeList.push(count.toString());
        localStorage.setItem('like',likeList.join('/'));
        likeChange(true);
    }

    const linkClickHandler = (event) => {
        event.stopPropagation();
        window.open(url);
    }

    return (
        <S.MainContent 
            hover={hover} 
            isLike={isLike}
            onMouseOver={()=> {hoverChange(true)}} 
            onMouseLeave={()=> {hoverChange(false)}}
        >
            <div className="img">
                <img alt="" src={img}/>
                <div className="info" onClick={() => history.push(`/detail/${count}`)}>
                    <div>
                        <p>{title}</p>
                    </div>
                    <div className="heart" onClick={heartClickHandler}/>
                    <div>
                        <p className="link" onClick={linkClickHandler}>바로가기</p>
                    </div>     
                </div>
            </div>
        </S.MainContent>
    )
}

export default withRouter(MainComponent);