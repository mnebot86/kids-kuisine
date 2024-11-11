// Example
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
	isAuthenticated: boolean;
	user: {
		id: string | null;
		name: string;
		email: string;
	} | null;
}

const initialState: UserState = {
	isAuthenticated: false,
	user: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login(
			state,
			action: PayloadAction<{ id: string; name: string; email: string }>,
		) {
			state.isAuthenticated = true;
			state.user = action.payload;
		},
		logout(state) {
			state.isAuthenticated = false;
			state.user = null;
		},
	},
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
