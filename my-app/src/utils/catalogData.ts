type CatalogProps = {
    id: number
    name: string
    nameURL: string
    subMenu?: string[]
    img?: string
}

const catalogData: CatalogProps[] = [
    {
        id: 1001,
        name: "Очищение",
        nameURL: "ochishheenie",
        subMenu: ["Демакияж", "Пенки и гели для умывания"],
        img: "https://saint-petersburg.kkshop.ru/assets/images/arrow-menu.png"
    },
    {
        id: 1002,
        name: "Пилинги и скрабы",
        nameURL: "pilingi-i-scrabi"
    },
    {
        id: 1003,
        name: "Тоники",
        nameURL: "toniki"
    },
    {
        id: 1004,
        name: "Кремы",
        nameURL: "krema",
        subMenu: ["Дневные и ночные кремы", "Массажные кремы и масла", "Кремы для области вокруг глаз", "BB и CC кремы"],
        img: "https://saint-petersburg.kkshop.ru/assets/images/arrow-menu.png"
    },
    {
        id: 1005,
        name: "Концентраты",
        nameURL: "kontsentrati"
    },
    {
        id: 1006,
        name: "Концентраты с ферментами",
        nameURL: "kontsentrati-s-fermentami"
    },
    {
        id: 1007,
        name: "Сыворотки",
        nameURL: "sivorotki"
    },
    {
        id: 1008,
        name: "Эссенции",
        nameURL: "essentcsii"
    },
    {
        id: 1009,
        name: "Эмульсии и гели",
        nameURL: "emulsii-i-gheli"
    },
    {
        id: 1010,
        name: "Наборы и аксессуары",
        nameURL: "nabori-i-acsesuari"
    },
    {
        id: 1011,
        name: "Маски для лица",
        nameURL: "maski-dlea-litsa",
        subMenu: ["Кремовые маски", "Гидрогелевые маски", "Кремы для области вокруг глаз", "Альгинатные маски", "Гипсовые маски"],
        img: "https://saint-petersburg.kkshop.ru/assets/images/arrow-menu.png"
    },
    {
        id: 1012,
        name: "Жемчужная линия",
        nameURL: "jemciujnaia-linia"
    },
    {
        id: 1013,
        name: "Уход за телом",
        nameURL: "uhod-za-telom",
        subMenu: ["Лосьоны, гели и скрабы", "Уход за кожей рук, ног и губ", "Массажные масла и кремы"],
        img: "https://saint-petersburg.kkshop.ru/assets/images/arrow-menu.png"
    },
    {
        id: 1014,
        name: "Уход за волосами",
        nameURL: "uhod-za-volosami",
        subMenu: ["Шампуни", "Бальзамы-ополаскиватели", "Для укладки и выпрямления", "Дополнительный уход"],
        img: "https://saint-petersburg.kkshop.ru/assets/images/arrow-menu.png"
    },
    {
        id: 1015,
        name: "Набор",
        nameURL: "nabor"
    }
]

export default catalogData
