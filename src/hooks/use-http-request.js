import { useCallback } from "react";
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { useStore } from "src/stores/storeContext";
import useTranslation from "next-translate/useTranslation";

export const useHttpClient = () => {
    const { commonStore } = useStore();
    const { loading } = commonStore;
    const toast = useToast()
    const { t } = useTranslation("hooks");

    const sendRequest = useCallback(
        async (url, method = "GET", data = null, headers = {}) => {
            commonStore.setLoading(true);
            try {
                const response = await axios.request({
                    url,
                    method,
                    data,
                    headers,
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
                    title: t('use-http-request.errorTitle'),
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
