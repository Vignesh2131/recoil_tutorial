import { atom } from "recoil"; 
//To manage global state rather than prop drilling, Recoil is used.
export const taskList = atom({
    key: 'Tasklist',
    default:[],
})
