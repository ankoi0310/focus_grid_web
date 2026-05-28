import { ImageResponse } from "next/og";

export const alt = "Focus Grid — Master Your Time in the Digital Grid";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(900px 560px at 80% 20%, rgba(233, 69, 96, 0.45), transparent 60%), radial-gradient(760px 520px at 20% 30%, rgba(33, 150, 243, 0.40), transparent 60%), radial-gradient(900px 620px at 50% 90%, rgba(229, 197, 88, 0.26), transparent 62%), linear-gradient(180deg, rgba(10, 9, 38, 1), rgba(10, 9, 38, 1))",
          color: "rgba(242,244,255,0.92)",
        }}
      >
        <div
          style={{
            width: 1040,
            height: 470,
            borderRadius: 32,
            border: "1px solid rgba(255,255,255,0.14)",
            background:
              "linear-gradient(180deg, rgba(22,22,42,0.70), rgba(22,22,42,0.45))",
            boxShadow:
              "0 0 0 1px rgba(233,69,96,0.16), 0 0 36px rgba(33,150,243,0.16)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "56px 64px",
          }}
        >
          <div
            style={{
              fontSize: 18,
              letterSpacing: 6,
              opacity: 0.85,
            }}
          >
            FOCUS GRID // PRODUCTIVITY HUD
          </div>
          <div
            style={{
              marginTop: 18,
              display: "flex",
              flexDirection: "column",
              fontSize: 64,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: -1.2,
            }}
          >
            <span>Master Your Time</span>
            <span>in the Digital Grid</span>
          </div>
          <div
            style={{
              marginTop: 22,
              fontSize: 26,
              opacity: 0.8,
            }}
          >
            Eisenhower Matrix + RPG progression + Deep Work timer
          </div>
        </div>
      </div>
    ),
    size
  );
}

