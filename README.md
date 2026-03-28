# Anurag's 3D Portfolio - The Code Architect

An interactive 3D portfolio built with Next.js, Three.js, and React showcasing Anurag's skills, projects, and achievements in a futuristic space-themed environment.

## 🚀 Features

- **Interactive 3D Scene**: Futuristic space environment with floating skill nodes and orbiting achievements
- **Responsive Design**: Mobile-first approach with smooth animations
- **Modern Tech Stack**: Next.js 14, React 18, Three.js, Framer Motion
- **Performance Optimized**: 60fps animations and optimized rendering
- **Dark Theme**: Neon-accented dark interface with glowing effects

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **3D Graphics**: Three.js with @react-three/fiber
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS with custom neon themes
- **TypeScript**: Full TypeScript support
- **Deployment**: Vercel (ready)

## 📁 Project Structure

```
3d-portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── MainScene.tsx      # 3D scene with skill galaxy
│   ├── Navigation.tsx     # Responsive navigation
│   ├── HeroSection.tsx    # Landing section
│   ├── SkillsSection.tsx  # Skills showcase
│   ├── ProjectsSection.tsx# Projects grid
│   ├── ExperienceSection.tsx # Professional timeline
│   ├── AchievementsSection.tsx # Awards & recognitions
│   └── EducationSection.tsx # Education & certifications
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## 🎨 Design Concept

### "The Code Architect" Theme
- **Skill Galaxy**: Floating nodes representing technical skills (AWS, Kubernetes, React, etc.)
- **Achievement Orbits**: Orbiting badges for Codeforces, CodeChef, AWS certifications
- **Celestial Timeline**: Education and experience presented as cosmic journey
- **Neon Accents**: Blue, purple, and green neon colors against dark space background

### Sections
1. **Hero**: Animated introduction with quick stats
2. **Skills**: Interactive skill nodes with proficiency indicators
3. **Projects**: Featured projects with technologies and links
4. **Experience**: Professional timeline with achievements
5. **Achievements**: Competitive programming ratings and awards
6. **Education**: Academic background and continuous learning

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd 3d-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: Full 3D experience with hover effects
- **Tablet**: Adapted 3D scene with touch interactions
- **Mobile**: Simplified interface with essential animations

## 🎯 Performance Features

- **Lazy Loading**: Components load on scroll
- **Optimized 3D**: Efficient Three.js rendering
- **Smooth Animations**: 60fps animations with Framer Motion
- **Code Splitting**: Automatic code splitting with Next.js

## 🌟 Customization

### Adding New Skills
Edit `components/MainScene.tsx` to add new skill nodes:

```typescript
const skillNodes = [
  { position: [x, y, z], color: '#hex', label: 'Skill Name' },
  // Add more skills...
]
```

### Updating Projects
Modify `components/ProjectsSection.tsx`:

```typescript
const projects = [
  {
    title: "Project Title",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    // ... other properties
  }
]
```

### Styling Customization
Update colors and themes in `tailwind.config.js`:

```javascript
extend: {
  colors: {
    'neon-blue': '#00f5ff',
    'neon-purple': '#9d4edd',
    // Customize colors...
  }
}
```

## 📊 Analytics & SEO

- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance Monitoring**: Core Web Vitals optimization
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation

## 🚀 Deployment

The project is configured for easy deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables if needed
3. Deploy with automatic CI/CD

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Portfolio**: [Live Demo Link]
- **GitHub**: [Your GitHub]
- **LinkedIn**: [Your LinkedIn]
- **Email**: [Your Email]

---

Built with ❤️ using Next.js, Three.js, and modern web technologies.