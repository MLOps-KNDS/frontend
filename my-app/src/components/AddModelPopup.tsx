import { Button } from "@mui/material";
import { ThemeColors } from "@/ThemeColors";
import React from "react";
import { ModelInput } from "@/Types";
import { API_BASE_URL } from "@/Config";
import { useSession } from "next-auth/react";

async function sendModel(model: ModelInput) {
    // if the response is ok let the user know
    return fetch(API_BASE_URL, {
        method: 'POST',
        body: JSON.stringify(model),
    });
}

const checkName = (name: string) => {
    name = name.trim();
    if (name.length === 0) {
        return 'Name cannot be empty';
    }
    return 'OK';
}

export const AddModelPopup = ({setVisible}: {setVisible: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [name, setName] = React.useState<string>("");
    const [description, setDescription] = React.useState<string>("");
    const [file, setFile] = React.useState<File>();
    const { data: session, status } = useSession();

    const checkInput = (name: string, description: string, file: File | undefined) => {
        if (checkName(name) !== 'OK') {
            return checkName(name);
        }
        console.log(name + " is ok");

        if (!file) {
            return "Please select a file"
        }
        return "OK";
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    }

    async function triggerAdd(name: string, description: string, file: File | undefined) {
        if (!session?.user?.email) {
            return "Please log in to add a model"
        }
        const check = checkInput(name, description, file);
        if (check !== 'OK') {
            alert(check);
            return;
        }

        const model: ModelInput = {
            name: name,
            status: "INACTIVE",
            description: description,
            userEmail: session.user.email,
        }

        console.log(JSON.stringify(model));

        // if the response is ok let the user know
        const response = sendModel(model);
        await response.then((response) => {
            if (response.ok) {
                alert("Model added successfully");
                setVisible(false);
            }
            else {
                alert("Error adding model");
            }
        });
    }

    return (
        <div className="bg-blue-100 bg-opacity-60 border-4 border-purple-300 rounded-sm m-auto">
            <div className="py-4 text-xl mb-2 text-center">Add a new model</div>
            <div className="text-center flex-wrap flex justify-center">
                <div>
                    <div className="text-xl">Name: </div>
                    <input className="border-2 border-purple-300 rounded-sm m-3 text-center w-32" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <div className="text-xl">Description: </div>
                    <input className="border-2 border-purple-300 rounded-sm m-3 text-center w-52" type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div>
                    <div className="text-xl">File: </div>
                    <input className="border-2 border-purple-300 rounded-sm m-3 text-center" type="file" onChange={handleFileChange}/>
                </div>
            </div>
            <div className="flex justify-center my-3">
                <Button variant="contained" color="secondary" className="mx-4 bg-blue-300" onClick={() => {triggerAdd(name, description, file)}}>Add</Button>
                <Button variant="contained" color="primary" className="mx-4 bg-blue-300" onClick={() => setVisible(false)}>Cancel</Button>
            </div>
        </div>
    );
}