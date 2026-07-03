import type { VercelRequest, VercelResponse } from '@vercel/node';

const DEFAULT_SHEET_ID = '1tnl6iGFhO87pd0wYPnmOVoCSXJp10xwvSqagHrwTr-s';

function extractSheetId(rawSheetId: string) {
  if (rawSheetId.includes('/d/')) {
    const match = rawSheetId.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (match) return match[1];
  }
  if (rawSheetId.includes('id=')) {
    const match = rawSheetId.match(/id=([a-zA-Z0-9-_]+)/);
    if (match) return match[1];
  }
  return rawSheetId.trim();
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const querySheet = typeof req.query?.sheet === 'string' ? req.query.sheet.trim() : undefined;
  const rawSheetId = querySheet || process.env.GOOGLE_SHEETS_ID || DEFAULT_SHEET_ID;
  const sheetId = extractSheetId(rawSheetId);
  const exportUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=xlsx`;

  try {
    const response = await fetch(exportUrl, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      const errorMessage = `Failed to fetch Google Sheet: ${response.statusText} (Status: ${response.status}). ${errorText.slice(0, 300)}`;
      console.error('[api/fetch-sheets] ', errorMessage);
      res.status(response.status).json({
        error: errorMessage,
      });
      return;
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="sheet.xlsx"');
    res.status(200).send(buffer);
  } catch (error: any) {
    res.status(500).json({
      error: 'Error fetching Google Sheets export',
      details: error?.message || String(error),
    });
  }
}
