/* =============================================
   Smart Stock Chatbot - API Service
   Handles all Alpha Vantage API calls
   ============================================= */

const API_KEY = "api-key";
const BASE_URL = "https://www.alphavantage.co/query"; 

/**
 * Fetches live stock quote data for a given symbol.
 * @param {string} symbol - BSE stock symbol (e.g. "INFY.BSE")
 * @returns {Promise<string>} - Formatted HTML string with stock details
 */
async function getStockData(symbol) {
  const url = `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const stock = data["Global Quote"];

    if (stock && stock["05. price"]) {
      return `
        <b>${symbol} Stock Details:</b><br>
        Price: ₹${parseFloat(stock["05. price"]).toFixed(2)}<br>
        Change: ${stock["09. change"]}<br>
        Percent Change: ${stock["10. change percent"]}
      `;
    } else {
      return "⚠️ No data found for this stock. The market may be closed or the symbol is invalid.";
    }
  } catch (error) {
    console.error("API fetch error:", error);
    return "❌ Error fetching stock data. Please check your connection and try again.";
  }
}
