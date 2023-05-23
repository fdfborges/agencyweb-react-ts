
import { Conector } from "../../components/Conector/Conector";
import { CustomersTrust } from "../../components/Customerstrust/CustomersTrust";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/header";
import { HomePresentation } from "../../components/HomePresentation/HomePresentation";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { ServicesResume } from "../../components/ServicesResume/ServicesResume";
import { ViewMore } from "../../components/Viewmore/ViewMore";



export function Home() {
    return (
        <>
            <Header />

            <HomePresentation />

            <Conector />

            <ServicesResume />

            <ViewMore />

            <CustomersTrust />

            <Newsletter />

            <Footer />
        </>
    )
}