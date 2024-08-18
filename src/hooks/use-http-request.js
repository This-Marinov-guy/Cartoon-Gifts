import { useCallback } from "react";
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { useStore } from "src/stores/storeContext";
import useTranslation from "next-translate/useTranslation";
import { isProd } from "@utils/globals";

export const useHttpClient = () => {
    const { commonStore } = useStore();
    const { loading } = commonStore;
    const toast = useToast()
    const { t } = useTranslation("hooks");

    const sendRequest = useCallback(
        async (url, method = "GET", data = null, headers = {}) => {
            commonStore.setLoading(true);
            try {
                // const separator = url.includes('?') ? '&' : '?';
                // const urlWithLang = `${url}${separator}lang=${lang ?? 'en'}`;

                const response = await axios.request({
                    url,
                    method,
                    data,
                    headers,
                });

                if (response.data.status === false && response.data.message) {
                    toast({
                        title: t(`api:${response.data.message}`),
                        status: 'error',
                        duration: 10000,
                        isClosable: true,
                    })
                }

                return response.data;
            } catch (err) {
                if (!isProd()) console.log(err);
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
