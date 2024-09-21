// api/gold-prices.js
const { parseHTML } = require('linkedom');
const fetch = require('node-fetch');  // Ensure you have node-fetch installed

module.exports = async (req, res) => {
  const URL_SOURCE = 'https://harga-emas.org/widget/widget.php?v_widget_type=current_gold_price';
  try {
    const response = await fetch(URL_SOURCE);
    if (!response.ok) {
      throw new Error(`External API responded with status ${response.status}`);
    }

    const html = await response.text();
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

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};
