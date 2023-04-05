import { appWindow } from "@tauri-apps/api/window"
import styles from "./titlebar.module.css"

export const Titlebar = () => {
    const handleMinimize = () => appWindow.minimize()
    const handleToggleMaximize = () => appWindow.toggleMaximize()
    const handleClose = () => appWindow.close()

    return <div data-tauri-drag-region className={styles.titlebar}>
        <TitlebarItem iconColor="#d82800" onClick={handleClose} alt="Close" />
        <TitlebarItem iconColor="#ffaa00" onClick={handleMinimize} alt="Minimize" />
        <TitlebarItem iconColor="#00df00" onClick={handleToggleMaximize} alt="Maximize" />
    </div>
}

type TitlebarItemProps = {
    iconColor: string
    onClick: () => void
    alt: string
}

const TitlebarItem = ({ iconColor, onClick, alt }: TitlebarItemProps) => {
    return <button className={styles.titlebarButton} onClick={onClick} title={alt}>
        <div className={styles.titlebarButtonIcon} style={{ backgroundColor: iconColor }} ></div>
    </button>
}
