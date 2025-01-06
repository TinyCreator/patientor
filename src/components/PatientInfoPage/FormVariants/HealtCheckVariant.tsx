import { TextField } from "@mui/material";
import { SetStateAction } from "react";

interface FormProps {
    setHealthCheckRating: React.Dispatch<SetStateAction<number>>;
}

const HealthCheckVariant = ({ setHealthCheckRating }: FormProps) => {
    return(
        <>
            <TextField fullWidth label="Healthcheck Rating" variant="standard"
                onChange={({ target }) => setHealthCheckRating(Number(target.value))}
            />
            <br/>
        </>
    );
};
export default HealthCheckVariant;