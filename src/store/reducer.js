const initialState = {
    todolist:[
        'counter',
        'todolist',
        'delete',
        'edit'
    ]
}
export const reducer = (state=initialState,action)=>{
    if(action.type==="ADDPRODUCT"){
        return {...state,products:[...state.todolist,action.payload]}
    }
    return state
}