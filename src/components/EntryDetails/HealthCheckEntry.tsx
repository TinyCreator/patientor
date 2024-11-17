import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import {Favorite, MonitorHeart} from '@mui/icons-material/';

import { HealthCheckEntry } from "../../types";
import { yellow, red, green } from '@mui/material/colors';

interface Props {
    entry: HealthCheckEntry
}

const HealthCheck = (props: Props) => {
    const entry = props.entry;
    return(
        <Card variant="outlined">
            <CardContent>
                <Typography>{entry.date} <MonitorHeart/></Typography>
                <Typography fontStyle={"italic"}>{entry.description}</Typography>
                { entry.healthCheckRating == 0 &&
                    <Favorite sx={{ color: green[500] }}/>
                }
                { entry.healthCheckRating == 1 &&
                    <Favorite sx={{ color: yellow[500] }}/>
                }
                { entry.healthCheckRating == 2 &&
                    <Favorite sx={{ color: red[500] }}/>
                }
                { entry.healthCheckRating == 3 &&
                    <Favorite/>
                }
                <Typography>Diagnose by: {entry.specialist}</Typography>
            </CardContent>
        </Card>
    );
};
export default HealthCheck;