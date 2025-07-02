
import { TestDataService } from "@/services/testData.service";

// Initialize system cleanup if requested
export const initializeApp = () => {
  if (typeof window !== 'undefined') {
    // Check if it's the first time loading or if reset was requested
    const shouldReset = !localStorage.getItem('system-initialized') || 
                       window.location.search.includes('reset=true');
    
    if (shouldReset) {
      TestDataService.initializeCleanSystem();
      localStorage.setItem('system-initialized', 'true');
    }
  }
};
