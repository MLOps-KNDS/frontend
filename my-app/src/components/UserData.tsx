import { columns, rows } from "@/TableData";
import { ThemeColors } from "@/ThemeColors";
import { useSession } from "next-auth/react";
import DataTable from "./DataTable";

export const UserData = () => {
    const { data: session, status } = useSession();
    return (
        <div>
            <div className="text-4xl text-center my-5" style={{color: ThemeColors.tertiary}}>Welcome back {session?.user?.name}! 🤗</div>
            <DataTable rows={rows} columns={columns}/>
        </div>
    );
};