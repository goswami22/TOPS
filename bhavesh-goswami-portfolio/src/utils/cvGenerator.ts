import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

/**
 * Programmatically generates a highly professional, beautiful dual-page PDF resume
 * directly in the client's web browser using pdf-lib. This guarantees 100% valid
 * binary format, uncorrupted headers, and perfect responsiveness across all viewers.
 * It matches the layout, content, styling, and spacing of the original resume exactly.
 */
export async function generateResumePDF(): Promise<Uint8Array> {
  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();
  
  // Set A4 Page Dimensions (595.275 x 841.890 points)
  const pageWidth = 595.275;
  const pageHeight = 841.890;
  
  // Create standard built-in fonts
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  
  // Define Colors (Matching original palette)
  const headerBgColor = rgb(15 / 255, 23 / 255, 42 / 255);    // Slate 900
  const headerTextColor = rgb(255 / 255, 255 / 255, 255 / 255);
  const headerSubtitleColor = rgb(203 / 255, 213 / 255, 225 / 255); // Slate 300
  const primaryTitleColor = rgb(15 / 255, 23 / 255, 42 / 255);  // Slate 900 (Main text headers)
  const accentColor = rgb(79 / 255, 70 / 255, 229 / 255);       // Indigo 600
  const bodyTextColor = rgb(71 / 255, 85 / 255, 105 / 255);     // Slate 600 (Normal text body)
  const dividerColor = rgb(226 / 255, 232 / 255, 240 / 255);    // Slate 200
  const bulletColor = rgb(99 / 255, 102 / 255, 241 / 255);       // Indigo 500 (Clean bullets)
  const cardBgColor = rgb(248 / 255, 250 / 255, 252 / 255);     // Slate 50 (Key projects cards)
  const cardBorderColor = rgb(241 / 255, 245 / 255, 249 / 255); // Slate 100

  const leftMargin = 40;
  const rightMargin = pageWidth - 40;
  const contentWidth = rightMargin - leftMargin;

  // Helper to wrap text with bold keywords supporting **markdown** syntax
  function drawRichParagraph(
    page: any,
    text: string,
    startX: number,
    startY: number,
    maxWidth: number,
    fontSize: number,
    lineHeight: number,
    regularColor = bodyTextColor,
    boldColor = primaryTitleColor
  ): number {
    const parts = text.split("**");
    const tokens: { text: string; isBold: boolean }[] = [];
    for (let i = 0; i < parts.length; i++) {
      if (parts[i] !== undefined) {
        tokens.push({
          text: parts[i],
          isBold: i % 2 === 1
        });
      }
    }

    interface WordToken {
      text: string;
      isBold: boolean;
      width: number;
      hasTrailingSpace: boolean;
    }
    
    const wordsList: WordToken[] = [];
    for (const token of tokens) {
      const rawWords = token.text.split(" ");
      for (let j = 0; j < rawWords.length; j++) {
        const isLast = j === rawWords.length - 1;
        const wordText = rawWords[j];
        
        if (wordText === "" && !isLast) continue;
        
        const font = token.isBold ? fontBold : fontRegular;
        const width = font.widthOfTextAtSize(wordText, fontSize);
        
        wordsList.push({
          text: wordText,
          isBold: token.isBold,
          width: width,
          hasTrailingSpace: !isLast || token.text.endsWith(" ")
        });
      }
    }

    interface LineWord {
      text: string;
      isBold: boolean;
      width: number;
      hasSpace: boolean;
    }
    
    const lines: LineWord[][] = [];
    let currentLine: LineWord[] = [];
    let currentLineWidth = 0;
    
    const spaceWidthNormal = fontRegular.widthOfTextAtSize(" ", fontSize);
    const spaceWidthBold = fontBold.widthOfTextAtSize(" ", fontSize);

    for (const word of wordsList) {
      if (word.text === "") continue;
      
      const spaceWidth = word.isBold ? spaceWidthBold : spaceWidthNormal;
      const neededWidth = currentLine.length > 0 ? spaceWidth + word.width : word.width;
        
      if (currentLineWidth + neededWidth <= maxWidth) {
        currentLine.push({
          text: word.text,
          isBold: word.isBold,
          width: word.width,
          hasSpace: word.hasTrailingSpace
        });
        currentLineWidth += neededWidth;
      } else {
        if (currentLine.length > 0) {
          lines.push(currentLine);
        }
        currentLine = [{
          text: word.text,
          isBold: word.isBold,
          width: word.width,
          hasSpace: word.hasTrailingSpace
        }];
        currentLineWidth = word.width;
      }
    }
    if (currentLine.length > 0) {
      lines.push(currentLine);
    }

    let y = startY;
    for (const line of lines) {
      let x = startX;
      for (let i = 0; i < line.length; i++) {
        const word = line[i];
        const font = word.isBold ? fontBold : fontRegular;
        const color = word.isBold ? boldColor : regularColor;
        
        page.drawText(word.text, {
          x: x,
          y: y,
          size: fontSize,
          font: font,
          color: color
        });
        
        x += word.width;
        if (i < line.length - 1 || word.hasSpace) {
          const spaceW = word.isBold ? spaceWidthBold : spaceWidthNormal;
          x += spaceW;
        }
      }
      y -= lineHeight;
    }
    
    return y; // Returns bottom Y coordinate
  }

  // Helper to draw clean sections with beautiful vector geometries instead of unicode emojis
  function drawSectionHeader(
    page: any,
    y: number,
    text: string,
    iconType: "objective" | "skills" | "experience" | "projects" | "education" | "languages"
  ) {
    const cx = leftMargin + 8;
    const cy = y + 4;

    // 1. Draw Section Title Icon Badge (Circle)
    page.drawCircle({
      x: cx,
      y: cy,
      size: 9, // radius
      color: rgb(241 / 255, 245 / 255, 249 / 255), // Slate 100 bg
    });

    // 2. Draw Vector Icons dynamically based on section
    if (iconType === "objective") {
      // User Profile Icon (Head + Shoulder capsule)
      page.drawCircle({
        x: cx,
        y: cy + 2.5,
        size: 2.2,
        color: accentColor,
      });
      page.drawCircle({
        x: cx,
        y: cy - 4,
        size: 3.5,
        color: accentColor,
      });
    } else if (iconType === "skills") {
      // Code Icon </ > using crisp lines
      // Slash
      page.drawLine({
        start: { x: cx - 1, y: cy - 4 },
        end: { x: cx + 1, y: cy + 4 },
        thickness: 1,
        color: accentColor,
      });
      // Left caret <
      page.drawLine({ start: { x: cx - 4, y: cy }, end: { x: cx - 2, y: cy + 2 }, thickness: 1, color: accentColor });
      page.drawLine({ start: { x: cx - 4, y: cy }, end: { x: cx - 2, y: cy - 2 }, thickness: 1, color: accentColor });
      // Right caret >
      page.drawLine({ start: { x: cx + 4, y: cy }, end: { x: cx + 2, y: cy + 2 }, thickness: 1, color: accentColor });
      page.drawLine({ start: { x: cx + 4, y: cy }, end: { x: cx + 2, y: cy - 2 }, thickness: 1, color: accentColor });
    } else if (iconType === "experience") {
      // Briefcase Vector
      page.drawRectangle({
        x: cx - 4.5,
        y: cy - 3.5,
        width: 9,
        height: 6,
        color: accentColor,
      });
      // Handle lines
      page.drawLine({ start: { x: cx - 2, y: cy + 2.5 }, end: { x: cx - 2, y: cy + 4.5 }, thickness: 1, color: accentColor });
      page.drawLine({ start: { x: cx - 2, y: cy + 4.5 }, end: { x: cx + 2, y: cy + 4.5 }, thickness: 1, color: accentColor });
      page.drawLine({ start: { x: cx + 2, y: cy + 4.5 }, end: { x: cx + 2, y: cy + 2.5 }, thickness: 1, color: accentColor });
      // Clasp
      page.drawRectangle({
        x: cx - 1,
        y: cy - 1,
        width: 2,
        height: 1.5,
        color: rgb(241 / 255, 245 / 255, 249 / 255),
      });
    } else if (iconType === "projects") {
      // Folder Vector
      page.drawRectangle({
        x: cx - 5,
        y: cy - 4,
        width: 10,
        height: 7,
        color: accentColor,
      });
      page.drawRectangle({
        x: cx - 5,
        y: cy + 3,
        width: 4,
        height: 1.5,
        color: accentColor,
      });
    } else if (iconType === "education") {
      // Graduation Cap Vector
      page.drawLine({ start: { x: cx, y: cy + 4.5 }, end: { x: cx + 5, y: cy + 1.5 }, thickness: 1, color: accentColor });
      page.drawLine({ start: { x: cx + 5, y: cy + 1.5 }, end: { x: cx, y: cy - 1.5 }, thickness: 1, color: accentColor });
      page.drawLine({ start: { x: cx, y: cy - 1.5 }, end: { x: cx - 5, y: cy + 1.5 }, thickness: 1, color: accentColor });
      page.drawLine({ start: { x: cx - 5, y: cy + 1.5 }, end: { x: cx, y: cy + 4.5 }, thickness: 1, color: accentColor });
      // Stand bowl
      page.drawLine({ start: { x: cx - 3, y: cy + 0.5 }, end: { x: cx - 3, y: cy - 2.5 }, thickness: 1, color: accentColor });
      page.drawLine({ start: { x: cx - 3, y: cy - 2.5 }, end: { x: cx + 3, y: cy - 2.5 }, thickness: 1, color: accentColor });
      page.drawLine({ start: { x: cx + 3, y: cy - 2.5 }, end: { x: cx + 3, y: cy + 0.5 }, thickness: 1, color: accentColor });
      // Tassel
      page.drawLine({ start: { x: cx, y: cy + 1.5 }, end: { x: cx + 4, y: cy - 1.5 }, thickness: 1, color: accentColor });
    } else if (iconType === "languages") {
      // Globe Vector
      page.drawCircle({
        x: cx,
        y: cy,
        size: 4.8,
        borderColor: accentColor,
        borderWidth: 1,
      });
      page.drawLine({ start: { x: cx - 4.8, y: cy }, end: { x: cx + 4.8, y: cy }, thickness: 1, color: accentColor });
      page.drawLine({ start: { x: cx, y: cy - 4.8 }, end: { x: cx, y: cy + 4.8 }, thickness: 1, color: accentColor });
    }

    // 3. Section Title Text
    page.drawText(text, {
      x: leftMargin + 24,
      y: y,
      size: 11,
      font: fontBold,
      color: primaryTitleColor,
    });

    // 4. Solid elegant divider line under section header
    page.drawLine({
      start: { x: leftMargin, y: y - 8 },
      end: { x: rightMargin, y: y - 8 },
      thickness: 1,
      color: dividerColor,
    });

    return y - 22;
  }

  // ==========================================
  // PAGE 1 GENERATION
  // ==========================================
  const page1 = pdfDoc.addPage([pageWidth, pageHeight]);
  
  // 1. Dark Blue top Header block spanning full A4 page width
  page1.drawRectangle({
    x: 0,
    y: pageHeight - 110,
    width: pageWidth,
    height: 110,
    color: headerBgColor,
  });

  // Name (Matches original bold uppercase display)
  page1.drawText("Bhavesh N Goswami", {
    x: leftMargin,
    y: pageHeight - 55,
    size: 24,
    font: fontBold,
    color: headerTextColor,
  });

  // Title
  page1.drawText("FULL STACK DEVELOPER", {
    x: leftMargin,
    y: pageHeight - 80,
    size: 11,
    font: fontBold,
    color: headerSubtitleColor,
  });

  // Contacts Aligned Right with beautiful custom vector icons
  const contacts = [
    { text: "Ahmedabad, India", y: pageHeight - 33, icon: "location" },
    { text: "+91 63551 02501", y: pageHeight - 48, icon: "phone" },
    { text: "goswamibhavesh22@gmail.com", y: pageHeight - 63, icon: "mail" },
    { text: "linkedin.com/in/bhavesh-goswami-dev", y: pageHeight - 78, icon: "linkedin" },
    { text: "github.com/goswami22", y: pageHeight - 93, icon: "github" },
  ];

  const contactIconColor = rgb(14 / 255, 165 / 255, 233 / 255); // Gorgeous Sky 500 for high-contrast visibility

  contacts.forEach((contact) => {
    const textWidth = fontRegular.widthOfTextAtSize(contact.text, 8.5);
    const textX = rightMargin - textWidth - 14;
    const iconCx = rightMargin - 5;
    const iconCy = contact.y + 3;

    // Contact Text
    page1.drawText(contact.text, {
      x: textX,
      y: contact.y,
      size: 8.5,
      font: fontRegular,
      color: headerSubtitleColor,
    });

    // Custom Geometries for Icons on the Right
    if (contact.icon === "location") {
      page1.drawCircle({
        x: iconCx,
        y: iconCy + 1.5,
        size: 2,
        color: contactIconColor,
      });
      page1.drawLine({
        start: { x: iconCx, y: iconCy + 1.5 },
        end: { x: iconCx, y: iconCy - 1.5 },
        thickness: 1,
        color: contactIconColor,
      });
    } else if (contact.icon === "phone") {
      page1.drawLine({
        start: { x: iconCx - 2, y: iconCy - 2 },
        end: { x: iconCx + 2, y: iconCy + 2 },
        thickness: 2,
        color: contactIconColor,
      });
    } else if (contact.icon === "mail") {
      page1.drawRectangle({
        x: iconCx - 4,
        y: iconCy - 2.5,
        width: 8,
        height: 5,
        borderColor: contactIconColor,
        borderWidth: 1,
        color: headerBgColor,
      });
      page1.drawLine({ start: { x: iconCx - 4, y: iconCy + 2.5 }, end: { x: iconCx, y: iconCy - 0.5 }, thickness: 0.8, color: contactIconColor });
      page1.drawLine({ start: { x: iconCx, y: iconCy - 0.5 }, end: { x: iconCx + 4, y: iconCy + 2.5 }, thickness: 0.8, color: contactIconColor });
    } else if (contact.icon === "linkedin") {
      page1.drawRectangle({
        x: iconCx - 3.5,
        y: iconCy - 3.5,
        width: 7,
        height: 7,
        color: contactIconColor,
      });
      page1.drawText("in", {
        x: iconCx - 2.2,
        y: iconCy - 2.4,
        size: 5.5,
        font: fontBold,
        color: headerBgColor,
      });
    } else if (contact.icon === "github") {
      page1.drawCircle({
        x: iconCx,
        y: iconCy,
        size: 3.5,
        color: contactIconColor,
      });
      page1.drawCircle({
        x: iconCx,
        y: iconCy - 1,
        size: 1.5,
        color: headerBgColor,
      });
    }
  });

  let currentY = pageHeight - 145;

  // CAREER OBJECTIVE
  currentY = drawSectionHeader(page1, currentY, "CAREER OBJECTIVE", "objective");
  
  const objText = 
    "Strong **Web Designer** with proven industry experience at Rock Technolabs, specializing in transforming " +
    "high-fidelity designs into responsive, user-friendly interfaces. Evolving into a **Full Stack Developer** with " +
    "proficiency in **Python, DjangoSQL,** and **modern web technologies**. Combines strong UI/UX expertise, " +
    "performance optimization, and backend development skills to build scalable, high-performance web " +
    "applications with seamless end-to-end integration.";

  currentY = drawRichParagraph(page1, objText, leftMargin, currentY, contentWidth, 9.2, 14, bodyTextColor, primaryTitleColor);
  currentY -= 20;

  // TECHNICAL SKILLS
  currentY = drawSectionHeader(page1, currentY, "TECHNICAL SKILLS", "skills");

  const skillsData = [
    { key: "Frontend:", val: "HTML5, CSS3, SCSS, JavaScript, jQuery, Bootstrap, Tailwind CSS, React, Responsive Design, Optimization" },
    { key: "Backend Development:", val: "Python, Django, SQL" },
    { key: "Full Stack & Architecture:", val: "REST APIs, CRUD Operations, SQL Integration" },
    { key: "Tools & Design:", val: "Figma, Adobe Photoshop, Git / GitHub" },
    { key: "AI & Modern Workflow:", val: "ChatGPT, Antigravity" },
    { key: "Soft Skills:", val: "Communication, Problem Solving, Team Collaboration, Adaptability, Time Management" },
  ];

  skillsData.forEach((skill) => {
    // Draw Category Label (bold)
    page1.drawText(skill.key, {
      x: leftMargin,
      y: currentY,
      size: 8.8,
      font: fontBold,
      color: primaryTitleColor,
    });

    const labelWidth = 145;
    // Draw Category values
    const nextY = drawRichParagraph(
      page1,
      skill.val,
      leftMargin + labelWidth,
      currentY,
      contentWidth - labelWidth,
      8.8,
      12.5,
      bodyTextColor,
      primaryTitleColor
    );

    currentY = nextY - 3;
  });

  currentY -= 15;

  // PROFESSIONAL EXPERIENCE
  currentY = drawSectionHeader(page1, currentY, "PROFESSIONAL EXPERIENCE", "experience");

  // Job 1 (Full Stack Developer Trainee)
  page1.drawText("Full Stack Developer Trainee", {
    x: leftMargin,
    y: currentY,
    size: 10,
    font: fontBold,
    color: primaryTitleColor,
  });

  const presentWidth = fontBold.widthOfTextAtSize("Present", 9);
  page1.drawText("Present", {
    x: rightMargin - presentWidth,
    y: currentY,
    size: 9,
    font: fontBold,
    color: accentColor,
  });

  currentY -= 13;

  page1.drawText("Tops Technologies", {
    x: leftMargin,
    y: currentY,
    size: 9,
    font: fontOblique,
    color: bodyTextColor,
  });

  currentY -= 14;

  const job1Bullets = [
    "Building backend business logic and APIs using **Python and Django**.",
    "Designing secure **REST APIs** and optimizing database schemas with MySQL to support dynamic data fetching."
  ];

  job1Bullets.forEach((bullet) => {
    // Draw pretty right triangle chevron symbol (▹) geometrically
    const bx = leftMargin + 6;
    const by = currentY + 3;
    page1.drawLine({ start: { x: bx, y: by + 2 }, end: { x: bx + 3, y: by }, thickness: 0.8, color: bulletColor });
    page1.drawLine({ start: { x: bx, y: by - 2 }, end: { x: bx + 3, y: by }, thickness: 0.8, color: bulletColor });
    page1.drawLine({ start: { x: bx, y: by + 2 }, end: { x: bx, y: by - 2 }, thickness: 0.8, color: bulletColor });

    currentY = drawRichParagraph(page1, bullet, leftMargin + 16, currentY, contentWidth - 20, 8.8, 12.5, bodyTextColor, primaryTitleColor);
    currentY -= 4;
  });

  currentY -= 10;

  // Job 2 (Web Designer - Rock Technolabs)
  page1.drawText("Web Designer", {
    x: leftMargin,
    y: currentY,
    size: 10,
    font: fontBold,
    color: primaryTitleColor,
  });

  const period2Width = fontBold.widthOfTextAtSize("Sept 2022 – March 2025", 9);
  page1.drawText("Sept 2022 – March 2025", {
    x: rightMargin - period2Width,
    y: currentY,
    size: 9,
    font: fontBold,
    color: bodyTextColor,
  });

  currentY -= 13;

  page1.drawText("Rock Technolabs • Ahmedabad", {
    x: leftMargin,
    y: currentY,
    size: 9,
    font: fontOblique,
    color: bodyTextColor,
  });

  currentY -= 14;

  const job2Bullets = [
    "Converted high-fidelity design mockups into **responsive HTML/CSS layouts**.",
    "Integrated customized frontend designs seamlessly into **Shopify and Magento** eCommerce CMS platforms.",
    "Executed comprehensive **performance optimization**, minifying code and optimizing images.",
    "Collaborated deeply with backend developers to integrate UI components and resolve cross-browser bugs."
  ];

  job2Bullets.forEach((bullet) => {
    // Draw pretty right triangle chevron symbol (▹) geometrically
    const bx = leftMargin + 6;
    const by = currentY + 3;
    page1.drawLine({ start: { x: bx, y: by + 2 }, end: { x: bx + 3, y: by }, thickness: 0.8, color: bulletColor });
    page1.drawLine({ start: { x: bx, y: by - 2 }, end: { x: bx + 3, y: by }, thickness: 0.8, color: bulletColor });
    page1.drawLine({ start: { x: bx, y: by + 2 }, end: { x: bx, y: by - 2 }, thickness: 0.8, color: bulletColor });

    currentY = drawRichParagraph(page1, bullet, leftMargin + 16, currentY, contentWidth - 20, 8.8, 12.5, bodyTextColor, primaryTitleColor);
    currentY -= 4;
  });

  // Draw Page index 1/2
  page1.drawText("1/2", {
    x: rightMargin - 15,
    y: 20,
    size: 8.5,
    font: fontRegular,
    color: bodyTextColor,
  });

  // ==========================================
  // PAGE 2 GENERATION
  // ==========================================
  const page2 = pdfDoc.addPage([pageWidth, pageHeight]);
  
  let page2Y = pageHeight - 45;

  // Header boundary - slate divider to keep neatness
  page2Y = drawSectionHeader(page2, page2Y, "PROFESSIONAL EXPERIENCE (CONTINUED)", "experience");

  // Job 3 (Thinkwik - Junior Web Designer)
  page2.drawText("Jr. Web Designer", {
    x: leftMargin,
    y: page2Y,
    size: 10,
    font: fontBold,
    color: primaryTitleColor,
  });

  const period3Width = fontBold.widthOfTextAtSize("March 2022 – Aug 2022", 9);
  page2.drawText("March 2022 – Aug 2022", {
    x: rightMargin - period3Width,
    y: page2Y,
    size: 9,
    font: fontBold,
    color: bodyTextColor,
  });

  page2Y -= 13;

  page2.drawText("Thinkwik India Online Services LLP • Ahmedabad", {
    x: leftMargin,
    y: page2Y,
    size: 9,
    font: fontOblique,
    color: bodyTextColor,
  });

  page2Y -= 14;

  const job3Bullets = [
    "Executed web design projects with an emphasis on **responsive frameworks** for mobile and desktop.",
    "Maintained strict UI/UX design standards and resolved legacy frontend compatibility errors."
  ];

  job3Bullets.forEach((bullet) => {
    // Draw pretty right triangle chevron symbol (▹) geometrically
    const bx = leftMargin + 6;
    const by = page2Y + 3;
    page2.drawLine({ start: { x: bx, y: by + 2 }, end: { x: bx + 3, y: by }, thickness: 0.8, color: bulletColor });
    page2.drawLine({ start: { x: bx, y: by - 2 }, end: { x: bx + 3, y: by }, thickness: 0.8, color: bulletColor });
    page2.drawLine({ start: { x: bx, y: by + 2 }, end: { x: bx, y: by - 2 }, thickness: 0.8, color: bulletColor });

    page2Y = drawRichParagraph(page2, bullet, leftMargin + 16, page2Y, contentWidth - 20, 8.8, 12.5, bodyTextColor, primaryTitleColor);
    page2Y -= 4;
  });

  page2Y -= 14;

  // KEY PROJECTS
  page2Y = drawSectionHeader(page2, page2Y, "KEY PROJECTS", "projects");

  const projectsList = [
    {
      title: "Tools4Trade",
      desc: "Comprehensive Shopify e-commerce store with custom theme integration. **(Shopify, Liquid, SCSS)**"
    },
    {
      title: "Bidvino",
      desc: "High-end e-commerce platform optimized for performance and mobile responsiveness. **(E-Commerce, HTML5/CSS3, JS)**"
    },
    {
      title: "Gadgetly Megastore",
      desc: "Fully responsive Shopify megastore optimized for large inventories. **(Shopify, UI/UX, Optimization)**"
    },
    {
      title: "DT-Carterk",
      desc: "Custom web design highlighting fluid layouts and modern frontend aesthetics. **(Frontend, Bootstrap, CSS3)**"
    },
    {
      title: "Furnita",
      desc: "Sleek, modern furniture interface demonstrating strong visual hierarchy. **(Web Design, Figma, Responsive)**"
    },
    {
      title: "Prestashop Shopify Theme",
      desc: "Crossover custom theme combining Prestashop features with Shopify styling. **(Prestashop, Theme Dev, Liquid)**"
    }
  ];

  projectsList.forEach((proj) => {
    // Draw Card Box Container
    page2.drawRectangle({
      x: leftMargin,
      y: page2Y - 42,
      width: contentWidth,
      height: 42,
      color: cardBgColor,
      borderColor: cardBorderColor,
      borderWidth: 1
    });

    // Draw Project Title text
    page2.drawText(proj.title, {
      x: leftMargin + 10,
      y: page2Y - 14,
      size: 9.2,
      font: fontBold,
      color: accentColor,
    });

    // Draw tiny vector external-link arrow icon dynamically on the right of the title
    const titleWidth = fontBold.widthOfTextAtSize(proj.title, 9.2);
    const ax = leftMargin + 10 + titleWidth + 3.5;
    const ay = page2Y - 13.5;
    page2.drawLine({ start: { x: ax, y: ay }, end: { x: ax + 3, y: ay + 3 }, thickness: 0.8, color: accentColor });
    page2.drawLine({ start: { x: ax + 3, y: ay + 3 }, end: { x: ax + 1, y: ay + 3 }, thickness: 0.8, color: accentColor });
    page2.drawLine({ start: { x: ax + 3, y: ay + 3 }, end: { x: ax + 3, y: ay + 1 }, thickness: 0.8, color: accentColor });

    // Draw Project description
    drawRichParagraph(
      page2,
      proj.desc,
      leftMargin + 10,
      page2Y - 26,
      contentWidth - 20,
      8.2,
      11,
      bodyTextColor,
      accentColor
    );

    page2Y -= 48; // Shift down for next card
  });

  page2Y -= 10;

  // TWO COLUMN FOOTER FOR EDUCATION & LANGUAGES
  const colYStart = page2Y;

  // Draw Column 1 Header: EDUCATION
  drawSectionHeader(page2, colYStart, "EDUCATION", "education");

  let col1Y = colYStart - 22;

  // Education Item 1
  page2.drawText("Full Stack Development", {
    x: leftMargin,
    y: col1Y,
    size: 9,
    font: fontBold,
    color: primaryTitleColor,
  });
  
  const presentEduWidth = fontBold.widthOfTextAtSize("Present", 8);
  page2.drawText("Present", {
    x: leftMargin + (contentWidth / 2) - 15 - presentEduWidth,
    y: col1Y,
    size: 8,
    font: fontBold,
    color: accentColor,
  });

  col1Y -= 11;
  page2.drawText("Tops Technologies, Ahmedabad", {
    x: leftMargin,
    y: col1Y,
    size: 8.2,
    font: fontOblique,
    color: bodyTextColor,
  });

  col1Y -= 18;

  // Education Item 2
  page2.drawText("Diploma in Information Technology", {
    x: leftMargin,
    y: col1Y,
    size: 9,
    font: fontBold,
    color: primaryTitleColor,
  });

  const dateEduWidth = fontBold.widthOfTextAtSize("July 2014", 8);
  page2.drawText("July 2014", {
    x: leftMargin + (contentWidth / 2) - 15 - dateEduWidth,
    y: col1Y,
    size: 8,
    font: fontBold,
    color: bodyTextColor,
  });

  col1Y -= 11;
  page2.drawText("R.C. Technical Institute, Gujarat", {
    x: leftMargin,
    y: col1Y,
    size: 8.2,
    font: fontOblique,
    color: bodyTextColor,
  });

  // Draw Column 2 Header: LANGUAGES
  const col2X = leftMargin + (contentWidth / 2) + 15;
  const col2Width = (contentWidth / 2) - 15;

  const cxGlobe = col2X + 8;
  const cyGlobe = colYStart + 4;

  // Draw Globe Icon Badge Geometrically
  page2.drawCircle({
    x: cxGlobe,
    y: cyGlobe,
    size: 9,
    color: rgb(241 / 255, 245 / 255, 249 / 255),
  });
  page2.drawCircle({
    x: cxGlobe,
    y: cyGlobe,
    size: 4.8,
    borderColor: accentColor,
    borderWidth: 1,
  });
  page2.drawLine({ start: { x: cxGlobe - 4.8, y: cyGlobe }, end: { x: cxGlobe + 4.8, y: cyGlobe }, thickness: 1, color: accentColor });
  page2.drawLine({ start: { x: cxGlobe, y: cyGlobe - 4.8 }, end: { x: cxGlobe, y: cyGlobe + 4.8 }, thickness: 1, color: accentColor });

  page2.drawText("LANGUAGES", {
    x: col2X + 24,
    y: colYStart,
    size: 11,
    font: fontBold,
    color: primaryTitleColor,
  });

  page2.drawLine({
    start: { x: col2X, y: colYStart - 8 },
    end: { x: rightMargin, y: colYStart - 8 },
    thickness: 1,
    color: dividerColor,
  });

  let col2Y = colYStart - 22;

  const languages = [
    { lang: "English", prof: "Professional" },
    { lang: "Hindi", prof: "Native" },
    { lang: "Gujarati", prof: "Native" }
  ];

  languages.forEach((lang) => {
    // Language Name (Bold)
    page2.drawText(lang.lang, {
      x: col2X,
      y: col2Y,
      size: 9,
      font: fontBold,
      color: primaryTitleColor,
    });

    // Proficiency score
    const profWidth = fontRegular.widthOfTextAtSize(lang.prof, 8);
    page2.drawText(lang.prof, {
      x: rightMargin - profWidth,
      y: col2Y,
      size: 8,
      font: fontRegular,
      color: accentColor,
    });

    col2Y -= 14;
  });

  // Page index indicator 2/2 centered or right aligned
  page2.drawText("2/2", {
    x: rightMargin - 15,
    y: 20,
    size: 8.5,
    font: fontRegular,
    color: bodyTextColor,
  });

  // Save and return PDF bytes
  return await pdfDoc.save();
}
