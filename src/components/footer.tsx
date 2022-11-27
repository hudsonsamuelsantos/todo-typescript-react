import styles from "./footer.module.css"

export function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                <span>React + TS Todo</span> @ 2022
            </p>
        </footer>
    )
}