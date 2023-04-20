import { ThemeColors } from "@/ThemeColors";

export const Footer = () => {
    return (
        <div style={{backgroundColor: ThemeColors.black, height: "4vh"}} className="w-full flex items-center">
            <div className="text-white ml-11">© Koło Naukowe Data Science</div>
        </div>
    )
};
