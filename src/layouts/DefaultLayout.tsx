import { VStack } from '@chakra-ui/react'
import React from 'react'
import GuestMiddleware from 'middlewares/GuestMiddleware'
import { BrandColor } from 'constants/theme';
// import Header from './Header'


function DefaultLayout({
    children,
    params,
    bgColor
}: { children: React.ReactNode; params: { locale: string }; bgColor?: string }) {
    return (
        <GuestMiddleware params={params}>
            <VStack
                w='full'
                h='var(--doc-height)'
                spacing={0}
                className='app-container'
                bg={bgColor ?? BrandColor.white}
            >
                {children}
            </VStack>
        </GuestMiddleware>
    )
}

export default DefaultLayout