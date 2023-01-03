import NavigationRail from "./rail/NavigationRail";
import NavigationRailAction from "./rail/NavigationRailAction";
import {useTheme} from "@mui/material";
import {Link} from "react-router-dom";

const toolbarRelativeStyles = (property, theme, modifier = (value) => value) =>
    Object.keys(theme.mixins.toolbar).reduce((style, key) => {
        const value = theme.mixins.toolbar[key];
        if (key === "minHeight") {
            return {...style, [property]: modifier(value)};
        }
        if (value.minHeight !== undefined) {
            return {...style, [key]: {[property]: modifier(value.minHeight)}};
        }
        return style;
    }, {});

export default function Sidebar({navLinks, navIndex, defaultIndex}) {
    const theme = useTheme();

    return <NavigationRail value={navIndex >= 0 ? navIndex : defaultIndex}
                           sx={{...toolbarRelativeStyles("top", theme)}}>
        {navLinks.map(link => <NavigationRailAction key={link.id} label={link.label} icon={link.icon} component={Link}
                                                    to={link.to}/>)}
    </NavigationRail>
}