import { Stack, VStack } from '@chakra-ui/react'
import Button from 'common/Button/Button';
import { Input } from 'common/Form';
import { BrandColor, TextColor } from 'constants/theme';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from 'hooks/useApp';
import { useScreenSize } from 'hooks/useScreen';
import React from 'react'
import { addItem, deleteItem, editItem, TodoItemInterface } from 'store/todoSlice';
import { toggleModal } from 'store/uiSlice';
import * as yup from 'yup';


interface TodoFormProps {
    details?: TodoItemInterface
}
function TodoForm({ details }: TodoFormProps) {
    const dispatch = useAppDispatch()
    const { modalToggled } = useAppSelector(s => s.ui)
     const { isMobile } = useScreenSize()

    const formik = useFormik({
        initialValues: {
            ...details,
            name: details?.name ?? '',
        },
        validationSchema: yup.object({
            name: yup.string().required('Required'),
        }),
        enableReinitialize: true,
        validateOnChange: false,
        onSubmit: () => {},
    });

    const onAddItem = () => {
        dispatch(addItem({ name: formik.values.name }))
        dispatch(toggleModal({ action: isMobile ? false : 'add', item: undefined }))
        formik.resetForm()
    }
    const onEditItem = () => {
        dispatch(editItem({ id: formik.values.id!, name: formik.values.name, completed: false }))
        dispatch(toggleModal({ action: false, item: undefined }))
    }
    const onCloseItem = () => {
        dispatch(toggleModal({ action: false, item: undefined }))
    }
    const onDeleteItem = () => {
        dispatch(deleteItem({ id: formik.values.id! }))
        dispatch(toggleModal({ action: false, item: undefined }))
    }


    return (
        <VStack w='full' h='full' px={['', '', '2.5rem']} py='2rem' justify='space-between'>
            <Input
                label='Task Name'
                name="name"
                formik={formik}
                value={formik.values.name}
            />

            <Stack w='full' spacing='1rem' direction={['column', 'column', 'column', 'row']}>
                <Button
                    text={modalToggled.action === 'add' ? 'Close' : 'Delete'}
                    color={TextColor.white}
                    bgColor='rgba(171, 53, 53, 1)'
                    borderColor={BrandColor.buttonRed}
                    borderWidth='2px'
                    borderRadius='6px'
                    w={['full', 'full', '20%']}
                    py='1.8rem'
                    boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 1px rgba(168, 181, 222, 0.5) inset'
                    textShadow='0px 2px 0px rgba(0, 0, 0, 1)'
                    onClick={() => modalToggled.action === 'add' ? onCloseItem() : onDeleteItem()}
                />
                <Button
                    text='Save'
                    color={TextColor.white}
                    bgColor={BrandColor.primary}
                    borderColor={BrandColor.buttonBlue}
                    borderWidth='2px'
                    borderRadius='6px'
                    w={['full', 'full', '80%']}
                    py='1.8rem'
                    boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 1px rgba(168, 181, 222, 0.5) inset'
                    textShadow='0px 2px 0px rgba(0, 0, 0, 1)'
                    onClick={() => modalToggled.action === 'add' ? onAddItem() : onEditItem()}
                />
            </Stack>
        </VStack>
    )
}

export default TodoForm