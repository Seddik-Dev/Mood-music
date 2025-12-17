"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function TrackCard({ track, onPlay }) {
  if (!track) return null;

  const artists = track.artists?.map(a => a.name).join(", ");

  // 🔹 Image Spotify (grande → moyenne → petite → fallback)
  const image =
    track.album?.images?.[1]?.url ||
    track.album?.images?.[0]?.url ||
    track.album?.images?.[2]?.url ||
    "/placeholder.png";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.25 }}
      onClick={() => onPlay(track)}
      className="cursor-pointer"
    >
      <Card className="w-[170px] bg-white/5 hover:bg-white/10 rounded-xl transition border-0">
        <CardContent className="p-3">
          <div className="relative">
            <img
              src={image}
              alt={track.name}
              className="rounded-lg aspect-square object-cover mb-3"
            />

            {/* PLAY OVERLAY */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                <span className="text-black text-lg ml-1">▶</span>
              </div>
            </div>
          </div>

          <div className="font-semibold text-sm text-white truncate">
            {track.name}
          </div>

          <div className="text-xs text-zinc-400 truncate">
            {artists}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
