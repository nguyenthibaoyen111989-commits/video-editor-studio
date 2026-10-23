import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Home, Upload, Music, SlidersHorizontal, Sparkles, Layers, Download, Captions,
  Scissors, Smartphone, Volume2, VolumeX, Folder, Tag, Play, Star, Pencil,
} from "lucide-react";
import canh1 from "@/assets/canh1.mp4.asset.json";
import canh2 from "@/assets/canh2.mp4.asset.json";
import canh3 from "@/assets/canh3.mp4.asset.json";
import canh4 from "@/assets/canh4.mp4.asset.json";
import canh5 from "@/assets/canh5.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Master Bảo Yến — Biến video dài thành nhiều Short bằng AI" },
      { name: "description", content: "Kéo thả video dài, AI quét và đề xuất đoạn hay nhất, xuất nhiều short viral." },
      { property: "og:title", content: "Master Bảo Yến — Video dài → Nhiều Short" },
      { property: "og:description", content: "Biến video thô thành content viral — tự động, bằng AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Smartphone, label: "Slide Đồ Họa AI" },
  { icon: Music, label: "Đồng Bộ Nhịp Nhạc" },
  { icon: SlidersHorizontal, label: "Lọc Màu Điện Ảnh" },
  { icon: Sparkles, label: "AI Chấm Điểm Cảnh Quay" },
  { icon: Layers, label: "Video Dài → Short" },
  { icon: Download, label: "Nhập Từ YouTube/Drive" },
  { icon: Sparkles, label: "Hook Mở Đầu" },
  { icon: Captions, label: "Caption Đồng Bộ" },
  { icon: Scissors, label: "Cắt Khoảng Lặng Tự Động" },
  { icon: Smartphone, label: "Slide Đồ Họa AI" },
  { icon: Music, label: "Đồng Bộ Nhịp Nhạc" },
  { icon: SlidersHorizontal, label: "Lọc Màu Điện Ảnh" },
];

const modes = ["Talking-head", "Nhiều clip + Nhạc", "Video dài → Short"];

const projects = [
  { title: "8 clip + nhạc nền", meta: "Bắt đầu 21:44", tag: "Nhiều clip + Nhạc", ready: true },
  { title: "4 clip + nhạc nền", meta: "Bắt đầu 20:15", tag: "Nhiều clip + Nhạc", ready: true },
  { title: "video-nhieu-clip-nhac", meta: "2026-09-30", tag: "M — Nhiều clip + Nhạc", left: "Còn 15 ngày" },
  { title: "2026-09-30_01_sub-agent-edit-video", meta: "2026-09-30", tag: "—", left: "Còn 15 ngày" },
  { title: "video-nhieu-clip-nhac", meta: "2026-09-28", tag: "M — Nhiều clip + Nhạc", left: "Còn 14 ngày" },
];

function Index() {
  const [mode, setMode] = useState(2);
  const [tab, setTab] = useState(0);
  const [link, setLink] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [drag, setDrag] = useState(false);
  const [muted, setMuted] = useState<boolean[]>(Array(6).fill(true));
  const [starred, setStarred] = useState<Set<number>>(new Set());
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="min-h-screen bg-background text-foreground border-l-2 border-primary/60">
      <header className="flex h-12 items-center justify-between border-b border-[var(--gold-line)] px-5">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-extrabold italic text-gold-gradient">Master Bảo Yến</span>
          <span className="text-xs font-semibold">Video dài → Nhiều Short</span>
        </div>
        <span className="hidden text-xs font-semibold md:block">Thời Gian – Thu Nhập – Tự Do</span>
        <div className="flex items-center gap-2 text-[11px] font-semibold">
          <button className="relative flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-primary">
            <Tag className="h-3 w-3" /> Giá cả
            <span className="absolute -bottom-2 left-2 rounded-full bg-destructive px-1.5 text-[8px] text-foreground">Giảm 35%</span>
          </button>
          <button className="flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5"><Folder className="h-3 w-3 text-primary" /> Dự án</button>
          <button className="flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5"><Volume2 className="h-3 w-3" /> Âm thanh</button>
          <button className="rounded-md border border-border bg-muted px-3 py-1.5">Đăng nhập</button>
        </div>
      </header>

      <div className="p-2">
        <button className="flex w-32 items-center gap-2 rounded-md border border-primary/70 bg-card px-3 py-1.5 text-[11px] font-semibold text-primary">
          <Home className="h-3 w-3" /> Trang chủ
        </button>
      </div>

      <main className="mx-auto max-w-5xl px-4 pb-24">
        <section className="relative mx-auto max-w-md pt-4 text-center">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-6 -z-0 select-none text-center text-[120px] font-extrabold leading-none text-muted/80 md:-mx-40">
            Bảo Yến
          </div>
          <div className="relative">
            <p className="text-xs font-semibold">Biến video thô thành content viral — tự động, bằng AI.</p>
            <p className="mt-5 text-left text-[11px] text-muted-foreground">Kéo thả video dài — AI quét và đề xuất đoạn hay nhất.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); if (link) alert(`Đang lấy video: ${link}`); }}
              className="mt-3 flex items-center rounded-full border border-border bg-card/90 p-1 pl-3"
            >
              <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Dán link YouTube, Google Drive, hoặc link file video"
                className="min-w-0 flex-1 bg-transparent text-[11px] outline-none placeholder:text-muted-foreground" />
              <button className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-primary-foreground">Lấy video</button>
            </form>
            <p className="my-3 text-[10px] font-semibold text-muted-foreground">HOẶC</p>
            <div
              onClick={() => inputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
              onDragLeave={() => setDrag(false)}
              onDrop={(e) => { e.preventDefault(); setDrag(false); setFile(e.dataTransfer.files[0] ?? null); }}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border border-dashed p-3 text-left transition ${drag ? "border-primary bg-accent" : "border-border bg-card/90"}`}
            >
              <span className="grid h-8 w-8 place-items-center rounded-md bg-muted"><Upload className="h-3.5 w-3.5 text-primary" /></span>
              <div>
                <p className="text-[11px] font-bold">{file ? file.name : "Kéo thả file video dài vào đây"}</p>
                <p className="text-[10px] text-muted-foreground">hoặc bấm để chọn file từ máy</p>
              </div>
              <input ref={inputRef} type="file" accept="video/*" hidden onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
            </div>
            <div className="mt-5 flex items-center gap-3 text-[10px]">
              <span className="text-muted-foreground">Chế độ khác:</span>
              {modes.map((m, i) => (
                <button key={m} onClick={() => setMode(i)} className={i === mode ? "border-b border-primary text-primary" : ""}>{m}</button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 text-center">
          <p className="text-[10px] font-bold tracking-widest text-muted-foreground">ĐƯỢC HỖ TRỢ BỞI AI</p>
          <div className="mt-4 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
              {[...features, ...features].map((f, i) => (
                <button key={i} className="group mr-2 flex w-[72px] shrink-0 flex-col items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-border bg-card transition group-hover:border-primary">
                    <f.icon className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="text-[9px] font-semibold leading-tight text-muted-foreground group-hover:text-foreground">{f.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <p className="text-center text-[10px] font-bold tracking-widest text-muted-foreground">VIDEO MẪU</p>
          <div className="mt-4 grid grid-cols-3 gap-3 md:grid-cols-6">
            {muted.map((m, i) => (
              <div key={i} className="overflow-hidden rounded-lg border border-border bg-card">
                <div className="relative aspect-[9/16] bg-gradient-to-b from-muted to-accent">
                  <Play className="absolute inset-0 m-auto h-8 w-8 text-muted-foreground/50" />
                  <button onClick={() => setMuted(muted.map((v, j) => (j === i ? !v : v)))}
                    className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-background/70">
                    {m ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
                  </button>
                </div>
                <p className="px-2 py-2 text-[10px] font-semibold">Video mẫu {i + 1}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-2xl">
          <div className="flex items-center justify-between text-[11px] font-semibold">
            <div className="flex gap-4">
              {["Tất cả các dự án (6)", "Dự án đã lưu (0)", "Nháp"].map((t, i) => (
                <button key={t} onClick={() => setTab(i)} className={i === tab ? "border-b border-primary" : "text-muted-foreground"}>{t}</button>
              ))}
            </div>
            <div className="flex gap-4 text-muted-foreground"><button>Chọn nhiều</button><button>Xem tất cả</button></div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {projects.map((p, i) => (
              <div key={i} className={`overflow-hidden rounded-lg border bg-card ${p.ready ? "border-primary/70" : "border-border"}`}>
                <div className="relative grid h-16 place-items-center bg-muted">
                  {p.ready ? (
                    <div className="text-center">
                      <span className="mx-auto grid h-6 w-6 place-items-center rounded-full bg-primary"><Play className="h-3 w-3 fill-primary-foreground text-primary-foreground" /></span>
                      <p className="mt-1 px-1 text-[8px] text-muted-foreground">Đã phân tích xong — bấm để xem & chỉnh</p>
                    </div>
                  ) : (
                    <>
                      <Play className="h-4 w-4 text-muted-foreground" />
                      <span className="absolute bottom-1 left-1 rounded bg-background/80 px-1 text-[7px]">{p.left}</span>
                      <button onClick={() => { const s = new Set(starred); s.has(i) ? s.delete(i) : s.add(i); setStarred(s); }} className="absolute right-1 top-1">
                        <Star className={`h-3 w-3 ${starred.has(i) ? "fill-primary text-primary" : ""}`} />
                      </button>
                    </>
                  )}
                </div>
                <div className="p-2">
                  <p className="line-clamp-2 text-[9px] font-bold">{p.title}</p>
                  <p className="mt-1 flex flex-wrap gap-1 text-[7px] text-muted-foreground">
                    {p.meta}<span className="rounded bg-muted px-1">{p.tag}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <button className="fixed bottom-6 left-3 grid h-9 w-9 place-items-center rounded-full border border-border bg-card">
        <Pencil className="h-4 w-4 text-primary" />
      </button>
    </div>
  );
}
