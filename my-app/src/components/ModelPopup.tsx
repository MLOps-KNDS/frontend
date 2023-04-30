import { Button } from "@mui/material";
import React from "react";



export const ModelPopup = (props: {id: number}) => {
    const [deleteModel, setDeleteModel] = React.useState<boolean>(false);
    const askDelete = () => {
        setDeleteModel(true);
    }
    const triggerDelete = () => {
        console.log("triggered delete");
    }

    return (
        <div className="bg-blue-100 bg-opacity-60 border-4 border-purple-300 rounded-sm" style={{height: "60vh", width: "45vw"}}>
            <div className="text-center py-4 text-3xl">Model {props.id}</div>
            <Button variant="contained" color="secondary" className="mx-4 bg-blue-300" onClick={askDelete}>Delete</Button>
            {deleteModel ?
                <div className="bg-blue-100 bg-opacity-60 border-4 border-purple-300 rounded-sm m-auto" style={{height: "20vh", width: "30vw"}}>
                    <div className="text-center py-4 text-xl mb-3">Are you sure you want to delete model {props.id}?</div>
                    <div className="flex justify-center">
                        <Button variant="contained" color="secondary" className="mx-4 bg-blue-300" onClick={triggerDelete}>Delete</Button>
                        <Button variant="contained" color="primary" className="mx-4 bg-blue-300" onClick={() => setDeleteModel(false)}>Cancel</Button>
                    </div>
                </div>
            : null}
        </div>
    );
}