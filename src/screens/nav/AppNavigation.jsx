import {Box} from "@mui/material";
import BottomNav from "./BottomNav";
import NavLinks from "./NavLinks";
import {DirectionsRun, ListSharp, Person} from "@mui/icons-material";
import Sidebar from "./Sidebar";
import {useLocation} from "react-router-dom";

const navLinks = [
    {
        id: "history",
        label: "History",
        to: NavLinks.history,
        icon: <ListSharp/>
    },
    {
        id: "today",
        label: "Today",
        to: NavLinks.today,
        icon: <DirectionsRun/>
    },
    {
        id: "profile",
        label: "Profile",
        to: NavLinks.profile,
        icon: <Person/>
    },
];

const defaultIndex = 1

export default function AppNavigation() {
    const location = useLocation()

    const navIndex = navLinks.findIndex(link => link.to === location.pathname);

    return (
        <Box>
            <Box component="nav" sx={{display: {xs: "none", sm: "flex"}}}>
                <Sidebar navLinks={navLinks} navIndex={navIndex} defaultIndex={defaultIndex}/>
            </Box>
            <Box component="nav" sx={{display: {sm: "none"}}}>
                <BottomNav navLinks={navLinks} navIndex={navIndex} defaultIndex={defaultIndex}/>
            </Box>
        </Box>
    )
}