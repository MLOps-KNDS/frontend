import NavigationBar from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import DataGrid from "@/components/DataTable";
import { ThemeColors } from "@/ThemeColors";
import LoginButton from "@/components/LoginButton";
import { useSession } from "next-auth/react";

export default function IndexPage() {
  const { data: session, status } = useSession();

  return (
    <div className="flex-col">
      <div className="flex flex-row">
        <NavigationBar/>
        <div className="flex flex-col w-full">
          <div className="">
            {session ? <div>Logged in as {session.user.email}</div> : <LoginButton/>}
            <div className="text-4xl text-center my-5" style={{color: ThemeColors.tertiary}}>Welcome back! 🤗</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
