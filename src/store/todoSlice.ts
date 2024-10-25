import { createSlice } from "@reduxjs/toolkit";


export interface TodoItemInterface {
    id: number;
    name: string;
    completed: boolean;
    edited: boolean;
}
interface TodoState {
    items: TodoItemInterface[];
}
const initialState: TodoState = {
    items: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addItem: (state, { payload }: { payload: Omit<TodoItemInterface, 'id' | 'edited' | 'completed'> }) => {
            const newItem = {
                ...payload,
                id: state.items.length,
                edited: false,
                completed: false,
            }
            state.items = [...state.items, newItem]
        },
        editItem: (state, { payload }: { payload: Pick<TodoItemInterface, 'id' | 'name' | 'completed'> }) => {
            state.items = state.items.map(e => e.id === payload.id ? ({ ...e, ...payload }) : e)
        },
        toggleCheckItem: (state, { payload }: { payload: Pick<TodoItemInterface, 'id'> }) => {
            state.items = state.items.map(e => e.id === payload.id ? ({ ...e, completed: !e.completed }) : e)
        },
        deleteItem: (state, { payload }: { payload: Pick<TodoItemInterface, 'id'> }) => {
            state.items = state.items.filter(e => e.id !== payload.id)
        },
    },
});

export const { addItem, editItem, toggleCheckItem, deleteItem } = todoSlice.actions
export default todoSlice.reducer;