import { HStack, VStack } from '@chakra-ui/react'
import Container from 'common/Container/Container'
import Image from 'common/Image/Image'
import React from 'react'
import ProfilePic from 'assets/img/profile-pic.png'
import { Text } from 'common/Text/Text'
import { BrandColor, TextColor } from 'constants/theme'
import UpgradeBanner from './components/UpgradeBanner'
import TodoList from './components/TodoList'
import { useAppDispatch, useAppSelector } from 'hooks/useApp'
import TodoForm from './components/TodoForm'
import { capCase } from 'utils/utils'
import { motion } from 'framer-motion'
import { useScreenSize } from 'hooks/useScreen'
import ModalDrawer from 'common/Modal/ModalDrawer'
import { toggleModal } from 'store/uiSlice'


function Home() {
    const dispatch = useAppDispatch()
    const { modalToggled } = useAppSelector(s => s.ui)
    const { isMobile } = useScreenSize()

    return (
        <Container>
            <HStack w='full' h='full' align='start' spacing='0rem' justify='center' transition='all 1s ease-out' overflowY='auto' className='scroll-custom yesss'>
                {/* Left */}
                <VStack w={['full', 'full', '30%']} h={['90%', '90%', 'full']} spacing='0' bgColor={BrandColor.offWhite} boxShadow={!!modalToggled.action ? '4px 0px 5px rgba(0, 0, 0, 0.15)' : ''} zIndex={2}>
                    <HStack w='full' align='start' spacing='1.5rem' px='2rem' py='1.5rem' bgColor={BrandColor.primary}>
                        <Image
                            src={ProfilePic}
                            alt='profile picture'
                            w={50}
                            h={50}
                            borderRadius='full'
                        />
                        <VStack w='full' align='start' spacing='.5rem'>
                            <Text weight={500} color={TextColor.white} textShadow='0px 2px 0px rgba(0, 0, 0, 1)'>Hello, Jhon</Text>
                            <Text weight={100} color={TextColor.white} lineHeight={1.2} textShadow='0px 2px 0px rgba(0, 0, 0, 1)' fontStyle='italic' size='25px'>What are your plans<br/> for today?</Text>
                        </VStack>
                    </HStack>

                    <UpgradeBanner />

                    <TodoList />
                </VStack>

                
                {/* Right */}
                {!!modalToggled.action && !isMobile &&
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ width: '45%', height: '100%' }}
                    >
                        <VStack w='full' h='full' spacing='0' bgColor={BrandColor.offWhite}>
                            <HStack w='full' align='center' justify='center' px='2rem' py='3.5rem' bgColor={BrandColor.primary}>
                                <Text weight={500} color={TextColor.white} size='xl' textShadow='0px 2px 0px rgba(0, 0, 0, 1)'>{capCase(modalToggled.action)} Task</Text>
                            </HStack>

                            <TodoForm details={modalToggled.item} />
                        </VStack>
                    </motion.div>
                }
            </HStack>

            {isMobile && !!modalToggled.action &&
                <ModalDrawer
                    isOpen={!!modalToggled.action}
                    onClose={() => dispatch(toggleModal({ action: false, item: undefined }))}
                    header={`${capCase(modalToggled.action)} Task`}
                    bgColor={BrandColor.offWhite}
                    body={
                        <VStack w='full' h='full' spacing='0' bgColor={BrandColor.offWhite}>
                            <TodoForm details={modalToggled.item} />
                        </VStack>
                    }
                />
            }
        </Container>
    )
}

export default Home