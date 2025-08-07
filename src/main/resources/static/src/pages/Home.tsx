import {

} from "../styles/homeStyles.ts";

import {Navbar} from "./Navbar.tsx";
import {Body} from "./Body.tsx";
import {Section} from "./Section.tsx";

export const Home = () => {
    return (
        <>
            <Navbar />
            <Body />
            <Section />
        </>
    );
};