import styles from "./modal.module.css"

import React from "react"

interface Props {
    children: React.ReactNode
}

export function Modal({ children }: Props) {

    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.querySelector("#modal")

        modal!.classList.add("hide")
    }

    return (
        <div id="modal" className="hide">
            <div className={styles.fade} onClick={closeModal}></div>

            <div className={styles.modal}>
                {children}
            </div>

        </div>
    )
}