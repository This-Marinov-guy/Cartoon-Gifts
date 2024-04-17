import { useCallback } from "react";
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { useStore } from "src/stores/storeContext";

export const useHttpClient = () => {
    const { commonStore } = useStore();
    const { loading } = commonStore;
    const toast = useToast()

    const sendRequest = useCallback(
        async (url, method = "GET", data = null, headers = {}) => {
            commonStore.setLoading(true);
            try {
                const response = await axios.request({
                    url: window.location.origin + url,
                    method,
                    data,
                    config: {
                        ...headers
                    }
                });

                if (response.data.status === false && response.data.message) {
                    toast({
                        title: response.data.message,
                        status: 'error',
                        duration: 10000,
                        isClosable: true,
                    })
                }
                return response.data;
            } catch (err) {
                toast({
                    title: 'Accept our apologies - something went wrong, please try again later or contact us through email!',
                    status: 'error',
                    duration: 10000,
                    isClosable: true,
                })
            } finally {
                commonStore.setLoading(false);
            }
        },
        []
    );

    return { loading, sendRequest };
};
