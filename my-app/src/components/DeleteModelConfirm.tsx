import { Model } from "@/Types";
import { Button } from "@mui/material";
import Popup from "reactjs-popup";

const triggerDelete = () => {
    console.log("triggered delete");
}

export const DeleteModelConfirm = ({setDeleteModel, model, deleteModel}: {setDeleteModel: (value: boolean) => void, model: Model, deleteModel: boolean}) => {
    return <Popup onClose={() => setDeleteModel(false)} modal open={deleteModel}>
        <div className="bg-blue-100 bg-opacity-100 border-4 border-purple-300 rounded-sm m-auto" style={{ height: "20vh", width: "30vw" }}>
            <div className="text-center py-4 text-xl mb-3">Are you sure you want to delete model {model.name}?</div>
            <div className="flex justify-center">
                <Button variant="contained" color="primary" className="mx-4 bg-blue-300" onClick={() => setDeleteModel(false)}>Cancel</Button>
                <Button variant="contained" color="secondary" className="mx-4 bg-blue-300" onClick={triggerDelete}>Delete</Button>
            </div>
        </div>
    </Popup>;
}
