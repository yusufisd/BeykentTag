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

        return userData

    } catch (error) {
        console.log("userSlice 21 line: ", error)
        throw error
    }
})
export const register = createAsyncThunk('user/register', async ({ email, sifre }) => {
    console.log("email:", email);
    console.log("password:", sifre);
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
        setIsLoading: (state,action) => {
            state.isLoading=action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state)=>{

            })
            .addCase(login.fulfilled, (state,action)=>{
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state,action)=>{
                state.error = action.error.message;
            })
    }
})

export const {setEmail,setSifre,setIsLoading} = userSlice.actions
export default userSlice.reducer;