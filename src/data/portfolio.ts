import naijathreads from "@/assets/naijathreads.png";
import thomes from "@/assets/thomes.png";
import learnbridge from "@/assets/learnbridge.png";
import farmpulse from "@/assets/farmpulse.png";
import ninetyminds from "@/assets/ninetyminds.png";

export type Project = {
  id: string;
  title: string;
  category: "E-commerce" | "Real Estate" | "EdTech" | "Business" | "Landing Page";
  tagline: string;
  description: string;
  image?: string;
  url?: string;
  tags: string[];
  year: string;
};

export const projects: Project[] = [
  {
    id: "t-homes",
    title: "T Homes",
    category: "Real Estate",
    tagline: "Property listings & agency website",
    description:
      "A polished real estate platform for browsing properties, agent listings and direct inquiries — built for trust, speed and a clean buyer experience.",
    image: thomes,
    url: "https://t-homes.name.ng",
    tags: ["Listings", "Search & Filters", "Agent Profiles"],
    year: "2026",
  },
  {
    id: "learnbridge",
    title: "LearnBridge",
    category: "EdTech",
    tagline: "Tech skills learning platform",
    description:
      "An EdTech platform built for students learning real tech skills — course management, clean UI and a distraction-free learning experience.",
    image: learnbridge,
    url: "https://techbridge.naijathreads.workers.dev/",
    tags: ["Courses", "Student Dashboard", "Clean UX"],
    year: "2026",
  },
  {
    id: "ninety-minds",
    title: "Ninety Minds",
    category: "Business",
    tagline: "Grassroots football talent & wellness platform",
    description:
      "A platform for scouting grassroots Nigerian football talent and supporting player wellness — featured players, wellness hub, club management and talent discovery.",
    image: ninetyminds,
    url: "https://ninetyminds.naijathreads.workers.dev",
    tags: ["Sports Tech", "Talent Scouting", "Wellness"],
    year: "2026",
  },
  {
    id: "naijathreads",
    title: "NaijaThreads",
    category: "E-commerce",
    tagline: "Nigerian fashion e-commerce store",
    description:
      "A conversion-focused online store built for Nigerian fashion brands — product listings, cart and checkout flows designed to feel premium and load fast on mobile.",
    image: naijathreads,
    url: "https://naijathreads.name.ng/",
    tags: ["Product Catalog", "Cart & Checkout", "Mobile-first"],
    year: "2026",
  },
  {
    id: "farmpulse",
    title: "FarmPulse Nigeria",
    category: "Business",
    tagline: "Independent agricultural news platform",
    description:
      "An editorial news platform covering Nigerian agriculture — agritech, livestock, markets, climate and policy. Built for farmers, agribusiness owners and food-system professionals.",
    image: farmpulse,
    url: "https://farmpulse-rosy.vercel.app",
    tags: ["News & Editorial", "Content Platform", "Mobile-first"],
    year: "2026",
  },
  
];

export const services = [
  {
    title: "Landing Pages",
    description:
      "A clean, fast landing page that turns visitors into customers — built for restaurants, salons, logistics and small businesses.",
    price: "₦150k",
    features: ["1–3 sections", "Mobile-first", "Contact form", "Delivered in days"],
  },
  {
    title: "Full Business Website",
    description:
      "A complete multi-page website giving your business a credible online home — about, services, contact and more.",
    price: "₦200k",
    features: ["Up to 6 pages", "CMS-ready", "SEO setup", "Custom design"],
  },
  {
    title: "E-commerce / Real Estate / EdTech",
    description:
      "Product catalogs, property listings or course platforms — robust web apps tailored to your business model.",
    price: "₦300k",
    features: ["Custom features", "Admin dashboard", "Payments-ready", "Scalable"],
  },
];

export const profile = {
  name: "Bright Joel",                  // ← add your name
  role: "Software Developer & Web Designer", // ← add your role
  blurb:
    "I help Nigerian founders and small businesses launch beautiful, fast websites — from landing pages to e-commerce, real estate and EdTech platforms.",
  location: "Abuja, Nigeria",
  email: "joelbright508@gmail.com",         // ← add your email
  whatsapp: "2349040522602",          // ← add your number (no +)
  avatar: undefined as string | undefined,
  stats: [
    { label: "Projects shipped", value: "5+" },
    { label: "Happy clients", value: "100%" },
    { label: "Avg. delivery", value: "1–2 wks" },
    { label: "Available", value: "Now" },
  ],
};

// Replace the blogPosts section at the bottom of your portfolio.ts with this

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "why-your-business-needs-a-website",
    title: "Why every Nigerian business needs a website in 2025",
    excerpt:
      "Instagram and WhatsApp are great, but they're rented land. A website is the only online space you truly own — and it works for you 24/7 even when you're asleep.",
    category: "Business",
    readTime: "3 min read",
    date: "May 2025",
    content: `A lot of Nigerian business owners think Instagram and WhatsApp are enough. And honestly? They work — until they don't.

Here's the problem: Instagram can ban your account tomorrow. WhatsApp can go down for hours. Your followers can disappear overnight. All of that is rented land. You don't own any of it.

A website is the only online space that is completely yours. No algorithm deciding who sees your content. No platform that can shut you down. Just your business, your brand, your customers — 24 hours a day, 7 days a week, even while you sleep.

What a website actually does for your business

A customer hears about you and Googles your name. If nothing shows up, they move on to someone else. A website makes you real. It tells people you're serious.

It also works as your best salesperson. It answers questions, shows your products or services, builds trust, and collects inquiries — all without you lifting a finger.

But I already get customers on Instagram...

Great. Now imagine getting those same customers plus the ones who don't use Instagram. The ones who Google. The ones who want a professional email address to send inquiries to. The ones who won't buy from someone without a proper online presence.

A website doesn't replace Instagram. It completes it.

If you're a Nigerian business owner still without a website in 2025, you're not just missing out — you're actively losing customers to competitors who have one.`,
  },
  {
    id: "what-makes-a-good-nigerian-business-website",
    title: "5 things every Nigerian business website must have",
    excerpt:
      "Most Nigerian business websites lose customers in the first 10 seconds. Here's what separates the ones that convert from the ones that just look nice.",
    category: "Web Design",
    readTime: "4 min read",
    date: "May 2025",
    content: `Most Nigerian business websites lose visitors in the first 10 seconds. Not because the business is bad — but because the website doesn't do its job.

Here are 5 things that separate websites that bring in customers from ones that just take up space on the internet.

1. A clear headline that says exactly what you do

The moment someone lands on your site, they should know what you offer and who it's for. "Welcome to our website" is not a headline. "We deliver fresh groceries to your door in Lagos" is.

2. A phone number or WhatsApp button that's easy to find

Nigerian customers want to talk to someone before they buy. Make it effortless. Put your WhatsApp button at the top of every page. Don't make people hunt for it.

3. Real photos, not stock images

Stock photos of random people smiling in suits kill trust immediately. Use real photos of your products, your shop, your team, your work. Even phone photos beat fake stock images every time.

4. Social proof

Reviews, testimonials, client logos, before-and-after results — whatever you have. People trust other people more than they trust businesses. Show them that others have used you and been happy.

5. A fast, mobile-friendly design

Over 80% of Nigerians browse on their phones. If your website takes more than 3 seconds to load or looks broken on mobile, people leave. Speed and mobile experience are not optional.

Get these five things right and your website will work harder than most.`,
  },
  {
    id: "real-estate-websites-nigeria",
    title: "Why Nigerian estate agents are losing clients without a website",
    excerpt:
      "Buyers are Googling properties before they call anyone. If your agency isn't showing up online, you're invisible to your best potential clients.",
    category: "Real Estate",
    readTime: "3 min read",
    date: "May 2025",
    content: `Before a buyer calls any agent today, they search online first.

They Google "3 bedroom flat in Lekki." They browse listings. They compare prices. They look at photos. They check if the agent looks legitimate. All of this happens before a single phone call is made.

If your agency isn't showing up in that search, you don't exist to that buyer.

The trust problem

Real estate is one of the highest-trust industries there is. People are spending millions of naira. They need to feel confident before they commit. A professional website — with your listings, your team, your past deals, your contact information — does more to build that trust than any WhatsApp message ever can.

What a good real estate website does

It shows all your available properties in one place, with photos, prices and locations. It lets buyers filter by budget and area. It shows them you're an established agency, not a one-man operation running from a phone. And it captures leads even at 2am when you're not available to respond.

The agents winning right now

The estate agents growing their business in Nigeria today have one thing in common — they show up online where their buyers are already looking. They're not just posting on Facebook and hoping for the best. They have a professional presence that works for them around the clock.

The good news? A proper real estate website doesn't have to cost a fortune or take months to build. If you're an estate agent or property company ready to stop losing clients to Google, feel free to reach out.`,
  },
];