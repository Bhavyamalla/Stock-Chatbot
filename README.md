#  Smart Stock Chatbot

A lightweight, browser-based stock chatbot that provides live BSE stock quotes, sector breakdowns, and mutual fund data — no backend required.


##  Features

-  Chat interface to query Indian stock prices (BSE)
-  Sector-wise stock grouping (IT, Banking, Energy, Pharma)
-  Mutual fund NAV and 1-year returns
-  Live data via [Alpha Vantage API](https://www.alphavantage.co/)
-  Responsive design with Bootstrap 4


##  Project Structure

```
smart-stock-chatbot/
├── index.html          # Main HTML entry point
├── css/
│   └── style.css       # All custom styles
├── js/
│   ├── data.js         # Stock symbols, sectors & fund data
│   ├── api.js          # Alpha Vantage API calls
│   └── chatbot.js      # Chat UI logic & response handling
└── README.md
```


##  Setup & Usage

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/smart-stock-chatbot.git
   cd smart-stock-chatbot
   ```

2. **Add your API key**  
   Open `js/api.js` and replace the placeholder with your own free key from [alphavantage.co](https://www.alphavantage.co/support/#api-key):
   ```js
   const API_KEY = "YOUR_API_KEY_HERE";
   ```

3. **Open in browser**  
   Just open `index.html` directly — no build step or server needed.


##  Supported Commands

| Input | Response |
|-------|----------|
| `hi` / `hello` | Welcome message + available commands |
| `stocks` | Lists all trackable companies |
| `sectors` | Lists all available sectors |
| `funds` | Lists all mutual funds |
| `infosys` / `tcs` / `wipro` ... | Live stock price from BSE |
| `it sector` / `banking sector` ... | Companies in that sector |
| `hdfc equity fund` / `sbi bluechip fund` ... | Fund NAV & returns |


##  Tech Stack

- HTML5 / CSS3
- Vanilla JavaScript (ES6+)
- [Bootstrap 4](https://getbootstrap.com/docs/4.5/)
- [Alpha Vantage API](https://www.alphavantage.co/)


##  Notes

- The free Alpha Vantage API tier allows **25 requests/day**. For production use, consider upgrading.
- Mutual fund data is currently static/hardcoded as Alpha Vantage does not support Indian MF NAVs directly.
