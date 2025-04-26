/**
 * Utility functions for handling tags
 */

/**
 * Get the appropriate CSS classes for a tag based on its content
 */
export function getTagClassNames(tag: string): string {
  // Exact tag matching for specific styling
  switch (tag) {
    case "Human-centred AI":
      return "bg-blue-100 text-blue-800 border border-blue-400 dark:bg-gray-700 dark:text-blue-400";
    
    case "Medical Entrepreneurship":
      return "bg-gray-100 text-gray-800 border border-gray-500 dark:bg-gray-700 dark:text-gray-400";
    
    case "Law & Ethics":
      return "bg-red-100 text-red-800 border border-red-400 dark:bg-gray-700 dark:text-red-400";
      
    case "Public Health":
      return "bg-green-100 text-green-800 border border-green-400 dark:bg-gray-700 dark:text-green-400";
      
    case "Design Innovation":
      return "bg-yellow-100 text-yellow-800 border border-yellow-300 dark:bg-gray-700 dark:text-yellow-300";
      
    case "Digital Health":
      return "bg-indigo-100 text-indigo-800 border border-indigo-400 dark:bg-gray-700 dark:text-indigo-400";
      
    case "Artificial Intelligence":
      return "bg-purple-100 text-purple-800 border border-purple-400 dark:bg-gray-700 dark:text-purple-400";
      
    case "Primary Care":
      return "bg-pink-100 text-pink-800 border border-pink-400 dark:bg-gray-700 dark:text-pink-400";
      
    default:
      // Fallback to keyword-based matching for variations
      const lowerTag = tag.toLowerCase();
      
      if (lowerTag.includes("human") || lowerTag.includes("hcai")) {
        return "bg-blue-100 text-blue-800 border border-blue-400 dark:bg-gray-700 dark:text-blue-400";
      } else if (lowerTag.includes("entrepreneur") || lowerTag.includes("business")) {
        return "bg-gray-100 text-gray-800 border border-gray-500 dark:bg-gray-700 dark:text-gray-400";
      } else if (lowerTag.includes("law") || lowerTag.includes("ethics") || lowerTag.includes("legal") || lowerTag.includes("policy")) {
        return "bg-red-100 text-red-800 border border-red-400 dark:bg-gray-700 dark:text-red-400";
      } else if (lowerTag.includes("public") || lowerTag.includes("health")) {
        return "bg-green-100 text-green-800 border border-green-400 dark:bg-gray-700 dark:text-green-400";
      } else if (lowerTag.includes("design") || lowerTag.includes("innovation")) {
        return "bg-yellow-100 text-yellow-800 border border-yellow-300 dark:bg-gray-700 dark:text-yellow-300";
      } else if (lowerTag.includes("digital")) {
        return "bg-indigo-100 text-indigo-800 border border-indigo-400 dark:bg-gray-700 dark:text-indigo-400";
      } else if (lowerTag.includes("ai") || lowerTag.includes("intelligence") || lowerTag.includes("machine")) {
        return "bg-purple-100 text-purple-800 border border-purple-400 dark:bg-gray-700 dark:text-purple-400";
      } else if (lowerTag.includes("care") || lowerTag.includes("primary") || lowerTag.includes("clinical")) {
        return "bg-pink-100 text-pink-800 border border-pink-400 dark:bg-gray-700 dark:text-pink-400";
      } else {
        // Default for unknown tags
        return "bg-blue-100 text-blue-800 border border-blue-400 dark:bg-gray-700 dark:text-blue-400";
      }
  }
}

/**
 * Get CSS classes for tag badge styling
 */
export function getTagBadgeClasses(tag: string): string {
  return `text-xs font-medium me-2 px-2.5 py-0.5 rounded ${getTagClassNames(tag)}`;
}