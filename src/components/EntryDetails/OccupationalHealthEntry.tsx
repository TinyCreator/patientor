import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

import { OccupationalHealthcareEntry } from "../../types";

interface Props {
    entry: OccupationalHealthcareEntry
}

const OccupationalHealthEntry = (props: Props) => {
    const entry = props.entry;

    return(
        <Card variant="outlined">
            <CardContent>
                <Typography>{entry.date} <BusinessCenterIcon/> {entry.employerName}</Typography>
                <Typography fontStyle={"italic"}>{entry.description}</Typography>
                { entry.sickLeave && <Typography fontWeight={"bold"}>Sick Leave: {entry.sickLeave.startDate} / {entry.sickLeave.endDate}</Typography>}
                <Typography>Diagnose by: {entry.specialist}</Typography>
            </CardContent>
        </Card>
    );
};
export default OccupationalHealthEntry;