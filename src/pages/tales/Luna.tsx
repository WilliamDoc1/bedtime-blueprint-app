import React from 'react';

// --- 1. STORY DATA ARRAY ---
// This array defines the content and image paths for the 22 pages of the story.
export const LUNA_STORY_PAGES = [
  {
    page: 1,
    image: "/Luna cover.jpg", 
    text: "Luna and the Star Garden", // Title Page
  },
  {
    page: 2,
    image: "/Luna Page 1.jpg", // Luna in forest archway
    text: "Once upon a time, in a forest where the trees shimmered like silver in the moonlight, there lived a little fox named Luna. Luna's fur sparkled faintly under the stars, as if the night itself had sprinkled her with magic.", 
  },
  {
    page: 3,
    image: "/Luna Page 2.jpg", // Luna looking up at the smiling moon
    text: "Every evening, Luna loved to wander through the forest, listening to the gentle hum of the whispering stars. They twinkled softly and shared secrets only a kind heart could hear.", 
  },
  {
    page: 4,
    image: "/Luna Page 3.jpg", // Luna looking up at a single yellow star
    text: "One night, Luna noticed a tiny star that flickered nervously in the sky. \"Oh, little star,\" Luna whispered, \"why are you trembling?\"", 
  },
  {
    page: 5,
    image: "/Luna Page 4.jpg", // Image of the small, trembling star in the clouds
    text: "\"I've lost my sparkle,\" the star replied in a voice as soft as the wind. \"Without it, I cannot twinkle for the children who need my dreams.\”",
  },
  {
    page: 6,
    image: "/Luna Page 5.jpg", // Luna thinking, looking up
    text: "Luna thought for a moment, her tail swishing thoughtfully. \"Maybe I can help,\" she said. \"Come with me to the Glowing Meadow. The Moonflowers there know the secret of finding lost magic.\"", 
  },
  {
    page: 7,
    image: "/Luna Page 6.jpg", // Luna walking with the star, fireflies dancing
    text: "So together, Luna and the tiny star tiptoed over mossy paths and under arches of glowing vines. Fireflies danced around them, painting silver trails in the night air.", 
  },
  {
    page: 8,
    image: "/Luna Page 7.jpg", // Luna and the star reach the meadow flowers
    text: "When they reached the Glowing Meadow, the flowers opened slowly, shimmering with soft light. \"Touch the petals and close your eyes,\" whispered Luna. \"Think of the happiest dream you've ever had.\"", 
  },
  {
    page: 9,
    image: "/Luna Page 8.jpg", // Close-up of the star nestled inside the flower, smiling and glowing
    text: "The star twinkled as it nestled among the Moonflowers. Slowly, its light grew warmer, brighter, until it sparkled more beautifully than ever. \"I remember now!\" the star said. \"I can shine again!\"", 
  },
  {
    page: 10,
    image: "/Luna Page 9.jpg", // Luna looking up at the brightly shining star
    text: "The star floated back into the night sky, twinkling with joy. Luna watched it dance among the other stars, lighting up the dark with hope and dreams. She yawned, her eyelids heavy.", 
  },
  {
    page: 11,
    image: "/Luna Page 10.jpg", // Luna curled up and sleeping under the smiling moon
    text: "Curling into a soft patch of moss, Luna whispered to herself, \"Goodnight, little star. Sleep well, little world.\" And as the whispering stars hummed lullabies above, Luna drifted into the sweetest dreams, surrounded by magic, kindness, and twinkling lights.", 
  },
  {
    page: 12,
    image: "/Luna Page 11.jpg",
    text: "THE END", 
  },
  {
    page: 13,
    image: "/Luna Page 12.jpg",
    text: "", 
  },
  {
    page: 14,
    image: "/Luna Page 13.jpg",
    text: "", 
  },
  {
    page: 15,
    image: "/Luna Page 14.jpg",
    text: "", 
  },
  {
    page: 16,
    image: "/Luna Page 15.jpg",
    text: "", 
  },
  {
    page: 17,
    image: "/Luna Page 16.jpg",
    text: "", 
  },
  {
    page: 18,
    image: "/Luna Page 17.jpg",
    text: "", 
  },
  {
    page: 19,
    image: "/Luna Page 18.jpg",
    text: "", 
  },
  {
    page: 20,
    image: "/Luna Page 19.jpg",
    text: "", 
  },
  {
    page: 21,
    image: "/Luna Page 20.jpg",
    text: "", 
  },
  {
    page: 22,
    image: "/Luna Page 21.jpg",
    text: "", 
  },
];

// --- 2. STORY VIEWER COMPONENT ---
const LunaStoryViewer = () => {
    // This is the core logic that Dyad built for the carousel.
    // It assumes a current page index (e.g., const [currentPage, setCurrentPage] = useState(0);)
    const currentPageIndex = 0; // Placeholder until Dyad re-runs the state logic
    
    // We are using a placeholder display for now to ensure the file compiles.
    return (
        <div className="story-viewer-container p-4 text-center">
            <h1 className="text-2xl font-bold mb-4">{LUNA_STORY_PAGES[currentPageIndex].text || "Page " + LUNA_STORY_PAGES[currentPageIndex].page}</h1>
            <img 
                src={LUNA_STORY_PAGES[currentPageIndex].image} 
                alt="Luna Story Page" 
                className="mx-auto max-h-[80vh] object-contain shadow-lg rounded-lg"
            />
            <div className="mt-4 text-gray-600">
                Viewing Page 1 of 22. (Navigation buttons would be here)
            </div>
        </div>
    );
};

// --- 3. DEFAULT EXPORT (The final solution) ---
export default LunaStoryViewer;
