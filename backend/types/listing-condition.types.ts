

// as const: tells the compiler to infer the narrowest, most specific, and deeply immutable type possible for a value. 
export const LISTING_CONDITION = ["new",  "good" , "fair", "poor"] as const; // Mongoose schemas run at runtime so cannot work with types there

export type listingCondition = "new" | "good" | "fair"| "poor"; // Type safety for everywhere else

