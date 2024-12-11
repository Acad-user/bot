import { waterKnowledgeBase } from './waterKnowledgeBase';

export function generateResponse(userInput: string): string {
  const input = userInput.toLowerCase();
  
  // Check for greetings
  if (input.match(/\b(hi|hello|hey)\b/)) {
    return "Hello! I'm Jal Saanjeev, your water conservation assistant. How can I help you today?";
  }

  // Check for water conservation techniques
  if (input.includes('technique') || input.includes('method') || input.includes('how to save water')) {
    const techniques = waterKnowledgeBase.conservation;
    return `Here are some water conservation techniques:\n\nFor Households:\n${techniques.household.join('\n')}\n\nFor Agriculture:\n${techniques.agriculture.join('\n')}`;
  }

  // Check for water quality
  if (input.includes('quality') || input.includes('wqi') || input.includes('parameters')) {
    const quality = waterKnowledgeBase.waterQuality.parameters;
    return `Water quality is measured using these key parameters:\n\n${quality.map(p => 
      `${p.name}: ${p.description} (Ideal range: ${p.idealRange})`
    ).join('\n')}`;
  }

  // Check for specific conservation methods
  if (input.includes('rainwater')) {
    const rwh = waterKnowledgeBase.techniques.rainwaterHarvesting;
    return `${rwh.title}: ${rwh.description}\n\nMethods:\n${rwh.methods.join('\n')}\n\nBenefits:\n${rwh.benefits.join('\n')}`;
  }

  if (input.includes('drip') || input.includes('irrigation')) {
    const drip = waterKnowledgeBase.techniques.dripIrrigation;
    return `${drip.title}: ${drip.description}\n\nMethods:\n${drip.methods.join('\n')}\n\nBenefits:\n${drip.benefits.join('\n')}`;
  }

  // Default response
  return "I can help you with information about water conservation techniques, water quality parameters, and specific methods like rainwater harvesting or drip irrigation. What would you like to know more about?";
}