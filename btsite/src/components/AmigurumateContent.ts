export const bgText = "I started learning crochet during the pandemic, and as I improved, I found myself needing to modify patterns in order to achieve the desired result. However, when I looked for apps or websites that had solutions, all of the solutions were inefficient, and worse than just printing out a copy of the pattern and writing over it. When I spoke with other fiber artists, I found that they had the same problem that I did, and wanted a similar solution. With an online option and a standardized file format, they could edit patterns, and even create and iterate live digitally for the first time ever. This would make them faster, and speed up the process for people who make fiber art a career.";
export const researchText1 = "Before I even conceptualized this as a project, I had looked for apps or websites that could perform the function that I was looking for. I didn’t find anything that turned the solution into a purely software solution. However, multiple products had features or integrations that I liked. So when it came time to start looking into what features my app would have, I found that Ravelry, Pocket Crochet, My Row Counter, and Ravit all had aspects of things I wanted in my app and were thus the most successful apps out there. I completed a small SWOT competitive analysis on the four products in order to gain a deeper understanding of what was in the space. What I learned from that research was that not having an in-app stitch counter and an intuitive standardized way to read patterns were the most common gripes, so those would have to be my main 2 features in the app.";
export const researchText2 = "I started to think about the implementation of the app, and the restrictions I would have. Given that this problem was affecting me and I intended on starting this app as a side-loaded app on mobile, Web and Android made sense to start things out with. But besides that decision, I realized I needed to also speak with individuals in the space to gain better clarity over and confirm what would be important to include in the app.\n\nI interviewed people over Zoom who have done Crochet or Knitting, and picked their brains on what other features they would want from a Crochet app. 4/5 thought the idea of including a stitch counter in the app was a must-have feature. All of them expressed interest in a feature that would allow them to follow along with a pattern and remember where they left off, no matter how long ago they had last worked on it. One person gave me a quote that really helped conceptualize it. They called it";
export const researchText3 = "That led me to looking up how popular book apps like kindle and aldiko handle bookmarks. All of them implemented a seamless, invisible bookmark. So, to follow that pattern, it made sense to implement the same.\n\nAnother thing that came up during user interviews was that the two more experienced fiber artists wanted a way to know which lines had been modified from the original version of the uploaded pattern. To address this, I looked up how word processors and text editors handled notifying users of modifications to the original. I found color changes and using a * character before the title or line were both used to denote modifications. With color being used to denote other kinds of information within the row, I decided to go with the * option at the beginning of the line.\n\nAll of this information I collated in an affinity map.";
export const personaText1 = "Which I then turned into a Persona, to whom I could refer when I was making design decisions, as she was a representative of my target customers.";
export const personaText2 = "Given that my interviewees were in my network, I knew that all of them spent a significant portion of their free time watching shows and movies from home, and liked having something else to do at the same time. The rest came directly from the User Interviews.";
export const producDefText1 = "After completing my initial research, I concretely defined the project goals.";
export const producDefText2 = "I used these goals to create problem statements.\n\nHow might we help";
export const featureSetText = "I then prioritized possible initial features based on my previous research. (I’ll make this prettier in the final version)";
export const sitemapText = "Looking at the MVP, and thinking about how long it would take to develop each feature, I ended up deciding to only implement P1 and P2 features for it. Those decisions naturally led to a fairly simple sitemap.";
export const userFlowText = "From the sitemap, I created an MVP User Flow, taking the users through all pages of the design I intended to mock up in Figma.";
export const lofiText = "Before starting my Wireframes, I decided to implement a website and Android app since a core part of the MVP software was going to be file system access, and Apple doesn’t really do that. Furthermore, Android allows sideloading, which can save me from having to pay to put early versions of the app on the app store.\n\nI started out my Low Fidelity Wireframes with 2 options for each main sitemap screen in Desktop and Mobile. This first option was the one that users didn’t like as much.";
export const userTestingText = "The rest of the feedback was for minor layout changes. Anything 3/5 users asked for, I decided to implement eventually. The stitch shorthand modal was too far out of scope to be part of the MVP. Below is a polished version of what the users liked.";
export const brandingText1 = "Having decided what feedback I would act upon, it was now time to start working on branding. This is where I had to most fun in this project.\n\nAround this time I was working on product statements, the name Amigurumate sort of just came to me as a natural tongue in cheek way to pay homage to the Japanese term Amigurumi, which is the crochet of stuffed creatures, and mate, denoting companion.\n\nFirst, I started thinking about color scheme. I had an image of my head of a lavender or light purple background for the product, but nothing else. Simultaneously, but unrelated (or so I thought), I wanted to emphasize creativity. I played around with monochromatic color schemes with adobe’s color tool until I found one that worked. For my second color scheme, I looked into color psychology for what color would boost a calm, sophisticated, creativity. I found that lighter purples fit the bill, and purple has also been associated with artistic and spiritual pursuits, which fit my experiences with crochet.\n\nI then worked on choosing typefaces, and given that my research indicated that a notable percentage of fiber artists suffered from afflictions like dyslexia and ADHD, I chose Luciole for my body typeface, as it was designed for that purpose, and is eminently readable. I wanted a fun, stylized typeface that was still readable for my title, and ended up settling on Rosario from an initial list of 20 options.\n\nI turned that into a moodboard.";
export const brandingText2 = "I applied my moodboard, and found a variation of the second color scheme that gave me sufficient contrast in order to create a living style guide/tile.";
export const brandingText3 = "Next up, I needed to find the right typeface for the Logo, and design the Logo itself. I started out by realizing that while crochet stitches are called ‘v’s, but turning them upside down made them look like a capital letter A. I drew out what a stitch looked like, then designed a version of that from a crochet diagram. Then, I had the idea of creating a crochet mascot, taking inspiration from apps like Duolingo, and tried to create a crochet penguin with DALL-E. Finally, I thought of using a diagram of a crochet hook to create an abstract shape that also resembled the letter A. I found four typefaces that felt playful and artistic enough: Recursive Sans Casual, Itim, Laila, and Grandstander. I tested each unique combination on fellow designers and fiber artists, who overwhelmingly chose the highlighted crochet hook logo and the Grandstander typeface.";
export const usabilityText = "I integrated all of feedback and branding into a High Fidelity mockup, testing changes regularly. For instance, I turned the logo on the home page into a Hero Section and gave it a dark background from user feedback. The other major feedback from my testing was that the Completed cards were hard to distinguish from the regular cards. So, I tried changing the colors of the card first, and when subsequent tests showed that the problem still persisted, I shrank the size of the completed card as well. I then prototyped out all of the screens, and created a High-Fidelity Figma prototype so functional that testers were confused that they couldn’t upload their own designs. Please note that any resemblance to existing patterns is coincidental, and all photos were taken by me or from a stock photo site.";
export const conclustionText = "This project was borne from a need I faced during the last half of COVID-19, but has become much more than I ever intended to make. However, it was not a completely smooth experience. I had to deal with scope creep, a tight deadline, and having to make compromises on my vision of the project based on research results and user feedback.\n\nDespite that, I improved significantly in my figma animation skills (especially with that beautiful mobile hamburger menu animation), and was able to overcome my instinct to protect the sanctity of my work. Both will be integral to my work in all future projects.\n\nIf I had to redo the project, I would have built out all screens and modals at the very beginning rather than let the Low-Fidelity Wireframes be a brief sanity check for the layout.\n\nAfter I implement the existing features, I will next be adding the ability to save and load patterns from file, a stitch glossary, and a popup stitch description when the user clicks or taps a stitch shorthand."
