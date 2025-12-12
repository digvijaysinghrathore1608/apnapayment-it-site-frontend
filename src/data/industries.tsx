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
    "fintech": {
        title: "Fintech",
        description: "Secure and scalable solutions for finance, payments and digital banking.",
        longDescription:
            "We build high-security fintech platforms including payments, wallets, lending apps, KYC verification, and automation tools. Our solutions focus on compliance, reliability and real-time processing.",
        points: [
            "UPI / Wallet Integration",
            "Recharge & Bill Payment System",
            "Loan Management System",
            "KYC Verification & Automation",
            "Secure Payment Gateway Integration"
        ],
        technologies: ["Django", "Laravel", "Next.js", "AWS", "PostgreSQL"]
    },

    "healthcare": {
        title: "Healthcare",
        description:
            "Digital solutions for hospitals, clinics, doctors and health startups.",
        longDescription:
            "We develop reliable healthcare systems with appointment booking, EMR, telemedicine, and patient management while maintaining data security and privacy standards.",
        points: [
            "Appointment Booking System",
            "Telemedicine Platforms",
            "Electronic Medical Records (EMR)",
            "Patient Monitoring Dashboard",
            "Doctor & Patient Apps"
        ],
        technologies: ["React Native", "Django", "Firebase", "AWS"]
    },

    "fitness": {
        title: "Fitness",
        description:
            "Custom apps for fitness trainers, gyms and wellness platforms.",
        longDescription:
            "We help fitness brands go digital with interactive workout apps, subscription plans, diet tracking and user progress monitoring dashboards.",
        points: [
            "Fitness Training Apps",
            "Diet & Workout Tracking",
            "Subscription Plans",
            "Gym Management Software",
            "Wearable Integrations"
        ],
        technologies: ["Next.js", "React Native", "Firebase"]
    },

    "logistics": {
        title: "Logistics",
        description:
            "Smart logistics and delivery management solutions.",
        longDescription:
            "We build modern logistics apps with real-time tracking, delivery automation, route optimization and fleet management.",
        points: [
            "Delivery Partner App",
            "Route Optimization System",
            "Real-Time Order Tracking",
            "Fleet & Warehouse Management",
            "Driver App Development"
        ],
        technologies: ["Flutter", "Node.js", "Google Maps API"]
    },

    "e-commerce": {
        title: "E-Commerce",
        description:
            "Powerful e-commerce platforms for all business sizes.",
        longDescription:
            "From single-vendor stores to multi-vendor marketplaces, we create scalable and visually stunning e-commerce solutions.",
        points: [
            "Single & Multi-Vendor Store",
            "Order & Inventory Management",
            "Secure Payments",
            "Product Recommendation Engine",
            "Admin & Seller Dashboards"
        ],
        technologies: ["Next.js", "Laravel", "Stripe", "Razorpay"]
    },

    "food-hyperlocal": {
        title: "Food & Hyperlocal",
        description:
            "On-demand delivery apps for restaurants and hyperlocal businesses.",
        longDescription:
            "We build end-to-end food delivery systems including customer app, delivery partner app and restaurant dashboards.",
        points: [
            "Restaurant Listing System",
            "Food Delivery App",
            "Live Order Tracking",
            "Delivery Partner App",
            "Loyalty & Coupon System"
        ],
        technologies: ["React Native", "Node.js", "Firebase"]
    },

    "travel": {
        title: "Travel",
        description: "Travel booking, itinerary and tourism platform development.",
        longDescription:
            "We create user-friendly travel apps with hotel booking, itinerary management, maps, and package listings.",
        points: [
            "Travel Booking System",
            "Tour Package Listing",
            "Hotel & Ticket Booking",
            "Travel Planner App",
            "Navigation Integration"
        ],
        technologies: ["Next.js", "Python", "Google Maps API"]
    },

    "education": {
        title: "Education",
        description: "Smart learning solutions for institutes and students.",
        longDescription:
            "We develop digital learning platforms including LMS, exam systems and virtual classrooms to help students and teachers engage better.",
        points: [
            "Learning Management System",
            "Online Exam System",
            "Live Class Integration",
            "Student Dashboard",
            "Teacher Management System"
        ],
        technologies: ["Django", "React", "WebRTC"]
    },

    "home-inspection": {
        title: "Home Inspection",
        description: "Apps for property inspection and real estate surveys.",
        longDescription:
            "We provide digital tools for home inspectors including document management, inspection forms, checklists and reporting.",
        points: [
            "Property Inspection App",
            "Checklist Automation",
            "Photo/Video Upload System",
            "Report Generation",
            "Task Assignments"
        ],
        technologies: ["React Native", "Laravel"]
    },

    "wellness": {
        title: "Wellness",
        description: "Meditation, therapy and holistic wellness solutions.",
        longDescription:
            "We develop smooth wellness apps with meditation sessions, online therapy, habit tracking and subscription systems.",
        points: [
            "Meditation App",
            "Online Therapy Platform",
            "Habit Tracking",
            "Session Scheduling",
            "Subscription Plans"
        ],
        technologies: ["Flutter", "Node.js", "Firebase"]
    },

    "social-dating": {
        title: "Social & Dating",
        description: "Apps that connect people through chat, matching & communities.",
        longDescription:
            "We create feature-rich social and dating apps with real-time chat, profile matching, feeds and location-based search.",
        points: [
            "Real-Time Chat",
            "Swipe & Match System",
            "Profile Recommendations",
            "Verification System",
            "Location-Based Search"
        ],
        technologies: ["Next.js", "Socket.io", "MongoDB"]
    },

    "job-employment": {
        title: "Job & Employment",
        description: "Recruitment, HR and job portal system development.",
        longDescription:
            "We build modern job and HR platforms to streamline recruitment, candidate matching and hiring automation.",
        points: [
            "Job Portal Development",
            "Employer Dashboard",
            "Resume Upload & Parsing",
            "Candidate Tracking System",
            "Interview Scheduling"
        ],
        technologies: ["Laravel", "Django", "MySQL"]
    }
};
