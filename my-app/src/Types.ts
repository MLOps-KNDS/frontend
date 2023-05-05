export type Model = {
    id: number;
    name: string;
    status: "ACTIVE" | "INACTIVE";
    createdAt: string;
    updatedAt: string;
    description: string;
};

export type ModelInput = {
    name: string;
    status: "ACTIVE" | "INACTIVE";
    description: string;
    userEmail: string;
};
