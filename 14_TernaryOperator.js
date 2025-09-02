// User data
const isLoggedIn = true;
const userName = "Sameer";
const isPremium = false;
const bookingType = "flight"; // could be: "flight", "hotel", "train"
const seatSelected = true;
const mealPreference = ""; // empty means no meal selected
const walletBalance = 0;

// 1️⃣ Basic Ternary: Welcome or Login
const welcomeMessage = isLoggedIn ? `Welcome, ${userName}` : "Please log in";
console.log("1️⃣", welcomeMessage);

// 2️⃣ Ternary with && (if premium AND flight, show lounge access)
const loungeAccess = isPremium && bookingType === "flight"
  ? "✔️ Lounge access included"
  : "❌ No lounge access";
console.log("2️⃣", loungeAccess);

// 3️⃣ Ternary with || (Fallback for meal preference)
const selectedMeal = mealPreference || "Standard Veg Meal";
console.log("3️⃣ Meal Preference:", selectedMeal);

// 4️⃣ Conditional Offer (walletBalance fallback)
const walletMsg = walletBalance > 0
  ? `Wallet balance: ₹${walletBalance}`
  : "You can add money to your wallet for instant discounts!";
console.log("4️⃣", walletMsg);

// 5️⃣ Display seat status with ternary + && combo
const seatStatus = seatSelected
  ? "Seat confirmed ✅"
  : bookingType === "train"
  ? "RAC/WL: Check PNR status"
  : "Please select a seat to continue";
console.log("5️⃣", seatStatus);

// 6️⃣ Apply theme or styling (like light/dark, in DOM this would be className)
const theme = isPremium ? "theme-gold" : "theme-basic";
console.log("6️⃣ Theme applied:", theme);

// 7️⃣ Rendering type of booking (Nested ternary)
const bookingLabel =
  bookingType === "flight"
    ? "✈️ Flight Booking"
    : bookingType === "hotel"
    ? "🏨 Hotel Booking"
    : bookingType === "train"
    ? "🚆 Train Booking"
    : "Unknown";
console.log("7️⃣", bookingLabel);

// 8️⃣ Show upgrade suggestion with OR (premium fallback)
const upgradeSuggestion = isPremium || "Upgrade to Premium for more benefits!";
console.log("8️⃣", upgradeSuggestion);
