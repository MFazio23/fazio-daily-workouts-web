import {Box, Grid, Typography} from "@mui/material";
import appLogo from "../../assets/images/fitness.png";

export default function SplashScreen() {
    return <Box sx={{margin: "0 auto", maxWidth: 960}}>
        <Grid container justifyContent="center" alignItems="center" direction="column">
            <Grid item textAlign="center">
                <Typography variant="h3" sx={{mt: 2}}>Fazio Daily Workouts</Typography>
            </Grid>
            <Grid item>
                <Box component="img" alt="Fazio Daily Workouts logo" src={appLogo} sx={{mt: 2, width: 160}}/>
            </Grid>
        </Grid>
    </Box>
}