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
    title: 'LoongEDeviceShop',
    description: 'A web application for electrical devices shopping.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/GuillaumeYue/LoongEDeivceShop',
    demo: '',
    coverImage: `${base}projects/LOONG-Home.png`,
    images: [
      `${base}projects/LOONG-Home.png`,
      `${base}projects/LOONG-Catalog.png`,
      `${base}projects/Loong-Product.png`,
      `${base}projects/Loong-Cart.png`,
      `${base}projects/Loong-Comment.png`,
      `${base}projects/Loong-OrderSummary.png`,
      `${base}projects/Loong-OrderInfo.png`,
      `${base}projects/Loong-Payment.png`,
      `${base}projects/Loong-Shipping.png`,
      `${base}projects/Loong-Profile.png`,
    ],
  },
  {
    title: 'VoltMart',
    description:
      'An Android e-commerce application for electronic devices with Firebase authentication, product management, and real-time database integration.',
    tech: ['Android Studio', 'Firebase'],
    github: 'https://github.com/GuillaumeYue/VoltMart',
    demo: '',
    coverImage: `${base}projects/VoltMart-Home.png`,
    images: [
      `${base}projects/VoltMart-Splash.png`,
      `${base}projects/VoltMart-Home.png`,
      `${base}projects/VoltMart-Product.png`,
      `${base}projects/VoltMart-Cart.png`,
      `${base}projects/VoltMart-Checkout.png`,
      `${base}projects/VoltMart-Payment.png`,
      `${base}projects/VoltMart-Order.png`,
      `${base}projects/VoltMart-Review.png`,
    ],
  },
  {
    title: 'AnimalCareClinic',
    description:
      'A clinic management system for appointments, pet records, and staff workflows.',
    tech: ['ASP.NET MVC', 'SQL Server', 'Entity Framework'],
    github: 'https://github.com/GuillaumeYue/AnimalCareClinic',
    demo: '',
    coverImage: `${base}projects/AnimalCareClinic-WelcomePage.png`,
    images: [
      `${base}projects/AnimalCareClinic-WelcomePage.png`,
      `${base}projects/AnimalCareClinic-Welcome1.png`,
      `${base}projects/AnimalCareClinic-Appointments.png`,
      `${base}projects/AnimalCareClinic-VetDashboard.png`,
      `${base}projects/AnimalCareClinic-VetDashboard1.png`,
      `${base}projects/AnimalCareClinic-CreateAccount.png`,
      `${base}projects/AnimalCareClinic-CreateMedicalRecordpng.png`,
      `${base}projects/AnimalCareClinic-MedicalRecoed.png`,
      `${base}projects/AnimalCareClinic-Workland.png`,
    ],
  },
  {
    title: 'Quartier',
    description:
      'A SwiftUI application focused on property and schedule management.',
    tech: ['SwiftUI', 'Core Data', 'Firebase'],
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
