import { Box, TextField, Typography, Grid, Button } from "@mui/material";
import { useState } from "react";
import { EntryFormValues } from "../../types";

interface Props {
    onCancel: () => void;
    onSubmit: (values: EntryFormValues) => void;
  }

const EntryForm = ({onCancel, onSubmit }: Props) => {
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [specialist, setSpecialist] = useState('');
    const [healthCheckRating, setHealtCheckRating] = useState(0);
    const [diagnosisCodes, setDiagnosisCodes] = useState(['']);

    const addEntry = () => {
        onSubmit({
            description,
            date,
            specialist,
            type: "HealthCheck",
            healthCheckRating,
            diagnosisCodes
        });
      };

    return (
        <Box sx={{ p: 2, border: '1px dashed grey' }}>
            <Typography variant="h6">Healthcheck Entry</Typography>
            <form onSubmit={addEntry}>               
                <TextField fullWidth 
                    label="Description"
                    variant="standard" 
                    onChange={({ target }) => setDescription(target.value)}
                />
                <br/>
                <TextField fullWidth
                    label="Date" 
                    variant="standard"
                    onChange={({ target }) => setDate(target.value)}
                />
                <br/>
                <TextField fullWidth 
                    label="Specialist" 
                    variant="standard"
                    onChange={({ target }) => setSpecialist(target.value)}
                />
                <br/>
                <TextField fullWidth 
                    label="Healthcheck Rating"
                    variant="standard"
                    onChange={({ target }) => setHealtCheckRating(Number(target.value))}
                />
                <br/>
                <TextField fullWidth
                    label="Diagnosis Codes"
                    variant="standard"
                    onChange={({ target }) => setDiagnosisCodes(target.value.replace('/ /g', '').split(','))}
                />
                <br/><br/>
                <Grid>
                    <Grid item>
                        <Button
                        color="error"
                        variant="contained"
                        style={{ float: "left" }}
                        type="button"
                        onClick={onCancel}
                        >
                        Cancel
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                        style={{
                            float: "right",
                        }}
                        type="submit"
                        variant="contained"
                        >
                        Add
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <br/><br/>
        </Box>
    );
};
export default EntryForm;