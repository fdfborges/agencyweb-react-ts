import { AboutUsApresentation } from "../../components/AboutUsApresentation/AboutUsApresentation";
import { BlockContactUs } from "../../components/BlockContactUs/BlockContactUs";
import { CarouselOurTeam } from "../../components/CarouselOurTeam/CarouselOurTeam";
import { ParagraphBlock } from "../../components/ParagraphBlock/ParagraphBlock";


export function AboutUs() {
    return (
        <>
            <AboutUsApresentation />
            
            <ParagraphBlock />

            <BlockContactUs />

            <CarouselOurTeam />
        </>
    )
}
