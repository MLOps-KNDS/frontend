import { rows } from "@/TableData";
import { Button } from "@mui/material";
import React from "react";
import { DeleteModelConfirm } from "./DeleteModelConfirm";


export const ModelPopup = (modelId: {id: number}) => {
    const [deleteModel, setDeleteModel] = React.useState<boolean>(false);

    const getModelById = (id: number) => {
        const model = rows.find((model) => model.id === id);
        if (model) {
            return model;
        }
        else {
            throw new Error("Model not found");
        }
    }

    const model = getModelById(modelId.id);

    const askDelete = () => {
        setDeleteModel(true);
    }
    const saveChanges = () => {
        console.log("save changes");
    }

    return (
        <div>
            <div className="bg-blue-100 bg-opacity-60 border-4 border-purple-300 rounded-sm flex flex-col justify-center">
                <div className="text-center text-3xl my-2">Model {model.id}</div>
                <div className="text-center text-2xl my-1">Name: {model.name}</div>
                <div className="text-center text-xl">Last updated: {model.updatedAt}</div>
                <div className="text-center text-xl">Description:</div>
                <div className="text-center text-xl border-4 w-80">{model.description}</div>
                <div className="text-center text-xl">Created at: {model.createdAt}</div>
                <div className="flex-row text-center my-4">
                    <Button variant="contained" color="secondary" className="mx-4 bg-blue-300 w-fit" onClick={saveChanges}>Save</Button>
                    <Button variant="contained" color="secondary" className="mx-4 bg-blue-300 w-fit" onClick={askDelete}>Delete</Button>
                </div>
            </div>
            <DeleteModelConfirm setDeleteModel={setDeleteModel} model={model} deleteModel={deleteModel}/>
        </div>
    );
}
