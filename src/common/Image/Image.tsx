'use client'

import { ImageProps } from '@chakra-ui/react'
import { BoxProps, Image as ChakraImage } from '@chakra-ui/react'

interface MyImageProps {
    alt: ImageProps['alt']
    // src: ImageProps['src']
    src?: string;
    imgW?: ImageProps['width']
    imgH?: ImageProps['height']
}

function Image({ alt, src, imgW, imgH, ...props }: BoxProps & MyImageProps) {
    return (
        <ChakraImage
            alt={alt ?? 'pic'}
            width={imgW ?? 100}
            height={imgH ?? 50}
            src={src ?? ''}
            {...props}
        />
        // <Box {...props}>
        // </Box>
    )
}

export default Image