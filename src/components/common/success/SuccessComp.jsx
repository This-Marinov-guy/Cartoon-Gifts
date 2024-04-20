import React, { Fragment } from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import { Fade } from '@chakra-ui/react'

const SuccessComp = (props) => {
    return (
        <Fade in={true}>
            <Alert
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
            >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    {props.title}
                    {props.subTitle && <Fragment>
                        <br />
                        {props.subTitle}
                    </Fragment>}
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    {props.description}
                </AlertDescription>
            </Alert>
        </Fade>
    )
}

export default SuccessComp