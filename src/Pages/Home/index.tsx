
import { Conector } from "../../components/Conector/Conector";
import { Header } from "../../components/Header/header";
import { HomePresentation } from "../../components/HomePresentation/HomePresentation";
import { ServicesResume } from "../../components/ServicesResume/ServicesResume";


export function Home(){
    return(
        <>
        <Header />
        
        <HomePresentation />

        <Conector />

        <ServicesResume />

        
        </>
    )
}