import { TextField } from "@mui/material";
import { SetStateAction } from "react";


interface FormProps {
    setDescription: React.Dispatch<SetStateAction<string>>;
    setDate: React.Dispatch<SetStateAction<string>>;
    setSpecialist: React.Dispatch<SetStateAction<string>>;
    setDiagnosisCodes: React.Dispatch<SetStateAction<string[]>>;
}

const CommonFormFields = ({
    setDescription, setDate, setSpecialist, setDiagnosisCodes
    }: FormProps) => {

    return(
        <>
            <TextField fullWidth label="Description" variant="standard" 
                onChange={({ target }) => setDescription(target.value)}
            />
            <br/>
            <TextField fullWidth label="Date" variant="standard"
                onChange={({ target }) => setDate(target.value)}
            />
            <br/>
            <TextField fullWidth label="Specialist" variant="standard"
                onChange={({ target }) => setSpecialist(target.value)}
            />
            <br/>
            <TextField fullWidth label="Diagnosis Codes" variant="standard"
                onChange={({ target }) => setDiagnosisCodes(target.value.replace('/ /g', '').split(','))}
            />
        </>
    );
};
export default CommonFormFields;