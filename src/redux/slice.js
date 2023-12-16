// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//    user:{
//     _id:"csc",
//     username:"csc",
//     email:"css",
//     profilePicture:"",
//     coverPicture:"",
//    } 
// };

// const  userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     addUser: (state, action) => {
//      state._id=action.payload
       
//     },
    // removeTodo: (state, action) => {
    //     console.log(action.payload)
       

    //     state.todos=state.todos.filter((todo)=>{
    //         console.log(todo.id)
    //         todo.id !== action.payload
    //     })
    //     }

//   },
// });

 
// export const { addUser} = userSlice.actions;

// export default userSlice.reducer;





















import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  user: {
    _id: " ",
    username: "",
    email: "",
    profilePicture: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addId: (state, action) => {
      state.user._id = action.payload;
    },
    addEmail: (state, action) => {
      state.user.email = action.payload;
    },
    addUsername: (state, action) => {
      state.user.username = action.payload;
    },
    addProfilepic: (state, action) => {
      state.user.profilePicture = action.payload;
    },
  },
});

export const { addEmail,addId,addUsername } = userSlice.actions;

export default userSlice.reducer;
