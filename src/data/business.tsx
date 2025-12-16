import { Briefcase, Building2, Users } from "lucide-react";

export const site_name = "Apna IT Solution";
export const site_logo = "/logo/logo.png";
export const contact_email = "hr@apnapayment.com";
export const contact_phone = "+911234567890";

export const contact_details = [
    {
        id: "consultation",
        title: "For Consultation",
        icon: <Users size={18} />,
        description:
            "Get expert guidance on technology, architecture, automation, and digital transformation from our experienced consultants.",
        email: "sales@apnapayment.com",
        phone: "(+91) 123-456-7890",
        points: [
            "Free initial consultation",
            "Technology & architecture review",
            "Project planning & estimation",
        ],
    },
    {
        id: "business",
        title: "For Business",
        icon: <Building2 size={18} />,
        description:
            "Partner with us to build secure, scalable, and high-performance digital solutions tailored to your business needs.",
        email: "sales@apnapayment.com",
        phone: "(+91) 123-456-7890",
        points: [
            "Custom software & web development",
            "Enterprise IT solutions",
            "Long-term technology partnership",
        ],
    },
    {
        id: "career",
        title: "For Career",
        icon: <Briefcase size={18} />,
        description:
            "Join our growing team of innovators, developers, and problem-solvers shaping the future of digital technology.",
        email: "hr@apnapayment.com",
        phone: "(+91) 123-456-7890",
        points: [
            "Growth-oriented work culture",
            "Challenging real-world projects",
            "Learning & career development",
        ],
    },
];

export const address = "123 Business Street, Jaipur, Rajasthan, India";
export const working_hours = "Mon – Sat : 9:00 AM – 7:00 PM";

export const email_send_url = "https://l5an4lw120.execute-api.ap-south-1.amazonaws.com/api/services/email/send";