import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Entry } from "../../types";

interface Props {
    entry: Entry
}

const HospitalEntry = (props: Props) => {
    const entry = props.entry;

    return(
        <Card variant="outlined">
            <CardContent>
                <Typography>{entry.date} <LocalHospitalIcon/></Typography>
                <Typography fontStyle={"italic"}>{entry.description}</Typography>
                <Typography>Diagnose by: {entry.specialist}</Typography>
            </CardContent>
        </Card>
    );
};
export default HospitalEntry;