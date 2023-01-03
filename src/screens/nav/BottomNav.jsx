import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import {Link} from "react-router-dom";

export default function BottomNav({navLinks, navIndex, defaultIndex}) {
    return <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
        <BottomNavigation value={navIndex >= 0 ? navIndex : defaultIndex}>
            {navLinks.map(link => <BottomNavigationAction key={link.id} label={link.label} icon={link.icon}
                                                          component={Link} to={link.to}/>)}
        </BottomNavigation>
    </Paper>
}