export function setArticle(payload){
    return {type:"SETARTICLE", payload}
}

export function fetchArticle(payload){
    return(dispatch)=>{
        fetch('http://localhost:3000/article')
        .then(resoponse=>response.json())
        .then(article=>{
            dispatch(setArticle(article))
        }).catch(err=>{
            console.log(err)
        })
    }
}