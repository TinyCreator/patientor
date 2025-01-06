import { TextField, Typography } from "@mui/material";
import { SetStateAction } from "react";

interface FormProps {
    setDischargeDate: React.Dispatch<SetStateAction<string>>;
    setCriteria: React.Dispatch<SetStateAction<string>>;
}

const HospitalVariant = ({ setDischargeDate, setCriteria }: FormProps) => {
    return(
        <>
            <br/><br/>
            <Typography variant="h6">Discharge</Typography>
            <TextField fullWidth label="Date" variant="standard"
                onChange={({ target }) => setDischargeDate(target.value)}
            />
            <TextField fullWidth label="Criteria" variant="standard"
                onChange={({ target }) => setCriteria(target.value)}
            />
        </>
    );
};
export default HospitalVariant;