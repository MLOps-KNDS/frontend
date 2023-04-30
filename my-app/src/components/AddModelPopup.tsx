import { Button } from "@mui/material";
import React from "react";

export const AddModelPopup = ({setVisible}: {setVisible: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const triggerAdd = () => {
        console.log("triggered add");
    }

    return (
        <div className="bg-blue-100 bg-opacity-60 border-4 border-purple-300 rounded-sm m-auto" style={{height: "50vh", width: "50vw"}}>
            <div className="text-center">
                <div className="py-4 text-xl mb-2">Add a new model</div>
                <div className="text-xl">Name: </div>
                <input className="border-2 border-purple-300 rounded-sm m-4 text-center" type="text" placeholder="Name"/>
                <div className="text-xl">Description: </div>
                <input className="border-2 border-purple-300 rounded-sm m-4 text-center" type="text" placeholder="Description"/>
            </div>
            <div className="flex justify-center">
                <Button variant="contained" color="secondary" className="mx-4 bg-blue-300" onClick={() => {triggerAdd}}>Add</Button>
                <Button variant="contained" color="primary" className="mx-4 bg-blue-300" onClick={() => setVisible(false)}>Cancel</Button>
            </div>
        </div>
    );
}