import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API route to fetch Google Sheet as XLSX
  app.get("/api/fetch-sheets", async (req, res) => {
    try {
      let rawSheetId = process.env.GOOGLE_SHEETS_ID || "1tnl6iGFhO87pd0wYPnmOVoCSXJp10xwvSqagHrwTr-s";
      rawSheetId = rawSheetId.trim();

      let sheetId = rawSheetId;
      if (rawSheetId.includes("/d/")) {
        const match = rawSheetId.match(/\/d\/([a-zA-Z0-9-_]+)/);
        if (match) {
          sheetId = match[1];
        }
      } else if (rawSheetId.includes("id=")) {
        const match = rawSheetId.match(/id=([a-zA-Z0-9-_]+)/);
        if (match) {
          sheetId = match[1];
        }
      }

      const exportUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=xlsx`;

      console.log(`[Server] GOOGLE_SHEETS_ID from env: "${process.env.GOOGLE_SHEETS_ID}"`);
      console.log(`[Server] Extracted sheetId: "${sheetId}"`);
      console.log(`[Server] Fetching sheet from export URL: ${exportUrl}`);

      const response = await fetch(exportUrl);
      if (!response.ok) {
        let errorText = "";
        try {
          errorText = await response.text();
          errorText = errorText.substring(0, 300);
        } catch (e) {}
        throw new Error(`Failed to fetch Google Sheet: ${response.statusText} (Status: ${response.status}). Response preview: ${errorText}`);
      }

      const buffer = await response.arrayBuffer();
      
      res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
      res.setHeader("Content-Disposition", `attachment; filename="sheet.xlsx"`);
      res.send(Buffer.from(buffer));
      console.log(`[Server] Successfully fetched and forwarded sheet of size ${buffer.byteLength} bytes.`);
    } catch (error: any) {
      console.error("[Server] Error fetching sheet:", error);
      res.status(500).json({ error: error.message || "Unknown error occurred" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    console.log("[Server] Running in development mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("[Server] Running in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] running on http://localhost:${PORT}`);
  });
}

startServer();
