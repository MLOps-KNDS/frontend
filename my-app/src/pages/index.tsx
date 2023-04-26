import NavigationBar from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import { ThemeColors } from "@/ThemeColors";
import LoginButton from "@/components/LoginButton";
import { useSession } from "next-auth/react";
import DataTable from "@/components/DataTable";
import { rows, columns } from "@/TableData";

export default function IndexPage() {
  const { data: session, status } = useSession();

  return (
    <div className="flex-col">
      <div className="flex flex-row">
        <NavigationBar/>
        <div className="flex flex-col w-full">
          <div className="mx-2">
            {session?.user ? <div>Logged in as {session.user.email}</div> : <LoginButton/>}
            <div className="text-4xl text-center my-5" style={{color: ThemeColors.tertiary}}>Welcome back! 🤗</div>
            <DataTable rows={rows} columns={columns}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
