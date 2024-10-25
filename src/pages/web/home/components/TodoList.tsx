import { Center, Flex, HStack, Icon, VStack } from '@chakra-ui/react'
import Button from 'common/Button/Button'
import { Text } from 'common/Text/Text'
import { BrandColor, TextColor } from 'constants/theme'
import { useAppDispatch, useAppSelector } from 'hooks/useApp'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { editItem, TodoItemInterface } from 'store/todoSlice'
import { LuPlus } from "react-icons/lu";
import { toggleModal } from 'store/uiSlice'


interface ToggleCheckboxProps {
    checked: boolean;
    onClick: () => void;
}
function ToggleCheckbox({ checked, onClick }: ToggleCheckboxProps) {
    return (
        <Center
            w='2rem'
            h='2rem'
            borderRadius='full'
            borderColor={checked ? 'rgba(73, 194, 93, 1)' : BrandColor.blue}
            borderWidth='1.5px'
            bgColor={checked ? BrandColor.green : 'transparent'}
            cursor='pointer'
            onClick={onClick}
        >
            {checked ? <Icon as={FaCheck} color='rgba(57, 150, 73, 1)' /> : null}
        </Center>
    )
}

interface TodoItemProps {
    item: TodoItemInterface;
    editItem: () => void;
    checkItem: () => void;
}
function TodoItem({ item, editItem, checkItem }: TodoItemProps) {
    return (
        <HStack
            w='full'
            pl='1.5rem'
            pr='1rem'
            py='1.5rem'
            borderRadius='6px'
            border='1px solid rgba(231, 231, 231, 1)'
            boxShadow='0px 4px 4px rgba(0, 0, 0, 0.1)'
            bgColor={BrandColor.white}
            justify='space-between'
        >
            <HStack spacing='1.5rem'>
                <ToggleCheckbox
                    checked={item.completed}
                    onClick={checkItem}
                />
                <Text
                    weight={500}
                    color={item.completed ? 'rgba(141, 141, 141, 1)' : TextColor.primary}
                    textDecor={item.completed ? 'line-through' : 'none'}
                >
                    {item.name}
                </Text>
            </HStack>

            <Button
                text='Edit'
                variant='outline'
                bgColor={BrandColor.blue}
                radius='4px'
                px='.8rem'
                fontWeight={500}
                onClick={editItem}
            />
        </HStack>
    )
}


function TodoList() {
    const { items } = useAppSelector(s => s.todo)
    const dispatch = useAppDispatch()

    return (
        <VStack w='full' h='full'>
            <VStack w='full' h='full' align='start' justify='start' spacing='1.5rem' py='1.5rem' px='1.5rem'>
                {items.length === 0 ? (
                    <VStack w='full' py='3rem' px='1rem' spacing='1rem'>
                        <Text>No items found.</Text>
                        <Text>Add an item to your todos</Text>
                    </VStack>
                ): (
                    <React.Fragment>
                        {items.map((item) =>
                            <TodoItem
                                item={item}
                                editItem={() => dispatch(toggleModal({ action: 'edit', item }))}
                                checkItem={() => dispatch(editItem({ id: item.id, name: item.name, completed: !item.completed }))}
                            />
                        )}  
                    </React.Fragment>
                )}
            </VStack>

            <Flex w='full' mt='auto' justify='end' p='1.5rem'>
                <Center
                    p='1.2rem'
                    borderRadius='full'
                    bgColor={BrandColor.primary}
                    borderColor={BrandColor.buttonBlue}
                    borderWidth='2px'
                    cursor='pointer'
                    _hover={{ filter: 'invert(8%)' }}
                    boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 1px rgba(168, 181, 222, 0.5) inset'
                    onClick={() => dispatch(toggleModal({ action: 'add', item: undefined }))}
                >
                    <Icon as={LuPlus} color={BrandColor.white} fontSize='1.5rem' textShadow='0px 2px 0px rgba(0, 0, 0, 1)' />
                </Center>
            </Flex>
        </VStack>
    )
}

export default TodoList