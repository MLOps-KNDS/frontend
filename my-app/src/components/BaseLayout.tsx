import { Footer } from "./Footer";
import NavigationBar from "./NavigationBar";

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex-col">
        <div className="flex flex-row">
            <NavigationBar />
            <div className="flex flex-col w-full">{children}</div>
        </div>
        <Footer />
        </div>
    );
};