# Abhinish Tiwari - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer. Built with React, Vite, and Tailwind CSS.

## 🌟 Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Single Page Application** - Smooth scrolling navigation between sections
- **Interactive Animations** - Powered by Framer Motion
- **Contact Form** - Functional contact form with EmailJS integration
- **Project Showcase** - Detailed project cards with live demos and GitHub links
- **Skills Visualization** - Interactive skill progress bars
- **SEO Optimized** - Meta tags and structured data with React Helmet

## 🚀 Live Demo

Visit the live website: [Your Portfolio URL]

## 📋 Sections

- **Home** - Hero section with introduction and social links
- **About** - Personal information, experience, and education timeline
- **Projects** - Showcase of featured projects with detailed descriptions
- **Skills** - Technical skills organized by categories with progress indicators
- **Contact** - Contact form and personal information

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Icons** - Popular icon library

### Additional Tools
- **EmailJS** - Contact form email service
- **React Helmet Async** - SEO and meta tag management
- **React Error Boundary** - Error handling
- **ESLint** - Code linting and formatting

### Deployment
- **Firebase Hosting** - Fast and secure web hosting
- **Multiple Environments** - Production, staging, and development builds

## 📁 Project Structure

```
Abhinish-Portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── common/         # Shared components (buttons, cards, etc.)
│   │   ├── layout/         # Layout components (navbar, footer)
│   │   ├── home/           # Home section components
│   │   ├── about/          # About section components
│   │   ├── projects/       # Projects section components
│   │   ├── skills/         # Skills section components
│   │   └── contact/        # Contact section components
│   ├── context/            # React context providers
│   ├── data/               # Static data and content
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API and external services
│   ├── styles/             # Global styles and CSS
│   ├── utils/              # Utility functions
│   └── assets/             # Images, icons, and static files
├── dist/                   # Production build output
├── node_modules/           # Dependencies
├── public/                 # Static assets
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── firebase.json          # Firebase hosting configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhinish7883/portfolio-website.git
   cd portfolio-website
   ```

2. **Navigate to the project directory**
   ```bash
   cd Abhinish-Portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   Create a `.env` file in the Abhinish-Portfolio directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build:prod` - Build for production
- `npm run build:staging` - Build for staging
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy:prod` - Deploy to production
- `npm run deploy:staging` - Deploy to staging
- `npm run deploy:dev` - Deploy to development


## 🌐 Deployment

### Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   npm run firebase:login
   ```

3. **Initialize Firebase**
   ```bash
   npm run firebase:init
   ```

4. **Deploy to production**
   ```bash
   npm run deploy:prod
   ```

## 📧 Contact Form Setup
 
To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Add your credentials to the `.env` file
4. The form will automatically send emails to your configured address

## 📋 Quick Copy Commands

### Complete Setup (Copy & Paste)
```bash
# Clone and setup the project
git clone https://github.com/abhinish7883/portfolio-website.git
cd portfolio-website
cd Abhinish-Portfolio
npm install

# Create environment file
echo "VITE_EMAILJS_SERVICE_ID=your_service_id" > .env
echo "VITE_EMAILJS_TEMPLATE_ID=your_template_id" >> .env
echo "VITE_EMAILJS_PUBLIC_KEY=your_public_key" >> .env

# Start development
npm run dev
```

### Environment Variables Template
```env
# Copy this to your .env file in the Abhinish-Portfolio directory
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Firebase Deployment Commands
```bash
# One-time setup
npm install -g firebase-tools
npm run firebase:login
npm run firebase:init

# Deploy commands (run from Abhinish-Portfolio directory)
npm run deploy:prod     # Production
npm run deploy:staging  # Staging
npm run deploy:dev      # Development
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Abhinish Tiwari**
- Email: abhinish990@gmail.com
- LinkedIn: [abhinish-tiwari7883](https://www.linkedin.com/in/abhinish-tiwari7883/)
- GitHub: [abhinish7883](https://github.com/abhinish7883)
- Location: Patna, Bihar, India

## 🙏 Acknowledgments

- Thanks to the React and Vite communities for excellent documentation
- Tailwind CSS for the amazing utility-first approach
- Framer Motion for smooth animations
- All the open-source contributors who made this project possible

---

⭐ If you found this project helpful, please give it a star!
