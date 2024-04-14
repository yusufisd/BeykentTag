import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'



export const login = createAsyncThunk('user/login', async({email, sifre})=>{

    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, sifre)
        
        const user = userCredential.user
        const token = user.stsTokenManager.accessToken;

        const userData = {
            token,
            user: user,
        }
        return userData;

    } catch (error) {
        throw error
    }
})
export const register = createAsyncThunk('user/register', async ({ email, sifre }) => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, sifre);
      
      const user = userCredential.user;
      const token = user.stsTokenManager.accessToken;
  
      const userData = {
        token,
        user: user,
      }
  
      return userData;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  });






const initialState = {
  isLogin: false,
  token: null,
  user: null,
  error:null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setEmail: (state,action) => {
            state.email=action.payload
        },
        setSifre: (state,action) => {
            state.sifre=action.payload
        },
        setIsLogin: (state,action) => {
            state.isLogin=action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state)=>{
                state.isLogin = false
            })
            .addCase(login.fulfilled, (state,action)=>{
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogin = true
            })
            .addCase(login.rejected, (state,action)=>{
                state.error = action.error.message;
                state.isLogin=false
            })
    }
})

export const {setEmail,setSifre,setIsLogin} = userSlice.actions
export default userSlice.reducer;