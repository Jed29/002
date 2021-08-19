const initialState = {
    fetchArticle:[]
}

export default function reducer(state = initialState, action){
    const {type,payload} = action
    if(type === 'SETARTICLE')
    {
        return {...state,fetchArticle:payload}
    }else{
        return state
    }

}