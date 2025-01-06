import { TextField, Typography, Input, InputLabel } from "@mui/material";
import { SetStateAction } from "react";

interface FormProps {
    setEmployerName: React.Dispatch<SetStateAction<string>>;
    setStartDate: React.Dispatch<SetStateAction<string>>;
    setEndDate: React.Dispatch<SetStateAction<string>>;
}

const OccupationalVariant = ({setEmployerName, setStartDate, setEndDate}: FormProps) => {
    return(
        <>
            <TextField fullWidth label="Employer Name" variant="standard"
                onChange={({ target }) => setEmployerName(target.value)}
            />
            <br/><br/>
            <Typography variant="h6">Sick Leave</Typography>
            <InputLabel style={{ marginTop: 20 }} shrink>Starting Date</InputLabel>
            <Input type="date" fullWidth
                onChange={({ target }) => setStartDate(String(target.value))}
            />
            <InputLabel style={{ marginTop: 20 }} shrink>Ending Date</InputLabel>
            <Input type="date" fullWidth
                onChange={({ target }) => setEndDate(String(target.value))}
            />
        </>
    );
};
export default OccupationalVariant;