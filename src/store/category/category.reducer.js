const INITIAL_STATE = {
    sections: [
        {
            title: "laptops and computers",
            id: 1,
            linkUrl: "shop/laptops-and-computers",
        },
        {
            title: "tv and audio",
            id: 2,
            linkUrl: "shop/tv-and-audio",
        },
        {
            title: "smartphones and smartwatches",
            id: 3,
            linkUrl: "shop/smartphones-and-smartwatches",
        },
        {
            title: "accessories",
            id: 4,
            linkUrl: "shop/accessories",
        },
        {
            title: "gaming",
            id: 5,
            linkUrl: "shop/gaming",
        },
        {
            title: "cameras",
            id: 6,
            linkUrl: "shop/cameras",
        },
        {
            title: "components",
            id: 7,
            linkUrl: "shop/components",
        },
        {
            title: "office equipment",
            id: 8,
            linkUrl: "shop/office-equipment",
        },
        {
            title: "smarthome",
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
