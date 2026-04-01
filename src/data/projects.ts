export type Project = {
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
  coverImage: string
  images: string[]
}

export const projects: Project[] = [
  {
    title: 'LoongEDeviceShop',
    description: 'A web application for electrical devices shopping.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/GuillaumeYue/LoongEDeivceShop',
    demo: '',
    coverImage: '/projects/LOONG-Home.png',
    images: [
      '/projects/LOONG-Home.png',
      '/projects/LOONG-Catalog.png',
      '/projects/Loong-Product.png',
      '/projects/Loong-Cart.png',
      '/projects/Loong-Comment.png',
      '/projects/Loong-OrderSummary.png',
      '/projects/Loong-OrderInfo.png',
      '/projects/Loong-Payment.png',
      '/projects/Loong-Shipping.png',
      '/projects/Loong-Profile.png',
    ],
  },
  {
    title: 'VoltMart',
    description:
      'An Android e-commerce application for electronic devices with Firebase authentication, product management, and real-time database integration.',
    tech: ['Android Studio', 'Firebase'],
    github: 'https://github.com/GuillaumeYue/VoltMart',
    demo: '',
    coverImage: '/projects/VoltMart-Home.png',
    images: [
      '/projects/VoltMart-Splash.png',
      '/projects/VoltMart-Home.png',
      '/projects/VoltMart-Product.png',
      '/projects/VoltMart-Cart.png',
      '/projects/VoltMart-Checkout.png',
      '/projects/VoltMart-Payment.png',
      '/projects/VoltMart-Order.png',
      '/projects/VoltMart-Review.png',
    ],
  },
  {
    title: 'AnimalCareClinic',
    description:
      'A clinic management system for appointments, pet records, and staff workflows.',
    tech: ['ASP.NET MVC', 'SQL Server', 'Entity Framework'],
    github: 'https://github.com/GuillaumeYue/AnimalCareClinic',
    demo: '',
    coverImage: '/projects/AnimalCareClinic-WelcomePage.png',
    images: [
      '/projects/AnimalCareClinic-WelcomePage.png',
      '/projects/AnimalCareClinic-Welcome1.png',
      '/projects/AnimalCareClinic-Appointments.png',
      '/projects/AnimalCareClinic-VetDashboard.png',
      '/projects/AnimalCareClinic-VetDashboard1.png',
      '/projects/AnimalCareClinic-CreateAccount.png',
      '/projects/AnimalCareClinic-CreateMedicalRecordpng.png',
      '/projects/AnimalCareClinic-MedicalRecoed.png',
      '/projects/AnimalCareClinic-Workland.png',
    ],
  },
  {
    title: 'Quartier',
    description:
      'A SwiftUI application focused on property and schedule management.',
    tech: ['SwiftUI', 'Core Data', 'Firebase'],
    github: 'https://github.com/GuillaumeYue/Quartier',
    demo: '',
    coverImage: '/projects/Quartier-Home.png',
    images: [
      '/projects/Quartier-Home.png',
      '/projects/Quartier-Listing.png',
      '/projects/Quartier-Profile.png',
      '/projects/Quartier-Appointment.png',
      '/projects/Quartier-EditList.png',
      '/projects/Quartier-EditSchedule.png',
    ],
  },
]