import { Briefcase, Cpu, Dumbbell, GraduationCap, HeartPulse, Home, Plane, ShoppingBag, Sparkles, Truck, Users, Utensils } from "lucide-react";

export const industries = [
    {
        title: "Fintech", slug: "fintech", icon: Cpu, color: "text-blue-400",
        description: "Secure and scalable solutions for finance, payments and digital banking.",
        points: [
            "UPI / Wallet Integration",
            "Recharge & Bill Payment System",
            "Loan Management System",
            "KYC Verification & Automation",
            "Secure Payment Gateway Integration"
        ],
    },
    {
        title: "Healthcare", slug: "healthcare", icon: HeartPulse, color: "text-red-400", description:
            "Digital solutions for hospitals, clinics, doctors and health startups.",
        points: [
            "Appointment Booking System",
            "Telemedicine Platforms",
            "Electronic Medical Records (EMR)",
            "Patient Monitoring Dashboard",
            "Doctor & Patient Apps"
        ],
    },
    {
        title: "Fitness", slug: "fitness", icon: Dumbbell, color: "text-green-400", description:
            "Custom apps for fitness trainers, gyms and wellness platforms.",
        points: [
            "Fitness Training Apps",
            "Diet & Workout Tracking",
            "Subscription Plans",
            "Gym Management Software",
            "Wearable Integrations"
        ],
    },
    {
        title: "logistics", slug: "logistics", icon: Truck, color: "text-yellow-400", description:
            "Smart logistics and delivery management solutions.",
        points: [
            "Delivery Partner App",
            "Route Optimization System",
            "Real-Time Order Tracking",
            "Fleet & Warehouse Management",
            "Driver App Development"
        ],
    },
    {
        title: "E-Commerce", slug: "e-commerce", icon: ShoppingBag, color: "text-pink-400", description:
            "Powerful e-commerce platforms for all business sizes.",
        points: [
            "Single & Multi-Vendor Store",
            "Order & Inventory Management",
            "Secure Payments",
            "Product Recommendation Engine",
            "Admin & Seller Dashboards"
        ],
    },
    {
        title: "Food & Hyperlocal", slug: "food-hyperlocal", icon: Utensils, color: "text-orange-400", description:
            "On-demand delivery apps for restaurants and hyperlocal businesses.",
        points: [
            "Restaurant Listing System",
            "Food Delivery App",
            "Live Order Tracking",
            "Delivery Partner App",
            "Loyalty & Coupon System"
        ],
    },
    {
        title: "Travel", slug: "travel", icon: Plane, color: "text-purple-400",
        description: "Travel booking, itinerary and tourism platform development.",
        points: [
            "Travel Booking System",
            "Tour Package Listing",
            "Hotel & Ticket Booking",
            "Travel Planner App",
            "Navigation Integration"
        ],
    },
    {
        title: "Education", slug: "education", icon: GraduationCap, color: "text-green-300",
        description: "Smart learning solutions for institutes and students.",
        points: [
            "Learning Management System",
            "Online Exam System",
            "Live Class Integration",
            "Student Dashboard",
            "Teacher Management System"
        ],
    },
    {
        title: "Home Inspection", slug: "home-inspection", icon: Home, color: "text-teal-400",
        description: "Apps for property inspection and real estate surveys.",
        points: [
            "Property Inspection App",
            "Checklist Automation",
            "Photo/Video Upload System",
            "Report Generation",
            "Task Assignments"
        ],
    },
    {
        title: "Wellness", slug: "wellness", icon: Sparkles, color: "text-emerald-400",
        description: "Meditation, therapy and holistic wellness solutions.",
        points: [
            "Meditation App",
            "Online Therapy Platform",
            "Habit Tracking",
            "Session Scheduling",
            "Subscription Plans"
        ],
    },
    {
        title: "Social & Dating", slug: "social-dating", icon: Users, color: "text-rose-400",
        description: "Apps that connect people through chat, matching & communities.",
        points: [
            "Real-Time Chat",
            "Swipe & Match System",
            "Profile Recommendations",
            "Verification System",
            "Location-Based Search"
        ],
    },
    {
        title: "Job & Employment", slug: "job-employment", icon: Briefcase, color: "text-indigo-400",
        description: "Recruitment, HR and job portal system development.",
        points: [
            "Job Portal Development",
            "Employer Dashboard",
            "Resume Upload & Parsing",
            "Candidate Tracking System",
            "Interview Scheduling"
        ],
    }
];

export const industryDetails: any = {
    fintech: {
        title: "Fintech Software Development",
        description:
            "Secure, scalable fintech solutions for digital payments, banking, lending, and financial automation.",
        longDescription:
            "We design and develop high-performance fintech software solutions including digital payments, wallets, lending platforms, and KYC automation. Our fintech systems are built with enterprise-grade security, regulatory compliance, and real-time transaction processing to support fast-growing financial businesses.",
        points: [
            "UPI, Wallet & Digital Payment Integration",
            "Recharge, Utility & Bill Payment Platforms",
            "Loan, EMI & Credit Management Systems",
            "KYC, AML & Compliance Automation",
            "Secure Payment Gateway & Fraud Prevention",
        ],
        technologies: ["Django", "Laravel", "Next.js", "AWS", "PostgreSQL"],
    },

    healthcare: {
        title: "Healthcare Software Solutions",
        description:
            "Secure healthcare software for hospitals, clinics, doctors, and health-tech startups.",
        longDescription:
            "We build reliable and compliant healthcare software solutions that improve patient care and operational efficiency. From appointment booking and telemedicine to EMR systems, our platforms ensure data security, privacy, and seamless digital healthcare experiences.",
        points: [
            "Online Appointment Booking Systems",
            "Telemedicine & Virtual Consultation Platforms",
            "Electronic Medical Records (EMR/EHR)",
            "Patient Monitoring & Analytics Dashboards",
            "Doctor, Patient & Admin Applications",
        ],
        technologies: ["React Native", "Django", "Firebase", "AWS"],
    },

    fitness: {
        title: "Fitness & Gym App Development",
        description:
            "Custom fitness applications for gyms, trainers, and wellness businesses.",
        longDescription:
            "We help fitness brands go digital with engaging mobile apps and management systems. Our fitness solutions include workout tracking, diet planning, subscriptions, and performance analytics to boost user engagement and retention.",
        points: [
            "Workout & Personal Training Applications",
            "Diet Planning & Progress Tracking",
            "Membership & Subscription Management",
            "Gym & Fitness Studio Management Software",
            "Wearable Device & Health App Integrations",
        ],
        technologies: ["Next.js", "React Native", "Firebase"],
    },

    logistics: {
        title: "Logistics & Delivery Management Software",
        description:
            "Smart logistics software for real-time tracking, delivery automation, and fleet management.",
        longDescription:
            "We develop advanced logistics and supply-chain software that enables real-time tracking, route optimization, and automated delivery operations. Our solutions help logistics businesses reduce costs and improve efficiency.",
        points: [
            "Delivery Partner & Driver Mobile Apps",
            "Route Optimization & Smart Dispatching",
            "Real-Time Order & Shipment Tracking",
            "Fleet & Warehouse Management Systems",
            "Logistics Analytics & Reporting Tools",
        ],
        technologies: ["Flutter", "Node.js", "Google Maps API"],
    },

    "e-commerce": {
        title: "E-Commerce Website & App Development",
        description:
            "Scalable e-commerce solutions for startups, brands, and enterprises.",
        longDescription:
            "We build fast, secure, and conversion-focused e-commerce platforms ranging from single-vendor stores to large multi-vendor marketplaces. Our solutions focus on performance, user experience, and business growth.",
        points: [
            "Single-Vendor & Multi-Vendor Marketplaces",
            "Order, Inventory & Product Management",
            "Secure Online Payments & Checkout",
            "AI-Based Product Recommendations",
            "Admin, Seller & Sales Dashboards",
        ],
        technologies: ["Next.js", "Laravel", "Stripe", "Razorpay"],
    },

    "food-hyperlocal": {
        title: "Food Delivery & Hyperlocal App Solutions",
        description:
            "On-demand food delivery and hyperlocal service applications.",
        longDescription:
            "We create complete food delivery and hyperlocal platforms including customer apps, restaurant dashboards, and delivery partner systems. Our solutions support real-time tracking, fast ordering, and customer retention features.",
        points: [
            "Restaurant Discovery & Listing Platforms",
            "Food Ordering & Delivery Mobile Apps",
            "Live Order Tracking & Notifications",
            "Delivery Partner & Rider Applications",
            "Offers, Loyalty & Coupon Management",
        ],
        technologies: ["React Native", "Node.js", "Firebase"],
    },

    travel: {
        title: "Travel & Tourism Software Development",
        description:
            "Travel booking, itinerary management, and tourism platform solutions.",
        longDescription:
            "We build modern travel and tourism software that simplifies bookings, trip planning, and customer engagement. Our platforms integrate maps, payments, and real-time availability for seamless travel experiences.",
        points: [
            "Hotel, Flight & Tour Booking Systems",
            "Tour Package & Destination Management",
            "Travel Planner & Itinerary Applications",
            "Maps, Navigation & Location Services",
            "Custom Travel CRM Solutions",
        ],
        technologies: ["Next.js", "Python", "Google Maps API"],
    },

    education: {
        title: "Education & E-Learning Software Development",
        description:
            "Digital learning platforms for schools, colleges, and ed-tech companies.",
        longDescription:
            "We develop interactive education platforms including LMS, online exams, and virtual classrooms. Our e-learning solutions improve student engagement, simplify teaching workflows, and support scalable online education.",
        points: [
            "Learning Management Systems (LMS)",
            "Online Exam & Assessment Platforms",
            "Live Classes & Virtual Classrooms",
            "Student & Teacher Dashboards",
            "Performance Analytics & Reports",
        ],
        technologies: ["Django", "React", "WebRTC"],
    },

    "home-inspection": {
        title: "Home Inspection & Property Software",
        description:
            "Digital tools for property inspection and real-estate surveys.",
        longDescription:
            "We provide modern home inspection software that digitizes inspection processes, documentation, and reporting. Our solutions help inspectors and property professionals work faster and more accurately.",
        points: [
            "Property Inspection Mobile Applications",
            "Checklist & Inspection Form Automation",
            "Photo & Video Documentation",
            "Automated Report Generation",
            "Task Assignment & Workflow Management",
        ],
        technologies: ["React Native", "Laravel"],
    },

    wellness: {
        title: "Wellness & Mental Health App Development",
        description:
            "Meditation, therapy, and holistic wellness digital platforms.",
        longDescription:
            "We build wellness applications focused on mental health, mindfulness, and habit building. Our platforms support meditation sessions, online therapy, scheduling, and subscription-based models.",
        points: [
            "Meditation & Mindfulness Applications",
            "Online Therapy & Counseling Platforms",
            "Habit & Wellness Tracking Tools",
            "Session Scheduling & Reminders",
            "Subscription & Payment Management",
        ],
        technologies: ["Flutter", "Node.js", "Firebase"],
    },

    "social-dating": {
        title: "Social Networking & Dating App Development",
        description:
            "Scalable social and dating applications with real-time engagement features.",
        longDescription:
            "We develop secure and engaging social networking and dating apps with real-time chat, smart matching algorithms, and user verification to ensure safety and high engagement.",
        points: [
            "Real-Time Chat & Messaging Systems",
            "Swipe & Match Algorithms",
            "Profile & Interest-Based Recommendations",
            "User Verification & Safety Features",
            "Location-Based Search & Discovery",
        ],
        technologies: ["Next.js", "Socket.io", "MongoDB"],
    },

    "job-employment": {
        title: "Job Portal & HR Software Solutions",
        description:
            "Recruitment, HR management, and job portal development services.",
        longDescription:
            "We build modern recruitment and HR platforms that simplify hiring, candidate tracking, and interview management. Our job portal solutions help businesses streamline their recruitment processes efficiently.",
        points: [
            "Job Portal & Recruitment Platform Development",
            "Employer & Recruiter Dashboards",
            "Resume Upload, Parsing & Management",
            "Candidate Tracking & Hiring Workflow",
            "Interview Scheduling & Automation",
        ],
        technologies: ["Laravel", "Django", "MySQL"],
    },
};

