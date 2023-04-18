import { Sidebar, sidebarClasses, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import BiotechIcon from '@mui/icons-material/Biotech';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import BarChartIcon from '@mui/icons-material/BarChart';
import Link from "next/link";
import Image from "next/image";


export default function NavigationBar() {
  const { collapseSidebar } = useProSidebar();
  const { collapsed } = useProSidebar();

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
      onMouseLeave={() => {collapseSidebar();}}>
        <Menu>
          <Link href="/">
            <Image src="/koderzy.png" alt="Koderzy" width={100} height={100} />
          </Link>
          <MenuItem href="/" icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem href="/models" icon={<AirplanemodeActiveIcon />}>Models</MenuItem>
          <MenuItem href="/tests" icon={<BiotechIcon />}>Tests</MenuItem>
          <MenuItem href="/pools" icon={<GroupWorkIcon />}>Pools</MenuItem>
          <MenuItem href="/gates" icon={<AssistantDirectionIcon />}>Gates</MenuItem>
          <MenuItem href="/metrics" icon={<BarChartIcon />}>Metrics</MenuItem>
        </Menu>
      </Sidebar>
  );
}