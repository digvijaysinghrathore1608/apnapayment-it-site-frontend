
import { Card, CardContent } from "@/components/ui/card";
import {
    Cpu,
    HeartPulse,
    Dumbbell,
    Truck,
    ShoppingBag,
    Utensils,
    Plane,
    GraduationCap,
    Home,
    Sparkles,
    Users,
    Briefcase
} from "lucide-react";
export default function ExpertiseSection() {
    return (
        <>
            {/* expertise section start */}
                <div className="relative flex flex-wrap w-full max-w-full items-center justify-between pt-10 sm:py-10 px-2 sm:px-16">
                    <div className="flex flex-col items-start gap-2 w-full sm:max-w-2xl">
                        <span className="text-orange-500 text-sm font-bold border-2 border-orange-500 px-2 rounded-2xl">
                            Industries
                        </span>
                        <span className="text-purple-500 text-lg md:text-xl font-bold">
                            Harnessing Expertise
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold leading-tight w-full">
                            Across Industries for Tailored Solutions
                        </h2>
                        <p className="text-gray-500 text-sm sm:text-base sm:font-bold w-full">With deep expertise in AI technologies and a keen understanding of industry-specific needs, we drive innovation and success for our clients, leveraging advanced AI solutions to exceed expectations every time.</p>
                    </div>
                    <div className="w-full sm:max-w-2xl grid grid-cols-2 md:grid-cols-3 gap-2">
                        {services.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <Card
                                    key={idx}
                                    className="border-0 border-b-[0.5px] border-slate-700 rounded-none p-3 py-6 justify-center shadow-none"
                                >
                                    <CardContent className="flex items-center justify-start gap-2 p-0">
                                        <Icon className={`${item.color}`} height={20} width={20}/>

                                        <div className="text-left">
                                            <h5 className="text-xs sm:text-lg text-nowrap font-semibold tracking-wide">
                                                {item.title}
                                            </h5>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            {/* expertise section end */}
        </>
    )
}
const services = [
    {
        title: "Fintech",
        icon: Cpu,
        color: "text-blue-400"
    },
    {
        title: "Healthcare",
        icon: HeartPulse,
        color: "text-red-400"
    },
    {
        title: "Fitness",
        icon: Dumbbell,
        color: "text-green-400"
    },
    {
        title: "Logistic",
        icon: Truck,
        color: "text-yellow-400"
    },
    {
        title: "e-Commerce",
        icon: ShoppingBag,
        color: "text-pink-400"
    },
    {
        title: "Food & Hyperlocal",
        icon: Utensils,
        color: "text-orange-400"
    },
    {
        title: "Travel",
        icon: Plane,
        color: "text-purple-400"
    },
    {
        title: "Education",
        icon: GraduationCap,
        color: "text-green-300"
    },
    {
        title: "Home Inspection",
        icon: Home,
        color: "text-teal-400"
    },
    {
        title: "Wellness",
        icon: Sparkles,
        color: "text-emerald-400"
    },
    {
        title: "Social & Dating",
        icon: Users,
        color: "text-rose-400"
    },
    {
        title: "Job & Employment",
        icon: Briefcase,
        color: "text-indigo-400"
    }
];