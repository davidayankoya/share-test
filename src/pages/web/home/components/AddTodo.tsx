import { VStack } from '@chakra-ui/react'
import { Input } from 'common/Form'
import React from 'react'


function AddTodoModal() {
    return (
        <VStack w='full'>
            <Input
                label='Task Name'
            />
        </VStack>
    )
}

export default AddTodoModal