export type User = {
    name: string;
    surname: string;
    email: string;
};

export type Model = {
    name: string;
    description: string;
    status: string;
    created_at: string;
    created_by: User;
    updated_at: string;
    updated_by: User;
};

export type Tab = "dashboard" | "testing" | "model_metrics" | "models" | "datasets";
export type Position = "relative" | "absolute" | "fixed" | "sticky" | "static" | "inherit" | "initial" | "unset";
