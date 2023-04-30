import { columns, rows } from "@/TableData";
import { ThemeColors } from "@/ThemeColors";
import { useSession } from "next-auth/react";
import DataTable from "./DataTable";
import { Button } from "@mui/material";
import React from "react";
import { AddModelPopup } from "./AddModelPopup";
import Popup from "reactjs-popup";

export const UserData = () => {
    const { data: session, status } = useSession();
    const [addModelPop, setAddModelPop] = React.useState(false);
    const setAddModel = () => {
        setAddModelPop(true);
    };
    return (
        <div>
            <div className="text-4xl text-center my-5" style={{color: ThemeColors.tertiary}}>Welcome back {session?.user?.name} {session?.user?.email}! 🤗</div>
            <DataTable rows={rows} columns={columns}/>
            <Button variant="contained" color="primary" className="bg-blue-400" onClick={setAddModel}>Add a Model</Button>
            <Popup open={addModelPop} onClose={() => setAddModelPop(false)}>
                <AddModelPopup setVisible={setAddModelPop}/>
            </Popup>
        </div>
    );
};