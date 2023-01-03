import {DirectionsWalk, FitnessCenter, SelfImprovement} from "@mui/icons-material";

const homeWorkouts = {
    tenK: {
        title: "10K Steps",
        icon: <DirectionsWalk />,
        text: "Enter steps",
        order: {
            'xs': 0,
            'default': 1
        }
    },
    stretching: {
        title: "Stretching",
        icon: <SelfImprovement />,
        text: "View stretches",
        order: {
            'xs': 1,
            'default': 0
        }
    },
    daily: {
        title: "Workout",
        icon: <FitnessCenter />,
        text: "View workout options",
        order: {
            'default': 2
        }
    },
}

export {
    homeWorkouts
};