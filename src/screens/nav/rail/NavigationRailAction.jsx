import React from "react";
import {BottomNavigationAction, useTheme} from "@mui/material";

const NavigationRailAction = (props) => {
    const theme = useTheme();
    return (
        <BottomNavigationAction
            {...props}
            sx={{
                "&": {
                    maxWidth: 72,
                    minWidth: 72,
                    minHeight: 72,
                    maxHeight: 72,
                    padding: "14px 8px",
                    "&$iconOnly": {
                        paddingTop: 24,
                        paddingBottom: 10
                    },
                    "&$selected": {
                        paddingTop: 14
                    }
                },
                iconOnly: {},
                label: {
                    paddingTop: 4,
                    "&$selected": {
                        fontSize: theme.typography.pxToRem(14)
                    },
                    "&$iconOnly": {}
                },
                selected: {}
            }}
        />
    );
};

export default NavigationRailAction;
