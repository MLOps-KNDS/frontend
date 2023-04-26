import { ThemeColors } from "@/ThemeColors";

export const Footer = () => {
    return (
        <div style={{backgroundColor: ThemeColors.black, height: "1.75rem", zIndex: 2}} className="w-full bottom-0 items-center">
            <div className="text-white ml-11">© Koło Naukowe Data Science</div>
        </div>
    )
};
