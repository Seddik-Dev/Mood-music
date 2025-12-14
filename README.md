# 🎧 Moodify — AI Mood-Based Music Recommendation App

Moodify is a **Spotify-inspired music experience** that uses **AI + Spotify API** to recommend songs based on how you feel.  
Instead of clicking playlists, users **describe their mood in natural language**, and the app curates music that matches emotion, vibe, and culture.

> _“I feel sad and tired, I want Moroccan hip-hop”_ → 🎶 Perfect matches

---

## ✨ Features

- 🧠 AI mood understanding (ChatGPT-style)
- 🎵 Spotify music recommendations
- 🌍 Country & language awareness (Moroccan, Arabic, French, English)
- 🎭 Emotion-aware filtering (sad ≠ happy)
- 🎧 Track previews
- 🖤 Spotify-inspired creative UI
- ⚡ Fast & modern stack

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- React
- Tailwind CSS
- shadcn/ui
- Aceternity UI
- React Bits (animated backgrounds)

### Backend
- Next.js API Routes
- Spotify Web API
- Google Gemini AI

---

## 🧠 How It Works

1. User types their mood in natural language
2. AI analyzes:
   - Emotion (sad, happy, calm, angry…)
   - Music style
   - Country & language
3. AI generates **emotion-safe Spotify search queries**
4. Spotify API returns matching tracks
5. Opposite moods are filtered out
6. Final playlist is displayed with previews 🎧

---

## 📂 Project Structure

```bash
src/
├─ app/
│  ├─ mood/
│  │  └─ page.jsx
│  ├─ api/
│  │  ├─ recommend/
│  │  └─ spotify/
├─ components/
│  ├─ Sidebar.jsx
│  ├─ MoodHeader.jsx
│  ├─ TrackRow.jsx
├─ lib/
│  ├─ mood-ai.js
│  └─ spotify.js
```

---

## 🔐 Environment Variables

Create a `.env.local` file:

```env
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_ACCESS_TOKEN=your_spotify_access_token
GEMINI_API_KEY=your_gemini_api_key
```

---

## 🔑 Spotify Setup

1. Create an app on the Spotify Developer Dashboard
2. Add redirect URI:
   ```
   http://127.0.0.1:3000/api/auth/spotify/callback
   ```
3. Complete OAuth login
4. Use the access token in your environment variables

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open:
```
http://localhost:3000
```

---

## 🧪 Example Prompt

```
I feel sad and nostalgic.
I want Moroccan hip hop from 2017.
```

🎯 Result:
- Correct emotion
- Correct country
- No happy/party tracks
- Spotify-based recommendations

---

## 📌 Roadmap

- 🎚 Emotion intensity control
- 🎵 Spotify audio-feature filtering
- 💾 Save mood playlists
- 📱 Mobile optimization
- 🔊 Full Spotify playback

---

## 🧑‍💻 Author

**Seddik Zaker**  
Full-Stack Web Developer  
Focused on AI-driven user experiences

---

## ⭐ Support

If you like this project:
- ⭐ Star the repo
- 🍴 Fork it
- 💬 Share feedback

---

**Moodify** — Music that understands how you feel 🎶🖤
