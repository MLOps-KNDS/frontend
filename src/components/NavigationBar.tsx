import { Sidebar, sidebarClasses, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import BiotechIcon from '@mui/icons-material/Biotech';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from "react-router-dom";


export default function NavigationBar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <Sidebar rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: '#222831'
        },
      }}
      style={{ height: "100vh" }}
      transitionDuration={200}
      defaultCollapsed={true}
      onMouseEnter={() => {collapseSidebar();}} 
      onMouseLeave={() => {collapseSidebar();}}
    >
        <Menu>
          <MenuItem component='Link' icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem component='Link' icon={<AirplanemodeActiveIcon />}>Models</MenuItem>
          <MenuItem component='Link' icon={<BiotechIcon />}>Tests</MenuItem>
          <MenuItem component='Link' icon={<GroupWorkIcon />}>Pools</MenuItem>
          <MenuItem component='Link' icon={<AssistantDirectionIcon />}>Gates</MenuItem>
          <MenuItem component='Link' icon={<BarChartIcon />}>Metrics</MenuItem>
        </Menu>
      </Sidebar>
  );
}