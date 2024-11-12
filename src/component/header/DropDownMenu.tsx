import styles from "./Header.module.css"

const DropDownMenu = ({menu1Title, menu1ListItems, menu2Title, menu2Text, menu2Link}: DropDownMenuType) => {
    return <div className={`gap-8 absolute w-[48vw] bg-red ${styles["dropdown-menu"]} hidden bg-red-700 px-10 py-12 grid-cols-2`}>
        <div>
            <h2 className={"text-xl font-medium leading-5 tracking-wide pb-4 mb-6 border-b border-b-black/20"}>{menu1Title}</h2>
            <ul className={"space-y-4"}>
                {menu1ListItems.map(x => <li><a href={x.href}>{x.title}</a></li>)}
            </ul>
        </div>
        <div className={"border border-b p-6 space-y-1"}>
            <h2 className={"text-lg font-medium leading-5 tracking-tight"}>{menu2Title}</h2>
            <p className={"text-black/80 text-sm font-medium leading-6"}>{menu2Text}</p>
            <a href={menu2Link} className={"w-36 h-12 px-2.5 py-2 rounded font-semibold leading-5 bg-light-blue text-white mt-5 inline-block text-center"}>Learn More</a>
        </div>
    </div>;
}

export default DropDownMenu;

export type DropDownMenuType = {
    menu1Title: string, menu1ListItems: { title: string, href: string }[]
    menu2Title: string, menu2Text: string, menu2Link: string
}