export default function TrackRow({ title, tracks, onPlay }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-1 gap-x-8 gap-y-4 overflow-x-auto pb-2">
        {tracks.map((track) => (
          <div
            key={track.id}
            onClick={() => onPlay(track)}
            className="cursor-pointer  min-w-[50px] bg-white/5 hover:bg-white/10 p-4 rounded-xl transition group"
          >
            <div className="relative">
              <img
                src={track.album.images[0]?.url}
                alt={track.name}
                className="rounded-lg mb-3"
              />

              {/* PLAY OVERLAY */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white text-xl">▶</span>
              </div>
            </div>

            <div className="font-semibold truncate">{track.name}</div>

            <div className="text-sm text-zinc-400 truncate">
              {track.artists.map((a) => a.name).join(", ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
