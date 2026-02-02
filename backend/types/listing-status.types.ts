


export const LISTING_STATUS = ["PENDING", "APPROVED", "SOLD", "REJECTED"] as const; // For runtime 

export type listingStatus = "PENDING" | "APPROVED" | "SOLD" | "REJECTED"; // Throughout dev