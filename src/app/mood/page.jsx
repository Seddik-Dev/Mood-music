"use client";

import { useEffect, useState } from "react";
import MoodHeader from "./MoodHeader";
import TrackRow from "./TrackRow";
import TrackCard from "./TrackCard";
import BottomSpotifyPlayer from "./BottomPlayer";

export default function MoodPage() {
  const [mood, setMood] = useState("");
  const [featured, setFeatured] = useState([]);
  const [aiTracks, setAiTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null); // 👈 PLAYER GLOBAL

  useEffect(() => {
    fetch("/api/featured")
      .then((res) => res.json())
      .then((data) => setFeatured(data.tracks || []));
  }, []);

  async function generate() {
    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mood }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("API error:", data);
        setAiTracks([]);
        return;
      }

      setAiTracks(data.tracks || []);
    } catch (err) {
      console.error("Network error:", err);
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white">

      <main className="flex-1 p-8 space-y-10 pb-32">
        {/* HEADER */}
        <MoodHeader mood={mood} setMood={setMood} onGenerate={generate} />

        {/* FEATURED */}
        <TrackRow
          title="🎧 Trending Now"
          tracks={featured}
          onPlay={setCurrentTrack} 
        />

        {/* AI GENERATED */}
        {aiTracks.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-4">
              ✨ AI Picks for your mood
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-1 gap-x-8 gap-y-4 overflow-x-auto pb-2">
              {aiTracks.map((track) => (
                <TrackCard
                  key={track.id}
                  track={track}
                  onPlay={setCurrentTrack} // 
                />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* PLAYER GLOBAL FIXE */}
      <BottomSpotifyPlayer track={currentTrack} />
    </div>
  );
}
