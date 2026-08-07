import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

// Load environment variables
dotenv.config();

// Define port (3000 is externally accessible in this workspace)
const PORT = 3000;

const AURA_CATALOG = [
  {
    id: "prod-1",
    name: "Heavyweight Oversized Hoodie",
    price: 135,
    category: "streetwear",
    description: "480GSM organic cotton fleece. Drop shoulders, double-layer structured hood, kangaroo-pocketless face for a clean sculptural drape."
  },
  {
    id: "prod-2",
    name: "Minimalist Structured Trench",
    price: 340,
    category: "outerwear",
    description: "Water-resistant technical cotton gabardine, storm shield vent, adjustable cuffs, and visceral viscose lining."
  },
  {
    id: "prod-3",
    name: "Raw Edge Distressed Denim Jacket",
    price: 185,
    category: "streetwear",
    description: "14oz rigid selvedge denim, wash fade, hand-frayed distressed margins on wrist cuffs and waist trim."
  },
  {
    id: "prod-4",
    name: "The Soft Luxury Knit Sweater",
    price: 210,
    category: "clothing",
    description: "Super-fine baby alpaca wool blended with merino fibers. Ribbed mock collar and extra-long sleeves."
  },
  {
    id: "prod-5",
    name: "Architectural Cargo Trousers",
    price: 165,
    category: "streetwear",
    description: "Utilitarian herringbone. Knee pleats, dual modular cargo pockets, and adjustable nylon hem draws."
  },
  {
    id: "prod-6",
    name: "Boxy Mid-Weight Mockneck Tee",
    price: 65,
    category: "basics",
    description: "240GSM organic cotton jersey compact construction. Boxy drop-shoulder aesthetic, shape-retaining tall neck rib."
  },
  {
    id: "prod-7",
    name: "Handcrafted Suede Chelsea Boots",
    price: 280,
    category: "accessories",
    description: "Italian butter-soft calfskin suede, leather sole with rubber reinforcement, dual-weave elastic gore."
  },
  {
    id: "prod-8",
    name: "Sleek Minimal Leather Tote",
    price: 320,
    category: "accessories",
    description: "Vegetable tanned calfskin thick-walled bag. Raw hand-finished edges, detachable suede zipper pocket."
  },
  {
    id: "prod-9",
    name: "Washed Silk Slip Satin Dress",
    price: 245,
    category: "clothing",
    description: "100% fine organic silk charmeuse. Bias-cut drape, micro-adjustable spaghetti back straps, cowl neck drop."
  }
];

// Initialize Google GenAI on the server
let aiClient: GoogleGenAI | null = null;
function getAIClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY environment variable is not defined. AI stylist recommendations will run in simulated mode.");
      return null;
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API: Recommendations / Stylist advice helper
  app.post("/api/recommendations", async (req: Request, res: Response): Promise<void> => {
    try {
      const { prompt, occasion, vibe, budget } = req.body;
      const client = getAIClient();

      let targetPrompt = `I need digital styling recommendations. Let's create an outfit.`;
      if (prompt) targetPrompt += ` Details: ${prompt}.`;
      if (occasion) targetPrompt += ` Occasion: ${occasion}.`;
      if (vibe) targetPrompt += ` Preferred vibe: ${vibe}.`;
      if (budget) targetPrompt += ` Budget target: $${budget}.`;

      const systemInstruction = `
        You are the Head Personal AI Stylist for "Aura Fashion", an elite, modern luxury clothing label blending structured Japanese minimalist aesthetics with Gen-Z streetwear.
        
        AURA Catalog of products:
        ${JSON.stringify(AURA_CATALOG, null, 2)}
        
        Core Tasks:
        1. Formulate a personalized style curation or outfit formula using Aura's products.
        2. Advise on silhouette pairing, layering techniques (e.g. wearing the Boxy Mockneck Tee under the Soft Alpaca Sweater), and color combinations.
        3. Reference specific products from Aura catalog that fit their profile.
        4. Maintain a luxurious, knowledgeable, elite tone. Keep answers structured (with paragraph sections or bullet points), visually clean and extremely premium. Avoid overly long walls of text.
        
        Always return your suggestions as stylized Markdown. Mention prices and specific features.
      `;

      if (client) {
        const response = await client.models.generateContent({
          model: "gemini-3.5-flash",
          contents: targetPrompt,
          config: {
            systemInstruction,
            temperature: 0.7,
          }
        });

        res.json({
          recommendations: response.text || "I was unable to assemble options. Let's start with cashmere knitwear paired with architectural cargo bottoms.",
          isMock: false
        });
      } else {
        // Fallback simulated expert styling if key not provided
        const simulatedPlan = `
### Aura Couture Curation: The Urban Minimalist

Based on your selection of **${vibe || 'Minimalist'}** for **${occasion || 'Daily Wear'}**, our styling atelier advises a layered, architectural silhouette balancing relaxed shapes with clean lines.

#### 1. Core Wardrobe Foundation
*   **Boxy Mid-Weight Mockneck Tee** ($65) — Fabricated in heavy-duty compacted organic cotton. Its sturdy mock collar provides structured height under layer pieces.
*   **Architectural Cargo Trousers** ($165) — Style these in *Tactical Olive* with their ankles pulled straight for a tall, relaxed taper that frames designer footwear elegantly.

#### 2. Outerlayer & Texture Contrast
*   **Heavyweight Oversized Hoodie** ($135) — Toss this loopback 480GSM piece over the mockup tee. The pocketless front maintains a pristine silhouette without unwanted bulk.

#### 3. Footwear & Accessories Accent
*   **Handcrafted Suede Chelsea Boots** ($280) — Finished in fine Tobacco Italian suede to add rich warmth and elevate the high-street drapery.

*Estimated Outfit Total: $645*
        `;
        res.json({
          recommendations: simulatedPlan,
          isMock: true
        });
      }
    } catch (error: any) {
      console.error("Styling recommendation endpoint error:", error);
      res.status(500).json({ error: error.message || "Unable to consult the AI stylist." });
    }
  });

  // API: Live Stylist Chat
  app.post("/api/chat", async (req: Request, res: Response): Promise<void> => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        res.status(400).json({ error: "Invalid chat history format." });
        return;
      }

      const client = getAIClient();
      const systemInstruction = `
        You are the Aura AI Concierge & Executive Stylist. Users chat with you about styling and sizing queries.
        
        Our Premium AURA Catalog:
        ${JSON.stringify(AURA_CATALOG, null, 2)}
        
        Guidelines:
        1. Help the user find the perfect sizes (S, M, L, XL), styles, or color stories.
        2. Explain how to wash or styling tips (e.g., dry clean the trench coat, cold wash the hoodie).
        3. Direct them to Aura products. If they ask for something we don't carry (e.g. swimsuits), suggest a luxury layering alternative page using current garments.
        4. Be highly polished, professional, concise, and helpful.
      `;

      if (client) {
        // Prepare chat history format
        const chat = client.chats.create({
          model: "gemini-3.5-flash",
          config: {
            systemInstruction,
            temperature: 0.8,
          }
        });

        // Send latest message in the sequence
        const lastMessage = messages[messages.length - 1];
        const response = await chat.sendMessage({ message: lastMessage.content });

        res.json({
          reply: response.text || "Of course. Let me assist you with sizing or styling items from our new drop.",
          isMock: false
        });
      } else {
        // Mock chat flow
        const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";
        let reply = "Aura Atelier: Welcome. How can I guide your styling selection today?";
        if (lastMessage.includes("size") || lastMessage.includes("fit")) {
          reply = "For our **Heavyweight Hoodie** and **Mockneck Tees**, we design with a relaxed, boxy volume. We recommend ordering your true size for the intended designer fit, or sizing down once if you prefer a classic close-to-body look.";
        } else if (lastMessage.includes("shipping") || lastMessage.includes("delivery")) {
          reply = "Aura offers complimentary express carbon-neutral shipping on all items over $150. Delivery within North America and Europe typically takes 2-3 business days.";
        } else if (lastMessage.includes("hoodie") || lastMessage.includes("warm")) {
          reply = "Our **Heavyweight Oversized Hoodie** ($135) is dense loopback cotton (480GSM) and has a double-layer drawstring-less hood which stands tall and is perfect for chilly weather or layered streetwear silhouettes.";
        } else {
          reply = "That sounds fascinating! Have you considered pairing our bias-cut **Washed Silk Slip Dress** with the structural heavy premium knitwear to play with feminine-meets-streetwear aesthetic tension?";
        }

        res.json({
          reply,
          isMock: true
        });
      }
    } catch (error: any) {
      console.error("Chat stylist API error:", error);
      res.status(500).json({ error: error.message || "Consultation with Aura Concierge failed." });
    }
  });

  // Setup Vite Dev Server / Static files
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[AURASERVER] running at http://localhost:${PORT}`);
  });
}

startServer();
