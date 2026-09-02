export type Project = {
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
  coverImage: string
  images: string[]
}

const base = import.meta.env.BASE_URL

export const projects: Project[] = [
  {
    title: 'Huddle',
    description:
      'A real-time group decision iOS app — groups join a room by code, swipe on nearby restaurants (Google Places), and a game-show reveal surfaces the unanimous pick. Built with Swift 6 strict concurrency and a distributed TypeScript backend; verified correct across concurrent server processes with ~70 automated checks.',
    tech: ['Swift 6', 'SwiftUI', 'TypeScript', 'Node.js', 'Express', 'WebSocket', 'PostgreSQL', 'Redis'],
    github: '',
    demo: '',
    coverImage: `${base}projects/Huddle-SwipeDeck.png`,
    images: [
      `${base}projects/Huddle-Home.png`,
      `${base}projects/Huddle-Lobby.png`,
      `${base}projects/Huddle-SwipeDeck.png`,
      `${base}projects/Huddle-Match.png`,
    ],
  },
  {
    title: 'Wild Natural',
    description:
      'A full-stack e-commerce platform for Wild Natural, a botanical skincare brand. Customers can browse the catalog, manage a cart, check out with Stripe, and book personalized product customization appointments. Includes an admin dashboard for orders, products, promo codes, and customization requests.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Stripe'],
    github: '',
    demo: '',
    coverImage: `${base}projects/WildNatural-Home.png`,
    images: [
      `${base}projects/WildNatural-Welcome.png`,
      `${base}projects/WildNatural-Home.png`,
      `${base}projects/WildNatural-Products.png`,
      `${base}projects/WildNatural-About.png`,
      `${base}projects/WildNatural-Customize.png`,
      `${base}projects/WildNatural-Login.png`,
      `${base}projects/WildNatural-Signup.png`,
    ],
  },
  {
    title: 'QuickBite',
    description:
      'A full-stack restaurant ordering web app with real-time order tracking, role-based access for customers and staff, and live kitchen updates over WebSocket.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT'],
    github: 'https://github.com/GuillaumeYue/Quickbite',
    demo: '',
    coverImage: `${base}projects/QuickBite-Landing.png`,
    images: [
      `${base}projects/QuickBite-Landing.png`,
      `${base}projects/QuickBite-Menu.png`,
      `${base}projects/QuickBite-ItemDrawer.png`,
      `${base}projects/QuickBite-MyOrders.png`,
      `${base}projects/QuickBite-OrderDetail.png`,
      `${base}projects/QuickBite-StaffOrders.png`,
      `${base}projects/QuickBite-StaffMenu.png`,
      `${base}projects/QuickBite-AddItem.png`,
      `${base}projects/QuickBite-Login.png`,
      `${base}projects/QuickBite-Signup.png`,
    ],
  },
  {
    title: 'Quartier',
    description:
      'A SwiftUI iOS rental marketplace with dual panels for tenants and landlords — landlords post listings, manage income, schedule viewings, and message tenants; tenants map-search properties, pay rent, and submit maintenance requests.',
    tech: ['SwiftUI', 'Swift', 'Firebase', 'Core Data', 'MapKit'],
    github: 'https://github.com/GuillaumeYue/Quartier',
    demo: '',
    coverImage: `${base}projects/Quartier-Home.png`,
    images: [
      `${base}projects/Quartier-Home.png`,
      `${base}projects/Quartier-Listing.png`,
      `${base}projects/Quartier-Profile.png`,
      `${base}projects/Quartier-Appointment.png`,
      `${base}projects/Quartier-EditList.png`,
      `${base}projects/Quartier-EditSchedule.png`,
    ],
  },
]
