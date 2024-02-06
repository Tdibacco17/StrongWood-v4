export interface ImgDataInterface {
    imgSrc: string,
    imgAlt: string,
    objPosition: string
}

export interface IconProps {
    fill: string,
    // size: "mini" | "small" | "medium",
    hover: boolean,
    link?: string,
    isButton?: () => void,
    isDesktop?: boolean,
    isMobile?: boolean
}

export type NavInterface = "primary" | "secondary"