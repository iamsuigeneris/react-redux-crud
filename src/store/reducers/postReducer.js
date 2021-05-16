
const initialState = {
    posts:[]
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case 'DELETE_POST':
            const newPost = state.posts.filter(post => post.id !== action.id)
            return {
                posts: newPost
            }
        case 'ADD_POST':
            return {
                posts: [ action.post,...state.posts] 
            }
        case 'EDIT_POST':
            const updatePost = action.post 
            const updatePosts = state.posts.map( post => {
                if( post.id === updatePost.id){
                    return updatePost
                }
                return post
            })
            return {
                ...state,
                posts: updatePosts
            }    
       
        default:
            return state    
    }
}

export default postReducer