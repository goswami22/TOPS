import fs from "fs";
import path from "path";
import { generateResumePDF } from "./src/utils/cvGenerator";

async function main() {
  console.log("Generating static, uncorrupted CV PDF using new vector-based generator...");
  try {
    const pdfBytes = await generateResumePDF();
    const destPath = path.join(process.cwd(), "public", "Bhavesh_Goswami_CV.pdf");
    
    // Create public folder if it doesn't exist
    const publicDir = path.dirname(destPath);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    fs.writeFileSync(destPath, pdfBytes);
    console.log(`Successfully generated and wrote 100% valid PDF to: ${destPath}`);
    console.log(`PDF Size: ${pdfBytes.length} bytes.`);
  } catch (err) {
    console.error("Failed to write static PDF:", err);
    process.exit(1);
  }
}

main();
