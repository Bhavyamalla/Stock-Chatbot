/* =============================================
   Smart Stock Chatbot - Data Store
   Stock symbols, sector mappings, and fund data
   ============================================= */

const companySymbols = {
  "infosys":       "INFY.BSE",
  "tcs":           "TCS.BSE",
  "wipro":         "WIPRO.BSE",
  "hcl tech":      "HCLTECH.BSE",
  "tech mahindra": "TECHM.BSE",
  "reliance":      "RELIANCE.BSE",
  "hdfc bank":     "HDFCBANK.BSE",
  "icici bank":    "ICICIBANK.BSE",
  "sbi":           "SBIN.BSE",
  "lt":            "LT.BSE"
};

const sectorMap = {
  "it sector":      ["infosys", "tcs", "wipro", "hcl tech", "tech mahindra"],
  "banking sector": ["hdfc bank", "icici bank", "sbi"],
  "energy sector":  ["reliance"],
  "pharma sector":  ["sun pharma", "dr reddy", "cipla"]
};

const funds = {
  "nifty 50 index fund": { nav: "₹220", returns: "12% (1Y)" },
  "hdfc equity fund":    { nav: "₹670", returns: "15% (1Y)" },
  "sbi bluechip fund":   { nav: "₹410", returns: "11% (1Y)" },
  "icici tech fund":     { nav: "₹120", returns: "18% (1Y)" }
};
