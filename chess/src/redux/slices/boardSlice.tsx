import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { board } from '../../constants/Array'

const initialState:{board:string[]} = {
    board:board
}


const boardSlice = createSlice({
    name:'board',
    initialState,
    reducers:{
        replace:(state,actions:PayloadAction<string[]>)=>{
            state.board = actions.payload
        }
    }
})


export const {replace} = boardSlice.actions
export default boardSlice.reducer