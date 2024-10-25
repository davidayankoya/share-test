import { BrandColor } from 'constants/theme'
import { Box, Spinner } from '@chakra-ui/react'


function Loader() {
    return (
        <Box
            width='full'
            height='full'
            display='flex'
            alignItems='center'
            justifyContent='center'
            position='fixed'
            backgroundColor='#fff'
            top={0}
            left={0}
        >
            <Spinner
                thickness='6px'
                speed='0.65s'
                emptyColor='gray.200'
                color={BrandColor.primary}
                width='90px'
                height='90px'
            />
        </Box>
    )

}

export default Loader