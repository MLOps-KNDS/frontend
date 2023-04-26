import { GridRowsProp } from "@mui/x-data-grid";

export type Row = {
    id: number;
    lastName: string;
    firstName: string | null;
    age: number | null;
};
