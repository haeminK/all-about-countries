import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/UI/Header";
import Navigation from "../components/UI/Navigation";

const RootLayout = () => {
    const navigation = useNavigation();
    return (
        <>
            <Header />
            <Navigation />
            <main>
                {navigation.state === 'loading' ? <p>Loading...</p> : <Outlet />}
            </main>

        </>
    );
};

export default RootLayout;