import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import cn from "clsx";
import { title } from "process";
interface SocialMediaProps {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}
const socialLink = [
    {
        title: "Facebook",
        href: "https://www.facebook.com/comfortfoods",
        icon: <Facebook />,
    },
    {
        title: "Instagram",
        href: "https://www.instagram.com/comfortfoods",
        icon: <Instagram />,
    },
    {
        title: "LinkedIn",
        href: "https://www.instagram.com/comfortfoods",
        icon: <Linkedin />,
    },
    {
        title: "Youtube",
        href: "https://www.instagram.com/comfortfoods",
        icon: <Youtube />,
    },

]

const SocialMedia = ({ className, iconClassName, tooltipClassName }: SocialMediaProps) => {

    return <TooltipProvider>
        <div className={cn('flex items-center gap-3.5 ', className)}>
            {socialLink?.map((item) => (
                <Tooltip key={item?.title}>
                    <TooltipTrigger asChild>
                        <Link href={item?.href} target="_blank" rel="noopener noreferrer" className={cn('hover:text-darkColor hoverEffect', iconClassName)}>
                            {item?.icon}
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className={cn('bg-white text-darkColor font-semibold', tooltipClassName)}>
                        {item?.title}
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
    </TooltipProvider>
};
export default SocialMedia;