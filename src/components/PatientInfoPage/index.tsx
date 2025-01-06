import { Alert, Typography } from "@mui/material";
import { EntryFormValues, Patient ,Diagnosis } from "../../types";
import { useEffect, useState } from "react";

import patientService from "../../services/patients";
import diagnoseService from "../../services/diagnoses";
import { Male, Female } from "@mui/icons-material";
import EntryDetails from "../EntryDetails/EntryDetails";
import EntryForm from "./EntryForm";
import axios from "axios";

interface Props {
    id: string | undefined;
}

const PatientInfoPage = ({id}: Props) => {
    const [patient, setPatient] = useState<Patient>();
    const [error, setError] = useState<string>();
    const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);

    useEffect(() => {
        const fetchPatientData = async (id: string) => {
            const data = await patientService.getPatient(id);
            setPatient(data);
        };        

        const fetchDiagnoses = async () => {
            const data = await diagnoseService.getAll();
            setDiagnoses(data);
        };
        
        if(id){
            void fetchPatientData(id);
        }
        
        void fetchDiagnoses();
    }, [id]);

    const codes = diagnoses.map( diagnosis => diagnosis.code);

    const sumbitEntry = async(values: EntryFormValues) => {
        try {
            const entry = await patientService.createEntry(id, values);
            if(typeof(entry) == 'string'){
                setError(entry);
            }else if(entry){
                patient?.entries.push(entry);            
            }
        } catch (e: unknown) {
            if (axios.isAxiosError(e)) {
              if (e?.response?.data && typeof e?.response?.data === "string") {
                const message = e.response.data.replace('Something went wrong. Error: ', '');
                setError(message);
              } else {
                setError("Unrecognized axios error");
              }
            } else {
              setError("Unknown error");
            } 
        }
    };

    return (
        <>
        {!patient ? <Typography fontStyle="italic" fontWeight="bold" align="center" variant="h4">Patient not found</Typography> :
         <div>
            <br/><br/>
            <Typography variant="h4">{patient.name}{patient.gender == "male" ? <Male/> : <Female/> }</Typography>
            <Typography variant="body1">SSN: {patient.ssn}</Typography>
            <Typography variant="body1">Occupation: {patient.occupation}</Typography>
            <br/>
            { error &&
                <>
                    <Alert severity="error">{error}</Alert>
                    <br/>
                </>   
            }
            <EntryForm 
                codes={codes}
                onSubmit={sumbitEntry} onCancel={() => {}}/>
            <br/>
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