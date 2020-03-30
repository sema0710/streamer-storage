import { getDatabase, getStorage } from './Firebase';

export const database = getDatabase();
export const storage = getStorage();
export const objectToarray = (object) => {
    let buffer = [];
    Object.keys(object).map((count)=> {
        buffer.push(object[count]);;
        return count;
    });
    return buffer;
}
export const getMusic = () => new Promise((resolve,reject)=> {
    const musicDataPromise = database.ref('/music').once('value');
    musicDataPromise
    .then((response)=> {
        const musicData = response.val();
        if(musicData){
            const arrayedMusicData = objectToarray(musicData);
            resolve(arrayedMusicData);
        } else {
            resolve(false);
        }
    })
    .catch((err)=> {
        reject(err);
    })
});

export const setMusic = (id, musicData) => {
    database.ref('/music/'+id).set(musicData);
}

export const setImg = (id,img) => {
    return storage.ref(`/image/${id}`).put(img);
}

export const getCount = () => {
    return database.ref('/count').once('value');
}

export const setCount = (count) => {
    database.ref('/count').set(count);
}

export const getImg = (id) => {
    return storage.ref(`/image/${id}`).getDownloadURL();
}

export const searchMusic = (params) => new Promise((resolve, reject) => {
    const refs = database.ref('/music');
    const musicPromise = refs.once('value');
    musicPromise.then((response)=> {
        const musics = objectToarray(response.val())
        resolve(getSearchedMusic(musics,params));
    })
    .catch((err)=> {
        reject(err);
    })
});

const getSearchedMusic = (musics,params) => {
    let buffer = [];
    musics.map((music)=> {
        try{
            if(isArrayHaveParams(params, music.tags)){
                buffer.push(music);
            } else if(isSame(params, music.title)){
                buffer.push(music);
            }
        } catch {}
        return music;
    })
    return buffer;
}

const isArrayHaveParams = (params,array) => {
    return array.findIndex(tag => tag === params) !== -1;  
}

const isSame = (params,string) => {
    return string === params;
}

export const getOneMusic = (count) => new Promise((resolve,reject) => {
    const musicPromise = database.ref(`/music/${count}`).once('value');
    musicPromise
    .then((response)=> {
        const value = response.val();
        if(value){
            resolve(value);
        } else {
            resolve(false);
        }
    })
    .catch((err) => {
        reject(err);
    })
});

export const getSimilerMusic = (tags) => new Promise((resolve,reject) => {
    const musicPromise = database.ref('/music').once('value');
    musicPromise
    .then((response)=> {
        const value = objectToarray(response.val());
        let buffer = [];
        let leftStreamer = value;
        if(value && tags.length > 0){
            tags.map((tag)=> {
                const { left, searched } = similerStreamer(leftStreamer, tag);
                leftStreamer = left;
                buffer = [...buffer, ...searched];
            })
            resolve(buffer);
        } else {
            resolve(false);
        }
    })
    .catch(()=> {
        reject();
    })
})

export const similerStreamer = (streamers, tag) => {
    let buffer = [];
    let leftStreamer = [];
    streamers.map((streamer)=> {
        try{
            if(isArrayHaveParams(tag, streamer.tags)){
                buffer.push(streamer);
            } else {
                leftStreamer.push(streamer);
            }
        } catch {}
        return streamer;
    })
    return {
        searched: buffer,
        left: leftStreamer,
    }
}

export const deleteMusic = (count) => new Promise((resolve,reject) => {
    database.ref(`/music/${count}`).remove()
    .then((response)=> {
        resolve(response);
    })
    .catch(err => {
        reject(err);
    })
})

export const getLikeMusic = (likeList) => new Promise((resolve,reject) => {
    let buffer = [];
    const musicDataPromise = database.ref('/music').once('value');
    musicDataPromise
    .then((response)=> {
        const musicList = response.val();
        likeList.map((like)=> {
            buffer.push(musicList[like]);
            return like;
        })
        resolve(buffer);
    })
})