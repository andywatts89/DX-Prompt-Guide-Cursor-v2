# DX Prompting Guide

A comprehensive prompt library designed for product designers and UX professionals. This platform helps designers discover, filter, and utilize high-quality AI prompts tailored for tools like ChatGPT, Gemini, and UX Pilot. Our goal is to centralize design-related prompting resources, streamline AI adoption in design workflows, and enhance designer productivity.

## 🎯 Core Goals

- **Accelerate UX & Product Design Workflows**: Speed up research, ideation, and prototyping with ready-made, high-quality AI prompts
- **Centralize Prompt Knowledge**: Create a single source of truth for the team's most useful prompts
- **Promote Reusability**: Enable teams to reuse successful prompts and maintain consistency across projects
- **Enable Easy Discovery**: Find relevant prompts through intuitive search and filtering
- **Support Prompt-Driven Culture**: Elevate prompt writing as a key design skill

## ✨ Features

- 🔍 Advanced search across prompt titles, tags, and content
- 🏷️ Filter prompts by design phase and activity
- 📱 Mobile-friendly, responsive design
- 📊 Real-time view count tracking
- 🎨 Optional thumbnail images for visual context
- 📋 One-click prompt copying
- 👤 Secure admin interface for content management

## 🛠️ Technical Stack

- **Frontend**: React with Tailwind CSS
- **Authentication**: Supabase Auth
- **Icons**: Lucide React
- **Routing**: React Router
- **Modern JavaScript**: ES6+

## 🎨 Components

- **PromptGrid**: Responsive card layout showcasing prompts
- **PromptCard**: Individual prompt displays with:
  - Gradient background header
  - Design phase badge
  - View count and date
  - Activity tags
- **PromptDetail**: Comprehensive prompt view with:
  - Large thumbnail
  - Full prompt content
  - Copy button
  - Metadata and tags
- **FilterChips**: Design phase and activity filtering
- **SearchSection**: Keyword-based search functionality

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account (for admin features)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/andywatts89/DX-Prompt-Guide-Cursor-v2.git
cd DX-Prompt-Guide-Cursor-v2/landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env.local
# Add your Supabase credentials
```

4. Start the development server:
```bash
npm start
```

Visit `http://localhost:3000` to view the application.

## 📈 Success Metrics

- Prompt View Count (total and per prompt)
- Prompt Copy Click Rate
- User Engagement Rate
- Library Growth Rate
- Admin Submission Rate

## 🗺️ Roadmap

### MVP (Current Version)
- Prompt library with filter and search
- Detail view with copy functionality
- Admin interface for content management
- View tracking

### Future Versions
- Prompt Selector Wizard
- User-submitted prompts
- Trending sort
- Prompt bundles/templates
- AI-powered prompt preview
- Search result highlighting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
