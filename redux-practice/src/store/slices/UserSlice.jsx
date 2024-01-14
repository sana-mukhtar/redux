import React from 'react';
import { createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "users",
    initialState : [] , 
    reducers : {
        addUser(state , action){} , 
        removeUser(state , action){},
        deleteUsers(state , action){},
    },
})

const UserSlice = () => {
  return (
    <div>
      
    </div>
  )
}

export {userSlice};
