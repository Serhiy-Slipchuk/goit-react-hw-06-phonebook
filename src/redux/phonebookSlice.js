import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    updateFilter: (state, { payload }) => {
      state.filter = payload;
    },
    addContact: (state, { payload }) => {
      state.contacts = [...state.contacts, payload];
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const phonebookReducer = persistReducer(
  persistConfig,
  phonebookSlice.reducer
);
export const { updateFilter, addContact, deleteContact } =
  phonebookSlice.actions;
