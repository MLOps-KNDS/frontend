import NavigationBar from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import DataGrid from "@/components/DataTable";
import { ThemeColors } from "@/ThemeColors";

export default function IndexPage() {

  return (
    <div className="flex-col">
      <div className="flex flex-row">
        <NavigationBar/>
        <div className="flex flex-col">
          <div className="my-5 text-center text-4xl" style={{color: ThemeColors.tertiary}}>Welcome back! 🤗</div>
          <DataGrid/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
