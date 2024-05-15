import React from 'react'
import { Skeleton, Stack } from '@chakra-ui/react'

const SkeletonOne = () => {
    return (
        <Stack style={{ margin: '20px' }}>
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
        </Stack>
    )
}

export default SkeletonOne