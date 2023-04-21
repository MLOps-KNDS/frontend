import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import BiotechIcon from '@mui/icons-material/Biotech';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import { ThemeColors } from "@/ThemeColors";

export const navItems = [
    {
        name: 'Models',
        url: '/models',
        icon: <HomeOutlinedIcon htmlColor={ThemeColors.white}/>,
    },
    {
        name: 'Tests',
        url: '/tests',
        icon: <AirplanemodeActiveIcon htmlColor={ThemeColors.white}/>,
    },
    {
        name: 'Pools',
        url: '/pools',
        icon: <GroupWorkIcon htmlColor={ThemeColors.white}/>,
    },
    {
        name: 'Gates',
        url: '/gates',
        icon: <BiotechIcon htmlColor={ThemeColors.white}/>,
    },
    {
        name: 'Metrics',
        url: '/metrics',
        icon: <AssistantDirectionIcon htmlColor={ThemeColors.white}/>,
    },
]