import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { SetStateAction, useState } from "react";

interface FormProps {
    setHealthCheckRating: React.Dispatch<SetStateAction<number>>;
}

const HealthCheckVariant = ({ setHealthCheckRating }: FormProps) => {
    const [healthState, setHealthState] = useState <number>();

    return(
        <>
            <br/><br/>
            <ToggleButtonGroup color="secondary" fullWidth exclusive value={healthState}
                onChange={(
                    _event: React.MouseEvent<HTMLElement>,
                    healthState: number,
                  ) => {
                    setHealthState(Number(healthState));
                    setHealthCheckRating(Number(healthState));
                }}>
                <ToggleButton value={0}>Healthy</ToggleButton>
                <ToggleButton value={1}>LowRisk</ToggleButton>
                <ToggleButton value={2}>HighRisk</ToggleButton>
                <ToggleButton value={3}>CriticalRisk</ToggleButton>
            </ToggleButtonGroup>
            <br/>
        </>
    );
};
export default HealthCheckVariant;