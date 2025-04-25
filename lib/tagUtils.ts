/**
 * Utility functions for handling tags
 */

interface TagColor {
  background: string;
  text: string;
  border: string;
  darkBackground: string;
  darkText: string;
  darkBorder: string;
}

// Define color mappings for different tag types
const TAG_COLORS: Record<string, TagColor> = {
  "human-centered ai": {
    background: "bg-blue-100",
    text: "text-blue-800", 
    border: "border-blue-400",
    darkBackground: "dark:bg-blue-900/40",
    darkText: "dark:text-blue-300",
    darkBorder: "dark:border-blue-700"
  },
  "medical entrepreneurship": {
    background: "bg-gray-100",
    text: "text-gray-800", 
    border: "border-gray-500",
    darkBackground: "dark:bg-gray-900/40",
    darkText: "dark:text-gray-300",
    darkBorder: "dark:border-gray-700"
  },
  "law & ethics": {
    background: "bg-red-100",
    text: "text-red-800", 
    border: "border-red-400",
    darkBackground: "dark:bg-red-900/40",
    darkText: "dark:text-red-300",
    darkBorder: "dark:border-red-700"
  },
  "public health": {
    background: "bg-green-100",
    text: "text-green-800", 
    border: "border-green-400",
    darkBackground: "dark:bg-green-900/40",
    darkText: "dark:text-green-300",
    darkBorder: "dark:border-green-700"
  },
  "design innovation": {
    background: "bg-yellow-100",
    text: "text-yellow-800", 
    border: "border-yellow-300",
    darkBackground: "dark:bg-yellow-900/40",
    darkText: "dark:text-yellow-300",
    darkBorder: "dark:border-yellow-700"
  },
  "digital health": {
    background: "bg-indigo-100",
    text: "text-indigo-800", 
    border: "border-indigo-400",
    darkBackground: "dark:bg-indigo-900/40",
    darkText: "dark:text-indigo-300",
    darkBorder: "dark:border-indigo-700"
  },
  "artificial intelligence": {
    background: "bg-purple-100",
    text: "text-purple-800", 
    border: "border-purple-400",
    darkBackground: "dark:bg-purple-900/40",
    darkText: "dark:text-purple-300",
    darkBorder: "dark:border-purple-700"
  },
  "primary care": {
    background: "bg-pink-100",
    text: "text-pink-800", 
    border: "border-pink-400",
    darkBackground: "dark:bg-pink-900/40",
    darkText: "dark:text-pink-300",
    darkBorder: "dark:border-pink-700"
  },
  // Default
  "default": {
    background: "bg-blue-100",
    text: "text-blue-800", 
    border: "border-blue-400",
    darkBackground: "dark:bg-blue-900/40",
    darkText: "dark:text-blue-300",
    darkBorder: "dark:border-blue-700"
  }
};

// Keywords to match for each tag type
const TAG_KEYWORDS: Record<string, string[]> = {
  "human-centered ai": ["human", "human-centred", "human-centered", "hcai"],
  "medical entrepreneurship": ["entrepreneur", "business", "startup", "venture"],
  "law & ethics": ["law", "legal", "ethics", "ethical", "policy"],
  "public health": ["health", "healthcare", "public health", "medical"],
  "design innovation": ["design", "innovation", "innovative", "creativity"],
  "digital health": ["digital", "digital health", "ehealth", "telehealth"],
  "artificial intelligence": ["ai", "artificial intelligence", "machine learning", "deep learning"],
  "primary care": ["primary care", "care", "clinical", "patient care"]
};

/**
 * Get the appropriate CSS classes for a tag based on its content
 */
export function getTagClassNames(tag: string): string {
  const lowerTag = tag.toLowerCase();
  
  // Try to match the tag with known categories
  for (const [category, keywords] of Object.entries(TAG_KEYWORDS)) {
    if (keywords.some(keyword => lowerTag.includes(keyword))) {
      const colors = TAG_COLORS[category];
      return `${colors.background} ${colors.text} ${colors.border} ${colors.darkBackground} ${colors.darkText} ${colors.darkBorder}`;
    }
  }
  
  // Default styling
  const defaultColors = TAG_COLORS.default;
  return `${defaultColors.background} ${defaultColors.text} ${defaultColors.border} ${defaultColors.darkBackground} ${defaultColors.darkText} ${defaultColors.darkBorder}`;
}

/**
 * Get CSS classes for tag badge styling
 */
export function getTagBadgeClasses(tag: string): string {
  return `text-xs font-medium px-2.5 py-0.5 rounded border ${getTagClassNames(tag)}`;
}