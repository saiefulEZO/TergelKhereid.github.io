/* =====================================================================
   CONTENT.JS  -  every word, link and picture on the website lives here
   =====================================================================

   You never need to touch index.html. Change this file, save it,
   refresh the page, and the website updates.

   HOW TO OPEN THIS FILE
   - Windows: right-click content.js > Open with > Notepad.
     (Do NOT double-click it: Windows will try to "run" it.)
   - Mac: open with TextEdit, then Format > Make Plain Text, and turn off
     smart quotes (Edit > Substitutions > untick Smart Quotes).
   - Or use the free editor VS Code on either.

   THE FIVE RULES
   1. Text sits between straight double quotes:  "like this"
      Never use curly quotes  “ ”  - they break the file.
      If you need a " inside your text, write it as  \"
   2. Every line that ends a piece of text or a { } block needs a comma
      at the end, like the lines below. A missing comma is the most
      common mistake.
   3. To HIDE something, leave it empty:  title: "",
      An empty list  []  hides that whole section.
   4. To ADD an item to a list, copy a whole block from  {  to  },
      (including the comma) and paste it where you want it.
      To REMOVE one, delete the whole block from  {  to  },
      Lists show in the order they are written here.
   5. Anything in [square brackets] is a placeholder that still needs
      real text. The page shows it with a dashed outline so it's easy
      to spot.

   STYLING TEXT
   **bold**          ->  bold
   *italic*          ->  italic
   [link text](https://example.com)   ->  a clickable link

   PICTURES
   - Put the picture file in the  images  folder.
   - Write its name here exactly, e.g.  photo: "images/photo.jpg",
   - Names are case-sensitive online: Photo.JPG and photo.jpg are
     different files. Keep names lowercase with no spaces to be safe.

   IF YOU MAKE A MISTAKE
   The page keeps a built-in copy of the last good version. If this file
   has a typo, visitors still see the site, and a RED box tells you the
   line number to check (look at that line and the one above it).
   When you open the page from your own computer, a YELLOW box also
   lists small problems, like a missing picture or a misspelt name.
   Visitors never see the yellow box.
   ===================================================================== */

window.SITE = {

  /* ---------- Top of the page ---------- */
  profile: {
    name: "Tergel Khereid",
    nameNative: "",                 // her name in another script, e.g. Mongolian. "" hides it
    title: "Ph.D. Candidate in Biotechnology & Food Chemistry",
    affiliation: "Kitami Institute of Technology",
    location: "Kitami, Hokkaido, Japan",
    intro: "I study how natural plant extracts calm inflammation and allergy, one cell at a time.",
    photo: "images/photo.jpg",
    photoAlt: "Tergel Khereid in front of her research poster on fennel seed extract and mast cells",
    cv: "",                          // e.g. "images/cv.pdf" to show a "Download CV" button. "" hides it
  },

  /* ---------- About ---------- */
  about: {
    paragraphs: [
      "I am a Ph.D. Candidate in Biotechnology and Food Chemistry, specializing in Food Nutritional Chemistry at Kitami Institute of Technology, Japan. My research explores the therapeutic potential of natural plant extracts, with a focus on evaluating their anti-inflammatory and anti-allergic effects at the cellular level.",
      "I am passionate about bridging the gap between natural raw materials and scientifically proven functional products.",
      "[A sentence or two in her own words about life outside the lab]",
    ],
  },

  /* ---------- Research themes ---------- */
  // The drawing above each topic is chosen from its words: a topic that
  // mentions fennel gets the fennel plate, rose gets the rose plate, and
  // Mongolian gets the Mongolian medicine plate.
  research: [
    {
      title: "Plant extracts & the immune response",
      text: "Testing natural plant extracts for anti-inflammatory and anti-allergic activity in cells, such as how fennel seed extract and its compounds calm the allergic response of mast cells.",
      tag: "Now",
    },
    {
      title: "Traditional Mongolian medicine, measured",
      text: "Building animal models of Mongolian-medicine conditions such as Gastric Badakan and Xinheyi disease, and linking them to measurable markers in the blood.",
      tag: "2017 to 2021",
    },
    {
      title: "Safety & activity of herbal formulas",
      text: "Measuring the toxicity of the Mongolian formula Alatanqiqige-3, and the active compounds and enzyme inhibition of rose flowers from eleven regions.",
      tag: "2020 to 2021",
    },
  ],

  /* ---------- Current study (the moving diagram under Research) ---------- */
  // The diagram is drawn by the page, redrawn from her slide "Mechanism of
  // mast cell release of chemical mediators". Here you change the words
  // around it. Keep the seven steps in this order: each one matches a part
  // of the animation. The "fennel" steps show when the visitor presses the
  // second button. To hide the whole diagram, write  steps: [],
  study: {
    title: "How a mast cell releases its chemical mediators",
    intro: "What happens inside a mast cell during an allergic reaction, and where fennel seed extract steps in. Press a step to jump to it.",
    label: "Allergic reaction",
    steps: [
      { title: "Antigen meets IgE", text: "An allergen (the antigen) links two IgE antibodies that sit on FcεRI receptors on the cell surface." },
      { title: "Syk and PLCγ switch on", text: "The linked receptors switch on Syk, which switches on PLCγ. The yellow P is a phosphate tag, the cell's on switch." },
      { title: "PIP2 splits in two", text: "PLCγ cuts PIP2 in the cell membrane into two messengers, IP3 and DAG." },
      { title: "Calcium floods in", text: "IP3 opens the cell's calcium store, so Ca²⁺ rises inside the cell. DAG switches on PKC." },
      { title: "Granules release", text: "Ca²⁺ and PKC make the granules fuse with the cell surface and release histamine and β-hexosaminidase." },
      { title: "Leukotrienes are made", text: "Ca²⁺ also switches on cPLA2, which frees arachidonic acid (AA). 5-LOX turns it into LTA4 and then LTB4, a leukotriene." },
      { title: "The allergy you feel", text: "Together these chemical mediators cause mucus secretion and smooth muscle contraction, the symptoms of an allergy." },
    ],
    fennel: {
      label: "With fennel seed extract",
      steps: [
        { title: "Same allergen, treated cells", text: "This time the cells were given fennel seed extract (FSE) before the allergen arrived." },
        { title: "A weaker switch", text: "FSE reduced the phosphorylation (switching on) of Syk and PLCγ." },
        { title: "PIP2 splits in two", text: "The signal still passes through IP3 and DAG." },
        { title: "Less calcium", text: "FSE lowered the rise of Ca²⁺ inside the cell and reduced the phosphorylation of PKC." },
        { title: "Fewer mediators released", text: "Less histamine and β-hexosaminidase came out of the cells." },
        { title: "Less leukotriene", text: "FSE lowered 5-LOX gene expression and the production of LTB4." },
        { title: "The active compounds", text: "Quercetin was the main contributor, with kaempferol and luteolin adding to the anti-allergic effect." },
      ],
    },
    credit: "",                      // a small line under the diagram. "" hides it
  },

  /* ---------- Lab skills (short labels) ---------- */
  skills: [
    "HPLC",
    "Western blotting",
    "Enzyme assays",
    "Animal models",
    "Scientific writing",
    "University teaching",
    "Good Clinical Practice",
    "Emergency medicine",
  ],

  /* ---------- Experience ---------- */
  experience: [
    {
      role: "Research Assistant",
      place: "Kitami Institute of Technology",
      where: "Kitami, Hokkaido, Japan",
      dates: "Oct 2023 to now",
      text: "",
    },
    {
      role: "Teaching Assistant",
      place: "Kitami Institute of Technology",
      where: "Kitami, Hokkaido, Japan",
      dates: "Oct 2023 to now",
      text: "",
    },
    {
      role: "Resident Doctor",
      place: "Inner Mongolia Daoran Hospital (内蒙古道然医院)",
      where: "Hohhot, Inner Mongolia, China",
      dates: "Mar 2021 to Dec 2022",
      text: "",
    },
    {
      role: "Internship Trainee",
      place: "Inner Mongolia International Mongolian Medicine Hospital (内蒙古国际蒙医医院)",
      where: "Hohhot, Inner Mongolia, China",
      dates: "Mar 2016 to Mar 2017",
      text: "Emergency medical services and general surgery.",
    },
  ],

  /* ---------- Education ---------- */
  education: [
    {
      degree: "Ph.D., Biochemistry",
      place: "Kitami Institute of Technology",
      where: "Kitami, Hokkaido, Japan",
      dates: "Oct 2023 to Sep 2026",
      text: "Biotechnology and Food Chemistry, specializing in Food Nutritional Chemistry.",
    },
    {
      degree: "Master's, Traditional Chinese Medicine & Chinese Herbology",
      place: "Inner Mongolia Medical University",
      where: "Hohhot, Inner Mongolia, China",
      dates: "Sep 2017 to Jul 2020",
      text: "",
    },
    {
      degree: "Bachelor's, Traditional Chinese Medicine & Chinese Herbology",
      place: "Inner Mongolia Medical University",
      where: "Hohhot, Inner Mongolia, China",
      dates: "Sep 2012 to Jul 2017",
      text: "",
    },
  ],

  /* ---------- Publications (newest first) ----------
     link: the web address of the paper. "" hides the button.
     original: the title in the original language. "" hides it.      */
  publications: [
    {
      title: "Study on the Correlation between \"Gastric Badakan Disease\" of Mongolian Medicine and Serum Pepsinogen and Gastrin-17",
      original: "",
      journal: "Journal of Medicine and Pharmacy of Chinese Minorities",
      date: "Mar 2021",
      summary: "Built a rat model of Gastric Badakan disease that reproduces its clinical signs, and showed the condition is closely tied to serum pepsinogen and gastrin-17.",
      link: "",
    },
    {
      title: "Study on the Correlation between \"Xinheyi Disease\" of Mongolian Medicine and Plasma cAMP and cGMP",
      original: "",
      journal: "Journal of Medicine and Pharmacy of Chinese Minorities",
      date: "Jan 2021",
      summary: "Built a rabbit model of Xinheyi disease and tracked plasma cAMP, cGMP and nitric oxide over 21 days to find the best modelling time.",
      link: "",
    },
    {
      title: "A Comparative Study of Pathological Stages, Etiology and Pathogenesis of Nonalcoholic Fatty Liver in Mongolian and Western Medicine",
      original: "",
      journal: "World Chinese Medicine",
      date: "Nov 2020",
      summary: "Compares how Mongolian and Western medicine describe each stage of fatty liver disease, as a basis for staged, combined treatment.",
      link: "",
    },
    {
      title: "Experimental Study on Acute Toxicity of Mongolian Medicine Alatanqiqige-3 in Mice",
      original: "",
      journal: "Chinese Journal of Ethnomedicine and Ethnopharmacy",
      date: "Jul 2020",
      summary: "Found an LD50 of 16.03 g/kg (95% CI 11.38 to 22.60 g/kg): the formula has some toxicity but is safe within a defined dose range.",
      link: "",
    },
    {
      title: "Etiological Analysis of Fatty Liver",
      original: "",
      journal: "[Journal name]",
      date: "[Year]",
      summary: "Reviews the causes of fatty liver through nutrition, chemistry, medicine, alcohol, endocrinology, genetics and psychology, from the view of Mongolian medicine's three roots.",
      link: "",
    },
    {
      title: "Tellimagrandin I Content and α-Glucosidase Inhibition in Rose Flowers",
      original: "玫瑰花中新唢呐草素I的含量和α-葡萄糖苷酶抑制作用",
      journal: "Traditional Mongolian Medicine of China",
      date: "[Year]",
      summary: "Measured tellimagrandin I in roses from 11 regions (0.7 to 7.4%). Every extract inhibited α-glucosidase, the Gansu Kushui rose most strongly (IC50 14.73 µg/mL), pointing to a role against type 2 diabetes.",
      link: "",
    },
  ],

  /* ---------- Patents ---------- */
  patents: [
    {
      title: "A device for building animal models of Mongolian-medicine syndrome types",
      original: "一种蒙医证型动物模型的建立装置",
      number: "ZL 2025 2 0096567.7",
      date: "Issued Apr 2025",
      summary: "A cage system that uses light, sound and air flow to act on the gut's nervous system, so researchers can reproduce specific syndromes in mice.",
    },
  ],

  /* ---------- Honours & awards ---------- */
  awards: [
    { title: "First-grade Student Scholarship", issuer: "Inner Mongolia Medical University", year: "" },
    { title: "Merit Student Award", issuer: "Inner Mongolia Medical University", year: "" },
    { title: "First Prize, 4th College Students Art Exhibition of Inner Mongolia", issuer: "Inner Mongolia", year: "" },
  ],

  /* ---------- Languages ----------
     native: the language's name in its own script */
  languages: [
    { name: "Mongolian", native: "ᠮᠣᠩᠭᠣᠯ", level: "Native", note: "" },
    { name: "Chinese", native: "中文", level: "Full professional", note: "" },
    { name: "Japanese", native: "日本語", level: "Professional working", note: "JLPT N2 (2025)" },
    { name: "English", native: "English", level: "Professional working", note: "TOEIC 750 (2023), IELTS 6.0 (2021)" },
  ],

  /* ---------- Contact ---------- */
  contact: {
    heading: "Say hello",
    text: "Open to research collaborations and new positions.",
    email: "[her-email@example.com]",
  },

  /* ---------- Links (buttons at the bottom) ---------- */
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/tergel-khereid-133959364/" },
    { label: "[ResearchGate / Google Scholar]", url: "" },
  ],
};
