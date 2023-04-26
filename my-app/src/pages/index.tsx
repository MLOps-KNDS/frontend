import NavigationBar from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import { ThemeColors } from "@/ThemeColors";
import LoginButton from "@/components/LoginButton";
import { useSession } from "next-auth/react";
import DataTable from "@/components/DataTable";
import { rows, columns } from "@/TableData";
import { UserData } from "@/components/UserData";

export default function IndexPage() {
  const { data: session, status } = useSession();

  return (
    <div className="flex-col">
      <div className="flex flex-row">
        <NavigationBar/>
        <div className="flex flex-col w-full">
          <div className="mx-2">
            <LoginButton/>
            {session?.user ?
              <UserData/>
            :
              <div className="text-4xl text-center my-5" style={{color: ThemeColors.tertiary}}>Welcome to our website! 🤗</div>
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
