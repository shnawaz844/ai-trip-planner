export const SelectTravelesList = [
  {
    id: 1,
    title: 'Just Me',
    desc: 'A sole traveles in exploration',
    icon: '✈️',
    people: '1'
  },
  {
    id: 2,
    title: 'A Couple',
    desc: 'Two traveles in tandem',
    icon: '🥂',
    people: '2 People'
  },
  {
    id: 3,
    title: 'Family',
    desc: 'A group of fun loving adv',
    icon: '🏡',
    people: '3 to 5 People'
  },
  {
    id: 4,
    title: 'Friends',
    desc: 'A bunch of thrill-seekes',
    icon: '⛵',
    people: '5 to 10 People'
  },
]


export const SelectBudgetOptions = [
  {
    id: 1,
    title: 'Cheap',
    desc: 'Stay conscious of costs',
    icon: '💵',
  },
  {
    id: 2,
    title: 'Moderate',
    desc: 'Keep cost on the average side',
    icon: '💰',
  },
  {
    id: 3,
    title: 'Luxury',
    desc: 'Dont worry about cost',
    icon: '💸',
  },
]


// Dynamic AI Prompt Builder
export const buildAIPrompt = ({ location, noOfDays, traveler, budget }) => {
  // Build location string
  const locationStr = location?.english
    ? `${location.english}${location.arabic ? ` (${location.arabic})` : ''}, UAE`
    : 'UAE';

  // Build traveler description
  const travelerStr = traveler || 'travelers';

  // Build budget description  
  const budgetStr = budget || 'moderate';

  // Build days string
  const daysStr = noOfDays || '3';

  // Create minimal, structured prompt
  return `Generate a comprehensive ${daysStr}-day travel plan for ${locationStr}.

**Trip Details:**
- Duration: ${daysStr} days
- Travelers: ${travelerStr}
- Budget: ${budgetStr} (in AED)

**Required Output (JSON format):**
{
  "tripDetails": {
    "destination": "${locationStr}",
    "destinationEnglish": "${location?.english}",
    "destinationArabic": "${location?.arabic || ''}",
    "duration": "${daysStr}",
    "travelers": "${travelerStr}",
    "budget": "${budgetStr}"
  },
  "hotels": [
    {
      "hotelName": "string",
      "hotelAddress": "string",
      "price": "string (with currency)",
      "hotelImageUrl": "string",
      "geoCoordinates": "string (lat, long)",
      "rating": "number or string",
      "description": "string"
    }
  ],
  "itinerary": [
    {
      "day": "Day 1",
      "plan": [
        {
          "time": "string (e.g., 9:00 AM - 12:00 PM)",
          "placeName": "string",
          "placeDetails": "string",
          "placeImageUrl": "string",
          "geoCoordinates": "string (lat, long)",
          "placeAddress": "string",
          "ticketPricing": "string",
          "rating": "number or string",
          "timeToTravel": "string"
        }
      ]
    }
  ]
}

IMPORTANT FORMATTING RULES:
1. Return ONLY valid JSON - no markdown, no code blocks, no extra text
2. Use double quotes for ALL property names and string values
3. Do NOT use trailing commas
4. Escape special characters properly (quotes, newlines, etc.)
5. Ensure all brackets and braces are properly closed

IMPORTANT: Start your JSON with the "tripDetails" object containing the exact values shown above. Then provide ${daysStr === '1' ? '1 full day' : `${daysStr} complete days`} of detailed itinerary with best times to visit, considering the ${budgetStr} budget and ${travelerStr} group size.`;
};

// Legacy support - simple template (deprecated, use buildAIPrompt instead)
export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, Place address, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.';