import { Center, HStack } from '@chakra-ui/react'
import Image from 'common/Image/Image'
import React from 'react'
import TrophyImg from 'assets/img/trophy.png'
import { Text } from 'common/Text/Text'
import { BrandColor, TextColor } from 'constants/theme'


function UpgradeBanner() {
    return (
        <HStack
            w='full'
            pos='relative'
            bgColor={BrandColor.lemon}
            borderColor='rgba(158, 176, 49, 1)'
            borderWidth='2px'
            boxShadow='0px 4px 4px rgba(0, 0, 0, 0.1)'
        >
            <HStack w='full' h='full' align='center' borderTop='2px solid white' px='2rem' py='2rem' spacing='2rem'>
                <Image
                    src={TrophyImg}
                    alt='upgrade trophy'
                    w={54}
                    h='auto'
                />
                <Text
                    size='lg'
                    weight={700}
                    color={TextColor.primary}
                    textShadow='0px 1px 0px rgba(255, 255, 255, 1)'
                >
                    Go Pro Upgrade Now
                </Text>

                <Center px='1.5rem' py='1.5rem' pos='absolute' top='-2px' right='1rem' bgColor={BrandColor.blue}>
                    <Text size='lg' weight={700} color={BrandColor.yellow}>$1</Text>
                </Center>
            </HStack>
        </HStack>
    )
}

export default UpgradeBanner