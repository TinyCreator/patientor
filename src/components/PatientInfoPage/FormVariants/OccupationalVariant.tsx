import { TextField, Typography } from "@mui/material";
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
            <TextField fullWidth label="Start Date" variant="standard"
                onChange={({ target }) => setStartDate(target.value)}
            />
            <TextField fullWidth label="Ending Name" variant="standard"
                onChange={({ target }) => setEndDate(target.value)}
            />
        </>
    );
};
export default OccupationalVariant;