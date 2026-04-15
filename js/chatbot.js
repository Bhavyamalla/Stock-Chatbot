/* =============================================
   Smart Stock Chatbot - Chat Logic
   Handles UI rendering and message processing
   ============================================= */

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

/**
 * Appends a message bubble to the chat box.
 * @param {string} text - HTML content of the message
 * @param {string} sender - "user" or "bot"
 */
function appendMessage(text, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(
    "chat-message",
    sender === "user" ? "user-message" : "bot-message"
  );
  messageElement.innerHTML = text;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

/**
 * Processes user input and generates a bot response.
 * @param {string} input - Raw user input string
 */
async function handleResponse(input) {
  input = input.toLowerCase().trim();

  // Greetings
  if (input.includes("hi") || input.includes("hello") || input.includes("hey")) {
    appendMessage(
      `👋 Hi there! Welcome to StockBot.<br>
       You can ask me about:<br>
       - <b>stocks</b> — list all available stocks<br>
       - <b>sectors</b> — browse by sector<br>
       - <b>funds</b> — mutual fund NAV & returns<br>
       Or type a company name like <b>infosys</b> or <b>tcs</b>.`,
      "bot"
    );
    return;
  }

  // List all stocks
  if (input.includes("stocks")) {
    appendMessage(
      "📈 <b>Available stocks:</b><br>" + Object.keys(companySymbols).join(", "),
      "bot"
    );
    return;
  }

  // List all sectors
  if (input.includes("sectors")) {
    appendMessage(
      "🏭 <b>Available sectors:</b><br>" + Object.keys(sectorMap).join(", "),
      "bot"
    );
    return;
  }

  // List all funds
  if (input.includes("funds")) {
    appendMessage(
      "💰 <b>Available funds:</b><br>" + Object.keys(funds).join(", "),
      "bot"
    );
    return;
  }

  // Fund detail lookup
  if (funds[input]) {
    const f = funds[input];
    appendMessage(
      `<b>${input}</b><br>NAV: ${f.nav}<br>Returns: ${f.returns}`,
      "bot"
    );
    return;
  }

  // Sector detail lookup
  if (sectorMap[input]) {
    appendMessage(
      `📊 <b>${input}</b> includes:<br>` + sectorMap[input].join(", "),
      "bot"
    );
    return;
  }

  // Company / stock lookup
  for (let company in companySymbols) {
    if (input.includes(company)) {
      appendMessage("⏳ Fetching live data...", "bot");
      const result = await getStockData(companySymbols[company]);
      // Replace the loading message with actual result
      chatBox.lastChild.innerHTML = result;
      chatBox.scrollTop = chatBox.scrollHeight;
      return;
    }
  }

  // Fallback
  appendMessage(
    "⚠️ Sorry, I don't recognise that. Try typing <b>stocks</b>, <b>sectors</b>, or <b>funds</b>.",
    "bot"
  );
}

/**
 * Reads user input, sends it, and clears the field.
 */
function processInput() {
  const input = userInput.value.trim();
  if (!input) return;
  appendMessage(input, "user");
  handleResponse(input);
  userInput.value = "";
}

/* ── Event Listeners ── */
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") processInput();
});

/* ── Initial greeting ── */
appendMessage("🤖 Hello! I'm your Stock Chatbot. Say <b>hi</b> to begin!", "bot");
