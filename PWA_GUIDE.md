# CalSnap - PWA Installation Guide

## ✅ Your App is Now PWA-Ready!

CalSnap is configured as a Progressive Web App (PWA) that users can install on their devices without needing an APK file.

---

## 🚀 How to Deploy & Make Installable

### Step 1: Deploy to Vercel (Recommended)

1. **Push your code to GitHub** (using GitHub Desktop as discussed)

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository (`calsnap`)
   - Keep default settings
   - Add your environment variables:
     - `CLERK_SECRET_KEY`
     - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
     - `GEMINI_API_KEY`
     - `CLOUDINARY_URL`
     - `DATABASE_URL`
   - Click "Deploy"

3. **Your app will be live at:** `https://your-app.vercel.app`

---

## 📱 How Users Can Install on Android

### Method 1: Chrome Install Prompt (Automatic)
1. User visits your deployed URL on Android Chrome
2. They'll see an **"Install CalSnap"** prompt at the bottom
3. Tap **"Install"**
4. App appears on home screen like a native app!

### Method 2: Manual Install from Chrome Menu
1. Visit your app URL in Chrome
2. Tap the **three-dot menu** (⋮) in top-right
3. Tap **"Install app"** or **"Add to Home screen"**
4. Confirm installation
5. Done! App icon appears on home screen

---

## 🍎 How to Install on iOS (iPhone/iPad)

1. Open Safari and visit your app URL
2. Tap the **Share button** (square with arrow)
3. Scroll down and tap **"Add to Home Screen"**
4. Enter name (e.g., "CalSnap")
5. Tap **"Add"** in top-right
6. App icon appears on home screen!

---

## 🔧 What I Added for PWA Support

### Files Created:
1. **`/public/sw.js`** - Service Worker for offline caching
2. **`/components/shared/PWAInstallPrompt.tsx`** - Install prompt UI

### Files Updated:
1. **`/app/layout.tsx`** - Added PWA install prompt component

### Already Configured:
1. **`/public/manifest.json`** - PWA manifest (name, icons, theme)
2. **`/app/layout.tsx`** - Viewport & metadata for mobile

---

## 🎯 PWA Features Enabled

✅ **Installable** - Users can add to home screen  
✅ **Offline Support** - Basic caching via service worker  
✅ **Standalone Mode** - Opens like a native app (no browser UI)  
✅ **Theme Color** - Green (#22c55e) matches your branding  
✅ **Mobile Optimized** - Responsive design, touch-friendly  
✅ **App Icons** - SVG icons for all screen sizes  

---

## 📦 Alternative: Creating an Actual APK

If you REALLY need a traditional APK file:

### Option A: Use PWABuilder (Easiest)
1. Deploy your app to Vercel
2. Go to https://www.pwabuilder.com
3. Enter your app URL
4. Click "Build for Android"
5. Download the generated APK package

### Option B: Use Capacitor (Advanced)
```bash
npm install @capacitor/core @capacitor/cli
npx cap init
npx cap add android
npx cap sync
npx cap open android
# Then build APK in Android Studio
```

**Note:** PWA approach is recommended because:
- ✅ No Google Play Store needed
- ✅ Works on both Android & iOS
- ✅ Automatic updates
- ✅ Much simpler deployment

---

## 🧪 Testing PWA Installation

### On Desktop (Chrome/Edge):
1. Open your deployed app
2. Look for install icon in address bar (⬇️ or 📥)
3. Click to install
4. App opens in standalone window

### On Android:
1. Open Chrome
2. Visit your app
3. Either:
   - Accept the install prompt, OR
   - Use Chrome menu → "Install app"

### On iOS:
1. Open Safari (must use Safari, not Chrome)
2. Visit your app
3. Share → "Add to Home Screen"

---

## 🐛 Troubleshooting

### Install prompt not showing?
- Make sure you're on HTTPS (Vercel provides this automatically)
- Clear browser cache and reload
- Check browser console for service worker errors

### App not working offline?
- Service worker needs to be registered first (visit while online)
- Some features may require network (AI analysis, etc.)

### Icons not showing?
- Ensure `/public/icon-192.svg` and `/public/icon-512.svg` exist
- Consider adding PNG versions for better compatibility

---

## 📞 Need Help?

Your CalSnap app is now fully PWA-ready! Users can install it on any device without an APK file.

**Next Steps:**
1. ✅ Push code to GitHub
2. ✅ Deploy to Vercel
3. ✅ Test PWA installation on your phone
4. ✅ Share with users!
