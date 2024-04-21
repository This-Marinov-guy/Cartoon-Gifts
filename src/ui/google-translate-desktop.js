import { changeLanguage } from "@utils/globals";
import React, { Fragment, useEffect, useState } from "react";
import icon_globe from "@assets/images/icons/icon_globe.svg";
import Image from "next/image";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerFooter,
} from '@chakra-ui/react'
import GoogleTranslate from "./google-translate";

const GoogleTranslateDesktop = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Fragment>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={() => setIsOpen(false)}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Change Language</DrawerHeader>

                    <DrawerBody>
                        <GoogleTranslate />
                    </DrawerBody>

                    <DrawerFooter>
                        <button type="submit" onClick={() => setIsOpen(false)} className="bd-btn-link m-auto">
                            Close
                        </button>
                    </DrawerFooter>

                </DrawerContent>
            </Drawer>
            <div onClick={() => setIsOpen(true)} className="google_btn bd-btn-link center_div">
                <Image
                    src={icon_globe}
                    style={{ width: "40px", height: "auto" }}
                    alt="Globe Icon"
                />
                <h6>Change Language</h6>
            </div>
        </Fragment>

    );
};

export default GoogleTranslateDesktop;
