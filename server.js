import cors from 'cors';
import express from 'express';
import { parseHTML } from 'linkedom';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Serve the index.html file at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

// Define the route handler for the JSON endpoint
app.get('/gold-prices', async (req, res) => {
  const URL_SOURCE = 'https://harga-emas.org/widget/widget.php?v_widget_type=current_gold_price';
  try {
    const html = await fetch(URL_SOURCE).then(r => r.text());
    const { document } = parseHTML(html);

    const rows = [...document.querySelectorAll('tr')];

    const usdRow = rows[2].querySelectorAll('td');
    const kursBiRow = rows[3].querySelectorAll('td');
    const idrRow = rows[4].querySelectorAll('td');

    const satuan = [
      {
        oz: usdRow[1].textContent.trim(),
        gr: kursBiRow[1].textContent.trim(),
        kg: idrRow[1].textContent.trim(),
      },
      {
        oz: usdRow[2].textContent.trim(),
        gr: kursBiRow[2].textContent.trim(),
        kg: idrRow[2].textContent.trim(),
      },
      {
        oz: usdRow[3].textContent.trim(),
        gr: kursBiRow[3].textContent.trim(),
        kg: idrRow[3].textContent.trim(),
      }
    ];

    const updateInfo = rows[5].querySelectorAll('strong');
    const updateGoldPrice = updateInfo[0].textContent.trim();
    const updateKursBi = updateInfo[1].textContent.trim();

    const result = {
      usd: satuan[0],
      kurs_bi: satuan[1],
      idr: satuan[2],
      update_gold_price: updateGoldPrice,
      update_kurs_bi: updateKursBi,
      source: 'https://harga-emas.org',
    };

    res.json(result);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
