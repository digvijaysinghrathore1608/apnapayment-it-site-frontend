
import { Card, CardContent } from "@/components/ui/card";
import { industries } from "@/data/industries";

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
                        {industries.map((item, idx) => {
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