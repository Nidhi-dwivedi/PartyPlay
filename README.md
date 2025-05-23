# 🎉 Party Play - Interactive Party Games

Party Play is a collection of fun, interactive party games designed for social gatherings, parties, and get-togethers. This web application includes multiple games to keep everyone entertained.

## 🎮 Available Games

### 🍾 Spin the Bottle
A digital version of the classic game where a virtual bottle spins and provides actions or challenges for players to complete.

### 🤔 Never Have I Ever
Take turns revealing things you've never done! If other players have done it, they take a drink or lose a point.

### 🎭 Charades
Act out words or phrases without speaking while your team tries to guess what you're portraying.

### 💬 Taboo
Describe a word without using certain "taboo" terms that would make guessing too easy.

### ❓ Truth or Dare
Choose between answering a revealing question truthfully or performing a challenging dare.

### 🤷 Would You Rather
Choose between two equally intriguing, disgusting, or difficult scenarios.

### 🎲 Custom Game
Create your own game with custom questions or challenges.

## 📱 Features

- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Sound Effects**: Audible feedback for interactions (can be enabled/disabled)
- **Player Count Settings**: Customize games for your group size
- **Difficulty Levels**: Choose from mild, medium, or spicy content 
- **Visual Animations**: Engaging UI with modern animations and effects

## 🔧 Technical Details

This application is built with:

- React (with Vite)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Canvas API for animations
- React Router for navigation

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone <https://github.com/Nidhi-dwivedi/PartyPlay.git>

# Enter the project directory
cd party-play

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Building for Production

```bash
# Generate a production build
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

- **src/**: Contains the source code of the application.
  - **components/**: Contains reusable UI components.
    - **bottle-game/**: Components related to the Spin the Bottle game.
    - **ui/**: UI components used across the application.
  - **contexts/**: Contains React context providers for state management.
  - **data/**: Contains data files used by the application.
  - **hooks/**: Contains custom React hooks.
  - **lib/**: Contains utility libraries and functions.
  - **pages/**: Contains the main pages of the application.
  - **utils/**: Contains utility functions.
  - **App.tsx**: The main application component.
  - **main.tsx**: The entry point of the application.

## 🎨 Themes

Party Play comes with multiple themes:
- Default
- Aesthetic
- Retro
- Cyberpunk

Change the theme in the application settings to match your party's vibe!

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgements

- Sound effects from [Mixkit](https://mixkit.co/)
- Icons from [Lucide Icons](https://lucide.dev/)
