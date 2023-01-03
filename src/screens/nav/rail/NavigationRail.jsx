import React from "react";
import {BottomNavigation, useTheme} from "@mui/material";

const NavigationRail = ({...props}) => {
    const theme = useTheme();
    return (
        <BottomNavigation
            {...props}
            sx={{
                flexDirection: "column",
                justifyContent: "flex-start",
                height: "unset",
                width: 72,
                padding: `8px 0px`,
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                borderRight: `1px solid ${theme.palette.divider}`
            }}
        />
    );
};

export default NavigationRail;
