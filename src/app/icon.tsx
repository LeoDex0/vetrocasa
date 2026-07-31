import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 2,
          background: "#15171a",
          borderRadius: 6,
        }}
      >
        <div style={{ display: "flex", flex: 1, gap: 2 }}>
          <div style={{ flex: 1, background: "#6c98bf", borderRadius: "6px 0 0 0" }} />
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "70%", height: "70%", borderRadius: "50%", background: "#b4d44a" }} />
          </div>
        </div>
        <div style={{ display: "flex", flex: 1, gap: 2 }}>
          <div style={{ flex: 1, background: "#6c98bf", borderRadius: "0 0 0 6px" }} />
          <div style={{ flex: 1, background: "#6c98bf", borderRadius: "0 0 6px 0" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
