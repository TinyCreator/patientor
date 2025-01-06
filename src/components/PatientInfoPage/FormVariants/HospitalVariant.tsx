import { Input, InputLabel, TextField, Typography } from "@mui/material";
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
            <InputLabel style={{ marginTop: 20 }} shrink>Discharge Date</InputLabel>
            <Input type="date" fullWidth
                onChange={({ target }) => setDischargeDate(String(target.value))}
            />
            <TextField fullWidth label="Criteria" variant="standard"
                onChange={({ target }) => setCriteria(target.value)}
            />
        </>
    );
};
export default HospitalVariant;