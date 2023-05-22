import { AResume } from "./ARResume/ARResume";
import { ApresentationResume } from "./ApresentationResume/ApresentationResume";
import { MobileResume } from "./MobileResume/MobileResume";
import { WebMobileResume } from "./WebMobileResume/WebMobileResume";

export function ServicesResume() {
    return (
        <>
            <ApresentationResume />

            <MobileResume />

            <WebMobileResume />

            <AResume />
        </>
    )
}