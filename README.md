# 🌐 Text Translator

A modern, fast, and free text translation web application built with **React**, **Vite**, and **Tailwind CSS**. Supports 13+ languages with a beautiful, responsive user interface.

## ✨ Features

- 🌍 **13+ Languages Supported**: English, Spanish, French, German, Italian, Portuguese, Russian, Japanese, Chinese, Korean, Arabic, Hindi, Telugu
- 🔄 **Swap Languages**: Quickly reverse source and target languages
- 📋 **Copy to Clipboard**: One-click copy of translated text
- 🗑️ **Clear Button**: Reset all fields with one click
- ✅ **No API Key Required**: Uses free MyMemory Translation API
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast & Instant**: Get translations instantly without delays
- 🎨 **Beautiful UI**: Modern gradient design with Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/text-translator.git
cd text-translator
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🧪 Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
text-translator/
├── src/
│   ├── components/
│   │   └── Translator.jsx      # Main translator component
│   ├── App.jsx                 # App container component
│   ├── main.jsx                # Entry point
│   ├── index.css               # Tailwind CSS styles
├── index.html                  # HTML entry file
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.cjs          # PostCSS config
├── .env.example                # Environment variables template
└── README.md                   # This file
```

## 🔧 Technologies Used

- **React 18.2** - UI library
- **Vite 5** - Build tool & dev server
- **Tailwind CSS 3.4** - Styling
- **React Select 5.7** - Language dropdown
- **MyMemory API** - Translation service (free, no key required)

## 🌐 Translation API

This project uses the **MyMemory Translation API** which is:
- ✅ **Completely Free** - No cost at all
- ✅ **No Registration Required** - Works out of the box
- ✅ **Unlimited Requests** - Within fair use limits
- ✅ **No API Key Needed** - Just use it!

API Documentation: [MyMemory API](https://mymemory.translated.net/)

## 📝 Environment Variables

The `.env` file is not required for this project since we use a free API. However, you can create one if needed:

```properties
# Using MyMemory Free Translation API - No API key required!
# This translator works without any API keys
```

## 🎯 How to Use

1. **Select Source Language**: Choose the language of the text you want to translate
2. **Select Target Language**: Choose which language to translate to
3. **Enter Text**: Type or paste your text in the input area
4. **Translate**: Click the "Translate" button
5. **Copy Result**: Click "Copy to Clipboard" to copy the translation
6. **Swap**: Click "Swap" to reverse source and target languages
7. **Clear**: Click "Clear" to reset all fields

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Then drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
1. Update `vite.config.js` with your repo name
2. Run `npm run build`
3. Push the `dist` folder to `gh-pages` branch

## 🐛 Troubleshooting

### "Translation failed" error
- Check your internet connection
- Try a different language pair
- The API might be temporarily unavailable

### Blank page
- Clear browser cache and reload
- Check browser console for errors
- Ensure Node.js version is 16+

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📧 Support

For issues or questions, please open a GitHub issue or contact the maintainer.

## 🙏 Acknowledgments

- MyMemory API for providing free translation service
- React community for amazing tools and libraries
- Tailwind CSS for beautiful styling utilities

---

Made with ❤️ by Your Name
