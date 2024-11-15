import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '@/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useStore = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state);

	return {
		state,
		dispatch,
	};
};
