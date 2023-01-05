import './App.css';
import {Box, Typography} from "@mui/material";
import AppNavigation from "./screens/nav/AppNavigation";
import {Route, Routes} from "react-router-dom";
import HomeScreen from "./screens/home/HomeScreen";
import HistoryScreen from "./screens/history/HistoryScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import {useEffect, useState} from "react";
import SplashScreen from "./screens/splash/SplashScreen";
import LoginScreen from "./screens/login/LoginScreen";
import {onUserStateChanged} from "./data/firebase-auth-service";

function App() {
    const [userChecked, setUserChecked] = useState(false);
    const [user, setUser] = useState(null);

    const handleLoginSuccess = (result) => {
        setUser(result.user);
        setUserChecked(true);
    }

    useEffect(() => {
        onUserStateChanged(user => {
            setUser(user);
            setUserChecked(true);
        })
    }, [user])

    if (!userChecked) return <SplashScreen />

    if (userChecked && !user) return <LoginScreen onLoginSuccess={handleLoginSuccess} />

    return (
        <Box className="App" sx={{ml: {xs: 0, sm: "72px"}}}>
            <Box sx={{margin: "0 auto", maxWidth: 960}}>
                <Typography variant="h3" sx={{mt: 2}}>Fazio Daily Workouts</Typography>
                <Routes>
                    <Route path="/history" element={<HistoryScreen/>}/>
                    <Route path="/profile" element={<ProfileScreen/>}/>
                    <Route path="/" element={<HomeScreen/>}/>
                </Routes>
            </Box>
            <AppNavigation/>
        </Box>
    );
}

export default App;
