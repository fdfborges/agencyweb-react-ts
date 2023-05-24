
import { ButtonBackToTop } from "../../components/ButtonBackToTop/ButtonBackToTop";
import { Conector } from "../../components/Conector/Conector";
import { CustomersTrust } from "../../components/Customerstrust/CustomersTrust";
import { HomePresentation } from "../../components/HomePresentation/HomePresentation";

import { ServicesResume } from "../../components/ServicesResume/ServicesResume";
import { ViewMore } from "../../components/Viewmore/ViewMore";



export function Home() {
    return (
        <>
            <HomePresentation />

            <ButtonBackToTop />

            <Conector />

            <ServicesResume />

            <ViewMore />

            <CustomersTrust />
        </>
    )
}