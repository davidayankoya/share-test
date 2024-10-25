import { ColorMode } from "@chakra-ui/react";
import { createSlice } from "@reduxjs/toolkit";
import { TodoItemInterface } from "./todoSlice";

interface UIState {
    isLoading: boolean;
    loadingText: React.ReactNode;
    isLeftToggled: boolean;
    isRightToggled: boolean;
    modalToggled: {
        action: 'add' | 'edit' | false;
        item?: TodoItemInterface
    };
    colorMode: ColorMode;
}
const initialState: UIState = {
    isLoading: false,
    loadingText: null,
    isLeftToggled: true,
    isRightToggled: false,
    modalToggled: {
        action: false,
        item: undefined,
    },
    colorMode: 'light',
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleLeftSide: (state, { payload }: { payload: boolean | undefined }) => {
            state.isLeftToggled = payload ? payload : !state.isLeftToggled
        },
        toggleRightSide: (state, { payload }: { payload: boolean | undefined }) => {
            state.isRightToggled = payload ? payload : !state.isRightToggled
        },
        toggleModal: (state, { payload }: { payload: UIState['modalToggled'] }) => {
            state.modalToggled = payload
        },
        toggleLoading: (state, { payload }: { payload: boolean | { loading: boolean; text: React.ReactNode; } }) => {
            if (typeof payload === 'boolean') {
                state.isLoading = payload
            } else {
                state.isLoading = payload.loading
                state.loadingText = payload.text
            }
        },
        toggleColorMode: (state, { payload }: { payload: ColorMode }) => {
            state.colorMode = payload
        },
    },
});

export const { toggleLeftSide, toggleRightSide, toggleLoading, toggleModal } = uiSlice.actions
export default uiSlice.reducer;