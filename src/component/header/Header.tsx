import DropDownMenu, {DropDownMenuType} from "./DropDownMenu.tsx";
import Links from "../../constants/Links.ts";
import Img from "../basic/Img.tsx";
import DropDownMenuIcon from "../../svg/DropDownMenuIcon.tsx";
import LogoImage from "../../assets/logo.png"
import style from "./Header.module.css"

const data: { title: string, href: string, dropDownData: DropDownMenuType | null }[] = [
    {
        title: "Products", href: Links["Products"], dropDownData: {
            menu1Title: "What We Offer",
            menu1ListItems: [
                {title: "P2P Escrow Services", href: Links["P2P Escrow Services"]},
                {title: "Bill Payment", href: Links["Bill Payment"]},
                {title: "Airtime and Data", href: Links["Airtime and Data"]},
                {title: "Bet and Events", href: Links["Bet and Events"]},
            ],
            menu2Title: "Discover More",
            menu2Text: "Lorem ipsum dolor sit amet consectetur. Habitasse pretium amet amet metus. Aliquam vitae eu vitae leo eget. Et mauris purus facilisis vel urna in volutpat volutpat iaculis. Magna phasellus aliquam sed felis vitae eu diam fringilla.",
            menu2Link: "Learn More",
        }
    },
    {title: "Solutions", href: Links["Solutions"], dropDownData: null},
    {title: "About Us", href: Links["About Us"], dropDownData: null},
    {title: "Help & Support", href: Links["Help & Support"], dropDownData: null},
]


const Header = () => {
    return (
        <header className={"flex"}>
            <a className={"mr-auto w-44 py-1"} href={"/"}><Img src={LogoImage} alt={"Logo"}/> </a>
            <ul className={"flex gap-4 items-center mr-8"}>
                {data.map((x, i) => <li key={i} className={style["header-list-item"]}>
                    <a href={x.href}
                       className={"font-medium leading-6 tracking-wide px-2 py-3 "}>
                        {x.title}
                        {x.dropDownData ? <button className={"inline-block ml-2"}><DropDownMenuIcon className={"fill-black"}/></button> : <></>}
                    </a>
                    {x.dropDownData ? <DropDownMenu {...x.dropDownData} />: <></>}
                </li>)}
            </ul>
            <a className={"w-52 h-12 px-2.5 py-2 rounded text-xl font-semibold leading-5 text-white bg-light-blue text-center"}
               href={Links["Account"]}>Account</a>
        </header>
    )
}
export default Header
