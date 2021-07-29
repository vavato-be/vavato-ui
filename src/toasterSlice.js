import { createSlice } from '@reduxjs/toolkit'

// Start high to avoid conflict with context toasters
let nextKey = 100000
function addToaster(state, { message, type }) {
  const entries = state.entries
  const entry = {
    key: parseInt(nextKey),
    message,
    type
  }
  nextKey++
  state.entries = [entry, ...entries]
}

export const toasterSlice = createSlice({
  name: 'toasters',
  initialState: {
    entries: []
  },

  reducers: {
    success: (state, action) => {
      addToaster(state, {
        type: 'success',
        message: action.payload
      })
    },
    info: (state, action) => {
      addToaster(state, {
        type: 'info',
        message: action.payload
      })
    },
    error: (state, action) => {
      addToaster(state, {
        type: 'error',
        message: action.payload
      })
    },
    dismiss: (state, action) => {
      const entry = state.entries.find((e) => e.key === action.payload)
      if (!entry) {
        return
      }

      state.entries.splice(state.entries.indexOf(entry), 1)
    }
  },

  extraReducers: {}
})

export const { success, info, error, dismiss } = toasterSlice.actions

export const selectAllToasters = (state) => state.toasters.entries

export default toasterSlice.reducer
