import {
    MdComputer,
    MdOutlineScreenshotMonitor,
    MdSmartphone,
    MdUsb,
    MdOutlineAddAPhoto,
    MdPrint,
} from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { TbCpu, TbSmartHome } from "react-icons/tb";

const INITIAL_STATE = {
    sections: [
        {
            title: "laptops and computers",
            icon: MdComputer,
            id: 1,
            linkUrl: "shop/laptops-and-computers",
        },
        {
            title: "tv and audio",
            icon: MdOutlineScreenshotMonitor,
            id: 2,
            linkUrl: "shop/tv-and-audio",
        },
        {
            title: "smartphones and smartwatches",
            icon: MdSmartphone,
            id: 3,
            linkUrl: "shop/smartphones-and-smartwatches",
        },
        {
            title: "accessories",
            icon: MdUsb,
            id: 4,
            linkUrl: "shop/accessories",
        },
        {
            title: "gaming",
            icon: FaGamepad,
            id: 5,
            linkUrl: "shop/gaming",
        },
        {
            title: "cameras",
            icon: MdOutlineAddAPhoto,
            id: 6,
            linkUrl: "shop/cameras",
        },
        {
            title: "components",
            icon: TbCpu,
            id: 7,
            linkUrl: "shop/components",
        },
        {
            title: "office equipment",
            icon: MdPrint,
            id: 8,
            linkUrl: "shop/office-equipment",
        },
        {
            title: "smarthome",
            icon: TbSmartHome,
            id: 9,
            linkUrl: "shop/smarthome",
        },
    ],
};

const categoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default categoryReducer;
