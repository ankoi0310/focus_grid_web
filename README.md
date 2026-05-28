## Focus Grid — Landing Page (Cyberpunk / Synthwave)

Website landing page hiện đại, tối ưu chuyển đổi cho ứng dụng mobile **Focus Grid** với phong cách **Cyberpunk/Synthwave HUD** (glass-morphism + neon glow + grid background).

### Highlights

- **Hero**: Headline “Master Your Time in the Digital Grid” + CTA download iOS/Android + mock 3D “Focus Timer”
- **Eisenhower Matrix (2×2)**: Do / Plan / Delegate / Eliminate với viền neon theo palette
- **Virtual Garden**: thẻ “Digital Plants” (grow khi Deep Work)
- **RPG Gamification**: Level + EXP bar + Coins counter **count-up khi scroll tới**
- **Cyberpunk Analytics**: bar chart (weekly focus) + pie chart (task distribution) dạng neon HUD
- **Animation**: fade-in + slide-up cho từng section, hover glow mạnh cho nút

### Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS v4** (theme + utilities trong `src/app/globals.css`)
- **Framer Motion** (animations + in-view triggers)
- Fonts: **Inter** + **Orbitron**

### Design System (Palette)

- **Background**: `#0a0926`
- **Surface**: `#16162a`
- **CTA Neon Pink**: `#e94560`
- **Info Electric Blue**: `#2196f3`
- **Gamification Cyber Gold**: `#e5c558`

## Getting Started

Cài dependencies (nếu cần) và chạy dev server:

```bash
npm install
npm run dev
```

Mở `http://localhost:3000` để xem website.

### Project Structure

- `src/app/page.tsx`: entry page (render landing)
- `src/components/LandingPage.tsx`: toàn bộ UI landing + animations
- `src/app/globals.css`: tokens màu, glassmorphism, neon utilities, background tech-grid
- `src/app/privacy/page.tsx`: Privacy Policy
- `src/app/terms/page.tsx`: Terms of Service

### Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

### Notes

- Các biểu đồ neon (bar/pie) dùng SVG để đảm bảo style “HUD” và tương thích tốt với theme.
- Nếu muốn thay link CTA download thật, chỉnh trong `src/components/LandingPage.tsx` (Hero section).

## Deployment

Bạn có thể deploy lên Vercel hoặc bất kỳ platform hỗ trợ Next.js:

```bash
npm run build
npm run start
```
