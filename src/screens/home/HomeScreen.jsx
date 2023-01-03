import WorkoutHomeCard from "./WorkoutHomeCard";
import {Box, Grid} from "@mui/material";
import {useWidth} from "../../theming/useWidth";
import {getOrDefaultKey} from "../../util/ObjectExtensions";
import CurrentDatePicker from "../nav/CurrentDatePicker";
import {useState} from "react";
import {DateTime} from "luxon";
import {homeWorkouts} from "./HomeWorkouts";

export default function HomeScreen() {
    const [selectedDate, setSelectedDate] = useState(DateTime.now());

    const onDateSelected = (newDate) => {
        setSelectedDate(newDate);
    }

    const width = useWidth();
    const homeCards = Object.entries(homeWorkouts)
        .sort((a, b) => getOrDefaultKey(a, width) - getOrDefaultKey(b, width))
        .map(([key, workoutCard]) => <Grid item key={key} xs={12} sm={8} lg={4}>
            <WorkoutHomeCard title={workoutCard.title} buttonIcon={workoutCard.icon} buttonText={workoutCard.text}/>
        </Grid>)
    return <Box sx={{margin: "0 auto", mt: 2}}>
        <CurrentDatePicker selectedDate={selectedDate} onDateChange={onDateSelected} />
        <Grid container justifyContent="center">
            {homeCards}
        </Grid>
    </Box>
}