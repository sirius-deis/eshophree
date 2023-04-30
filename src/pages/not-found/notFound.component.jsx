import { Link } from "react-router-dom";

import styles from "./notFound.styles.module.css";

import Search from "../../components/search/search.component";
import Button from "../../components/button/button.component";

const NotFound = () => {
    return (
        <div className="container">
            <div className={styles["not-found"]}>
                <h1 className={styles["not-found__header"]}>404</h1>
                <h2 className={styles["not-found__sub"]}>Opps! PAGE NOT BE FOUND</h2>
                <p className={styles["not-found__text"]}>
                    Sorry but the page you are looking for does not exist, have been removed, name changed or is
                    temporarily unavailable.
                </p>
                <Search rounded={true} withDropdown={false} />
                <Button rounded={true}>
                    <Link className={styles["not-found__link"]} to="/">
                        Back to home page
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
