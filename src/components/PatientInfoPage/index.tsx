import { Typography } from "@mui/material";
import { Patient /*,Diagnosis*/ } from "../../types";
import { useEffect, useState } from "react";

import patientService from "../../services/patients";
//import diagnoseService from "../../services/diagnoses"
import { Male, Female } from "@mui/icons-material";
import EntryDetails from "../EntryDetails/EntryDetails";

interface Props {
    id: string | undefined;
}

const PatientInfoPage = (props: Props) => {
    const [patient, setPatient] = useState<Patient>();
    //const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);

    useEffect(() => {
        const fetchPatientData = async (id: string) => {
            const data = await patientService.getPatient(id);
            setPatient(data);
        };

        /*const fetchDiagnoses = async () => {
            const data = await diagnoseService.getAll();
            setDiagnoses(data);
        };*/
        
        if(props.id){
            void fetchPatientData(props.id);
        }
        //void fetchDiagnoses();
    }, [props.id]);

    return (
        <>
        {!patient ? <Typography fontStyle="italic" fontWeight="bold" align="center" variant="h4">Patient not found</Typography> :
         <div>
            <br/><br/>
            <Typography variant="h4">{patient.name}{patient.gender == "male" ? <Male/> : <Female/> }</Typography>
            <Typography variant="body1">SSN: {patient.ssn}</Typography>
            <Typography variant="body1">Occupation: {patient.occupation}</Typography>
            <br/><br/>
            <Typography variant="h5">Entries</Typography>
            {patient.entries.map( entry => 
                <div key={entry.id}>
                    <EntryDetails entry={entry}/>
                </div>
            )}
        </div>
        }
        </>
    );
};
export default PatientInfoPage;