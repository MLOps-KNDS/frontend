import { Sidebar, sidebarClasses, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { navItems } from "@/Routes";
import { ThemeColors } from "@/ThemeColors";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@mui/material";


export default function NavigationBar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <Sidebar rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: ThemeColors.secondary,
        },
      }}
      style={{ height: "96vh", width: "5rem" }}
      transitionDuration={200}
      defaultCollapsed={true}
      width="11rem"
      onMouseEnter={() => {collapseSidebar();}} 
      onMouseLeave={() => {collapseSidebar();}}
      >
        <Menu>
          <Link href="/">
            <Image src="/koderzy.png" alt="Koderzy" width={100} height={100} />
          </Link>
          {/* <MenuItem href="/" icon={<HomeOutlinedIcon htmlColor={ThemeColors.white}/>}>Home</MenuItem> */}
          {navItems.map((item) => (
            <MenuItem href={item.url} icon={item.icon} key={item.name}>
              <Typography variant="h6" color="white">{item.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
  );
}