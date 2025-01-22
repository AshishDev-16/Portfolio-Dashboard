# Portfolio Dashboard

A modern web dashboard built with Next.js 14 and Strapi CMS, featuring a responsive design and advanced filtering capabilities.

## 🚀 Features

- **Responsive Design**
  - Mobile-first approach
  - Custom mobile navigation
  - Adaptive layouts for all screen sizes

- **Portfolio Management**
  - Project listings with images
  - Category-based organization
  - Advanced filtering system
  - Real-time search functionality

- **Modern UI Components**
  - Custom filter modals
  - Dynamic navigation
  - Smooth transitions
  - Loading states

## 🛠 Tech Stack

- **Frontend**
  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - React Hooks
  - SWR for data fetching

- **Backend**
  - Strapi v4
  - PostgreSQL
  - Cloudinary (media storage)

## 🏃‍♂️ Running Locally

### Prerequisites
- Node.js 18+
- PostgreSQL
- npm/yarn

### Backend Setup
```bash
cd backend
npm install
# Configure your .env file using .env.example as template
npm run develop
```

### Frontend Setup
```bash
cd frontend
npm install
# Configure your .env.local
npm run dev
```

### Environment Variables

Backend (.env):
```env
HOST=0.0.0.0
PORT=1337
# Add your Cloudinary credentials
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
# Database configuration
DATABASE_CLIENT=postgres
DATABASE_URL=your_database_url
```

Frontend (.env.local):
```env
NEXT_PUBLIC_STRAPI_API_TOKEN=your_strapi_api_token
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

## 📱 Mobile-First Approach

The application is designed with a mobile-first philosophy, featuring:
- Bottom navigation for mobile users
- Responsive cards and layouts
- Touch-friendly interface
- Optimized mobile filtering

## 🔍 Search & Filter

- Real-time search functionality
- Multiple filter criteria:
  - Language
  - Price range
  - Sort options
- Separate desktop and mobile filter interfaces

## 📸 Screenshots

![Screenshot 1](./public/images/screenshot1.png)
![Screenshot 2](./public/images/screenshot2.png)

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

[MIT](https://choosealicense.com/licenses/mit/) 