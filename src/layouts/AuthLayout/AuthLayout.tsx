import { HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { BrandColor } from 'constants/theme'
// import SidebarLeft from '../Sidebar/left'
// import Header from '../Header'
import { navLinks } from './menu'
import AuthMiddleware from 'middlewares/AuthMiddleware'


function AuthLayout({ children, params, redirectTo }: { children: React.ReactNode; params: { locale: string }; redirectTo?: string }) {
    return (
        <AuthMiddleware params={params} redirectTo={redirectTo}>
            <HStack
                bgColor={BrandColor.white}
                w='full'
                h='100vh'
                spacing={0}
                justifyItems='start'
            >
                {/* <SidebarLeft menu={navLinks ?? []} /> */}
                <VStack w='full' align='start' h='100vh' spacing={0} className='scroll-custom'>
                    {/* <Header menu={navLinks ?? []} /> */}
                    {children}
                </VStack>
            </HStack>
        </AuthMiddleware>
    )
}

export default AuthLayout