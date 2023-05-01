import NavigationBar from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import { ThemeColors } from "@/ThemeColors";
import LoginButton from "@/components/LoginButton";
import { useSession } from "next-auth/react";
import { UserData } from "@/components/UserData";
import { BaseLayout } from "@/components/BaseLayout";

export default function IndexPage() {
  const { data: session, status } = useSession();

  return (  
    <BaseLayout>
      <div className="mx-2">
        <LoginButton/>
        {session?.user ?
          <UserData/>
        :
          <div className="text-4xl text-center my-5" style={{color: ThemeColors.tertiary}}>Welcome to our website! 🤗</div>
        }
      </div>
    </BaseLayout>
  );
}
