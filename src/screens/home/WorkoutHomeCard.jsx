import {Button, Card, CardContent, CardHeader, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export default function WorkoutHomeCard({title, mainText, buttonText, buttonIcon, link}) {
    return <Card className="app-card">
        <CardHeader title={title} />
        <CardContent>
            <Typography>{mainText}</Typography>
            <Button variant="outlined" startIcon={buttonIcon} component={Link} to={link}>
                {buttonText}
            </Button>
        </CardContent>
    </Card>
}