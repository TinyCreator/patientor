import { Box, Select, MenuItem, Button, Grid } from "@mui/material";
import { EntryFormValues } from "../../types";
import { useState } from "react";
import HealthCheckVariant from "./FormVariants/HealtCheckVariant";
import CommonFormFields from "./FormVariants/CommonFormFields";
import OccupationalVariant from "./FormVariants/OccupationalVariant";
import HospitalVariant from "./FormVariants/HospitalVariant";

interface Props {
    codes: string[];
    onCancel: () => void;
    onSubmit: (values: EntryFormValues) => void;
}

const EntryForm = ({ codes, onCancel, onSubmit }: Props) => {
    //Common fields for an Entry
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [specialist, setSpecialist] = useState('');
    const [healthCheckRating, setHealthCheckRating] = useState(0);
    const [diagnosisCodes, setDiagnosisCodes] = useState(['']);
    const [type, setType] = useState('HealthCheck');
    //Fields for Occupational Variant
    const [employerName, setEmployerName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    //Fields for Hospital Variant
    const [dischargeDate, setDischargeDate] = useState('');
    const [criteria, setCriteria] = useState('');

    const addEntry = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const baseEntry = {
            description, date, specialist, diagnosisCodes
        };

        switch(type){
            case("HealthCheck"):
                onSubmit({...baseEntry,
                    healthCheckRating,
                    type: "HealthCheck",
                });
                break;
            case("OccupationalHealthcare"):
                onSubmit({...baseEntry,
                    employerName,
                    type: "OccupationalHealthcare",
                    sickLeave: {
                        startDate, 
                        endDate
                    }
                });
                break;
            case("Hospital"):
                onSubmit({...baseEntry,
                    type: "Hospital",
                    discharge: {
                        date: dischargeDate,
                        criteria
                    }                    
                });
                break;
        }
    };

    return (        
        <Box sx={{ p: 2, border: '1px dashed grey' }}>
            <Select variant="filled" fullWidth value={type} onChange={({ target }) => setType(target.value)}>
                <MenuItem key="HealthCheck" value="HealthCheck">Health Check</MenuItem>
                <MenuItem key="Hospital" value="Hospital">Hospital</MenuItem>
                <MenuItem key="OccupationalHealthcare" value="OccupationalHealthcare">Occupational Healthcare</MenuItem>
            </Select>
            <form onSubmit={addEntry}>
                <br/>
                <CommonFormFields
                    codes={codes}
                    setDescription={setDescription}
                    setDate={setDate} 
                    setSpecialist={setSpecialist}
                    setDcodes={setDiagnosisCodes}
                />
                { type == "HealthCheck" && 
                    <>
                        <HealthCheckVariant setHealthCheckRating={setHealthCheckRating}/>
                    </>                    
                }
                { type == "OccupationalHealthcare" &&
                    <>
                        <OccupationalVariant 
                            setEmployerName={setEmployerName}
                            setStartDate={setStartDate}
                            setEndDate={setEndDate}
                        />
                    </>
                }
                { type == "Hospital" &&
                    <>
                        <HospitalVariant 
                            setDischargeDate={setDischargeDate}
                            setCriteria={setCriteria}
                        />
                    </>
                }
                <br/>
                <Grid>
                    <br/>
                    <Grid item>
                        <Button color="error" variant="contained" style={{ float: "left" }} type="button" onClick={onCancel}>Cancel</Button>
                    </Grid>
                    <Grid item>
                        <Button style={{float: "right"}} type="submit" variant="contained">Add</Button>
                    </Grid>
                </Grid>
            </form>
            <br/><br/>
        </Box>
    );
};
export default EntryForm;