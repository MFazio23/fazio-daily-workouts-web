import {TextField} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterLuxon} from "@mui/x-date-pickers/AdapterLuxon";

export default function CurrentDatePicker({selectedDate, onDateChange}) {

    return (
        <LocalizationProvider dateAdapter={AdapterLuxon}>
            <DatePicker
                inputFormat="yyyy/MM/dd"
                value={selectedDate}
                onChange={onDateChange}
                renderInput={(params) => {
                    return (
                        <TextField
                            {...params}
                        />
                    );
                }}
            />
        </LocalizationProvider>
    )
}