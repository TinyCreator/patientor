import { Input, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from "@mui/material";
import { SetStateAction, useState } from "react";


interface FormProps {
    codes: string[];
    setDescription: React.Dispatch<SetStateAction<string>>;
    setDate: React.Dispatch<SetStateAction<string>>;
    setSpecialist: React.Dispatch<SetStateAction<string>>;
    setDcodes: React.Dispatch<SetStateAction<string[]>>;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const CommonFormFields = ({
    codes, setDescription, setDate, setSpecialist, setDcodes
    }: FormProps) => {
        const [diagnosisCodes, setDiagnosisCodes] = useState<string[]>([]);

        const handleChange = (event: SelectChangeEvent<string[]>) => {
            const {target: { value }} = event;
            setDiagnosisCodes(typeof value === 'string' ? value.split(',') : value);
            setDcodes(diagnosisCodes);
        };


    return(
        <>
            <TextField fullWidth label="Description" variant="standard" 
                onChange={({ target }) => setDescription(target.value)}
            />
            <br/>
            <InputLabel style={{ marginTop: 20 }} shrink>Entry Date</InputLabel>
            <Input type="date" fullWidth
                onChange={({ target }) => setDate(String(target.value))}
            />
            <br/>
            <TextField fullWidth label="Specialist" variant="standard"
                onChange={({ target }) => setSpecialist(target.value)}
            />
            <br/>
            <InputLabel shrink style={{ marginTop: 20 }}>Diagnosis Codes</InputLabel>
            <Select
                fullWidth
                multiple
                value={diagnosisCodes}
                onChange={handleChange}
                input={<OutlinedInput/>}
                MenuProps={MenuProps}
            >
            {codes.map((code) => (
                <MenuItem key={code} value={code}>{code}</MenuItem>
            ))}
            </Select>
        </>
    );
};
export default CommonFormFields;