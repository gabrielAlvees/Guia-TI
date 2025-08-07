import ReactDOM from "react-dom/client";
import {NavigateRoutes} from "./routes";
import GlobalStyles from "./styles/globalStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
        <GlobalStyles />
        <NavigateRoutes/>
    </>
);
