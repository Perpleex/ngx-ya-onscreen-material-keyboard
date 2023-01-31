interface IKeyboardIcons {
    [key: string]: IMatIcon;
}
interface IMatIcon {
    name?: string;
    fontSet?: string;
    fontIcon?: string;
    svgIcon?: string;
}
export { IKeyboardIcons, IMatIcon };
