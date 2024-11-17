import { Entry } from "../../types";
import HealthCheck from "./HealthCheckEntry";
import HospitalHealthEntry from "./HospitalEntry";
import OccupationalHealthEntry from "./OccupationalHealthEntry";


const EntryDetails: React.FC<{ entry: Entry }> = ({entry}) => {
    switch(entry.type) {
        case "Hospital":
            return(
                <HospitalHealthEntry entry={entry}/>
            );
        case "OccupationalHealthcare":
            return(
                <OccupationalHealthEntry entry={entry}/>
            );
        case "HealthCheck":
            return(
                <HealthCheck entry={entry}/>
            );
        default:
            return(<></>);
    }

};
export default EntryDetails;