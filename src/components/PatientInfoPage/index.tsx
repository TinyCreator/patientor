import { Typography } from "@mui/material";
import { Patient } from "../../types";
import { useEffect, useState } from "react";

import patientService from "../../services/patients";
import { Male, Female } from "@mui/icons-material";

interface Props {
    id: string | undefined;
}

const PatientInfoPage = (props: Props) => {
    const [patient, setPatient] = useState<Patient>();

    useEffect(() => {
        const fetchPatientData = async (id: string) => {
          const data = await patientService.getPatient(id);
          setPatient(data);
        };
        if(props.id){
            void fetchPatientData(props.id);
        }
    }, [props.id]);

    return (
        <>
        {!patient &&
            <Typography align="center" variant="h4">Patient not found</Typography>
        }
        <div>
            <br/><br/>
            <Typography variant="h4">{patient?.name}{patient?.gender == "male" ? <Male/> : <Female/> }</Typography>
            <Typography variant="body1">SSN: {patient?.ssn}</Typography>
            <Typography variant="body1">Occupation: {patient?.occupation}</Typography>
        </div>
        </>
    );
};
export default PatientInfoPage;