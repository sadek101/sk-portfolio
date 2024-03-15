import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <h3>forteen world</h3>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;