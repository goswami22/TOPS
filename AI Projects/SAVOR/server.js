import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI client
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || "",
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", brand: "SAVOR. Gourmet Chain" });
  });

  // AI Sommelier & Dish Pairing Endpoint
  app.post("/api/ai/pairings", async (req, res) => {
    try {
      const { dishName, category, userPreferences } = req.body;
      if (!dishName) {
        return res.status(400).json({ error: "dishName is required" });
      }

      const prompt = `You are the Master Sommelier & Executive Chef at SAVOR. Gourmet Food Chain. 
Recommend the ideal craft beverage pairing, complementary appetizer, and a chef's tasting secret for the dish "${dishName}" (Category: ${category || 'Main Course'}).
User notes/preferences: "${userPreferences || 'Standard dining'}".

Return JSON with exactly these keys:
{
  "beveragePairing": {
    "name": "Name of beverage/wine/mocktail",
    "description": "Short appetizing description",
    "temperature": "Chilled / Room Temp / Hot"
  },
  "appetizerPairing": {
    "name": "Name of complementary starter",
    "description": "Short pairing note"
  },
  "chefTastingNote": "A 1-2 sentence secret technique or flavor highlight from Executive Chef Antoine",
  "flavorProfile": ["Descriptor 1", "Descriptor 2", "Descriptor 3"]
}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      const parsed = JSON.parse(response.text || "{}");
      res.json(parsed);
    } catch (err) {
      console.error("AI Pairing API Error:", err);
      // Fallback response if API key is missing or fails
      res.json({
        beveragePairing: {
          name: "Savoria Reserve Pinot Noir '23",
          description: "Silky black cherry notes with subtle oak finish that complements rich savory notes.",
          temperature: "Slightly Chilled (16°C)"
        },
        appetizerPairing: {
          name: "Truffle Burrata Crostini",
          description: "Creamy burrata with black truffle drizzle to elevate your dining journey."
        },
        chefTastingNote: "Our chefs slow-infuse wild herbs into organic butter to achieve deep umami warmth.",
        flavorProfile: ["Rich Umami", "Herbal Warmth", "Smoky Velvet"]
      });
    }
  });

  // AI Smart Menu Match / Dish Recommender
  app.post("/api/ai/recommend", async (req, res) => {
    try {
      const { mood, diet, spicePreference, occasion } = req.body;

      const prompt = `You are the AI Concierge for SAVOR. Gourmet Chain. Recommend 3 distinct dishes for a diner with:
- Mood: "${mood || 'Indulgent & Comforting'}"
- Dietary preference: "${diet || 'Omnivore'}"
- Spice preference: "${spicePreference || 'Medium'}"
- Dining occasion: "${occasion || 'Dinner with friends'}"

Return JSON object:
{
  "recommendations": [
    {
      "name": "Dish Name",
      "tagline": "Short catchy slogan",
      "category": "Category name",
      "reason": "Why this matches the user's mood and taste",
      "recommendedDrink": "Suggested drink",
      "estimatedCalories": "e.g. 680 kcal"
    }
  ]
}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      const parsed = JSON.parse(response.text || "{}");
      res.json(parsed);
    } catch (err) {
      console.error("AI Recommend API Error:", err);
      res.json({
        recommendations: [
          {
            name: "Wagyu Truffle Smash Burger",
            tagline: "Unmatched Umami Luxury",
            category: "Burgers & Sliders",
            reason: "Perfect for an indulgent mood, rich double Wagyu beef layered with black truffle aioli.",
            recommendedDrink: "Smoked Vanilla Old Fashioned",
            estimatedCalories: "790 kcal"
          },
          {
            name: "Artisanal Burrata & Prosciutto Pizza",
            tagline: "Woodfired Perfection",
            category: "Woodfired Pizza",
            reason: "Crispy 72-hour fermented sourdough crust topped with fresh creamy burrata.",
            recommendedDrink: "Yuzu Elderflower Tonic",
            estimatedCalories: "640 kcal"
          },
          {
            name: "Wild Mushroom Risotto Gold",
            tagline: "Velvety Earthy Goodness",
            category: "Pasta & Risotto",
            reason: "Slow-simmered Carnaroli rice with chanterelles, porcini, and 24-month Parmigiano.",
            recommendedDrink: "Chardonnay Riserva",
            estimatedCalories: "580 kcal"
          }
        ]
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`SAVOR. Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
