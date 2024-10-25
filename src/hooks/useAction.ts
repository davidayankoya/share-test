import { useState } from "react"


export function useConfirmAction() {
    const [state, setState] = useState<{
        isOpen: boolean,
        data: any
    }>({
        isOpen: false,
        data: null
    })

    const openConfirmModal = (params?: any) => {
        setState(prev => ({ ...prev, data: params, isOpen: true }))
    }
    const closeConfirmModal = () => {
        setState(prev => ({ ...prev, data: null, isOpen: false }))
    }

    return {
        openConfirm: (params?: any) => openConfirmModal(params),
        closeConfirm: () => closeConfirmModal(),
        isOpenConfirm: state.isOpen,
        current: state.data
    }
}