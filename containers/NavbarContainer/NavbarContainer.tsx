'use client'
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import { NavInterface } from "@/types";
import { useScrollPosition } from "@/utils/scroll/useScrollPosition";
import { useWindowSize } from "@/utils/size/useWindowSize";
import { useEffect, useState } from "react";

export default function NavbarContainer({
    navType
}: {
    navType: NavInterface
}) {
    const { width } = useWindowSize();
    const { isAtTop } = useScrollPosition();
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleIsOpen = (isCLose?: boolean) => {
        if (isCLose) {
            setIsOpen(false)
        } else {
            setIsOpen(!isOpen)
        }
    }
    useEffect(() => {
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    useEffect(() => {
        if (width > 992) {
            setIsOpen(false)
        }
    }, [width])

    useEffect(() => {
        document.body.classList.toggle('no-scroll', isOpen);
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    return <NavbarComponent
        navType={navType}
        isAtTop={isAtTop}
        isOpen={isOpen}
        handleIsOpen={handleIsOpen}
    />
}