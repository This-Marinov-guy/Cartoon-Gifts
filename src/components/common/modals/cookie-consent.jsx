"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
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

  const acceptCookies = () => {
    setVisible(false);
    localStorage.setItem(LOCAL_STORAGE_COOKIE_CONSENT, "1");
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#2D3748",
        color: "white",
        padding: "1.5rem",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <div style={{ flex: "1 1 auto", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <i
          className="fa-solid fa-cookie-bite"
          style={{ color: "#D2691E", fontSize: "1.5rem" }}
        ></i>
        <div>
          <strong style={{ display: "block", marginBottom: "0.25rem" }}>
            {t("cookies.title")}
          </strong>
          <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.9 }}>
            {t("cookies.content")}
          </p>
        </div>
      </div>
      <Button colorScheme="blue" onClick={acceptCookies}>
        {t("cookies.accept")}
      </Button>
    </div>
  );
};

export default CookieModal;
