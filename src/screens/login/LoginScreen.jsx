import {signInWithGoogle} from "../../data/firebase-auth-service";
import {Box, Card, CardContent, CardHeader, Grid, IconButton, Typography} from "@mui/material";
import googleLoginLogo from '../../assets/images/btn_google_signin_dark_normal_web.png'
import appLogo from '../../assets/images/fitness.png'

export default function LoginScreen({onLoginSuccess}) {
    const onGoogleLoginClicked = () => {
        signInWithGoogle((result) => {
            onLoginSuccess(result)
        });
    }
    return (
        <Grid container justifyContent="center" alignItems="center" direction="column">
            <Grid item textAlign="center">
                <Typography variant="h3" sx={{mt: 2}}>Fazio Daily Workouts</Typography>
            </Grid>
            <Grid item>
                <Box component="img" alt="Fazio Daily Workouts logo" src={appLogo} sx={{mt: 2, width: 160}}/>
            </Grid>
            <Grid item>
                <Card className="app-card">
                    <CardHeader title="Log in with Google"/>
                    <CardContent sx={{alignItems: "center"}}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <IconButton onClick={onGoogleLoginClicked} disableRipple>
                                    <Box component="img" alt="Log in with Google" src={googleLoginLogo}/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}