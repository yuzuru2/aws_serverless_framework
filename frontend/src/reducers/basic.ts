import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import i_reducer from 'src/interface/reducer';

const initialState: i_reducer['basic'] = {
  loading: false,
};

const slice = createSlice({
  name: 'basic',
  initialState,
  reducers: {
    loading: (
      state: i_reducer['basic'],
      action: PayloadAction<i_reducer['basic']['loading']>
    ) => {
      state.loading = action.payload;
    },
  },
});

export default slice;
