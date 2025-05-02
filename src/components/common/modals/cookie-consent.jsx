"use client";

import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

const CookieModal = () => {
  const { t } = useTranslation("common");

  const LOCAL_STORAGE_COOKIE_CONSENT = "CG-cookie-consent";

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Run only on client
    const hasConsent =
      localStorage.getItem(LOCAL_STORAGE_COOKIE_CONSENT) === "1";
    setVisible(!hasConsent);
  }, []);

  const closeModal = () => {
    setVisible(false);
    localStorage.setItem(LOCAL_STORAGE_COOKIE_CONSENT, "1");
  };

  return (
    <Modal
      isOpen={visible}
      closeOnEsc={false}
      closeOnOverlayClick={false}
      onClose={closeModal}
      isCentered
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {t("cookies.title")}{" "}
          <i
            className="fa-solid fa-cookie-bite"
            style={{ color: "#D2691E" }}
          ></i>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>{t("cookies.content")}</p>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={closeModal}>
            {t("cookies.accept")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CookieModal;
