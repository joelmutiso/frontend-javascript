// 1. Define MajorCredits Interface
export interface MajorCredits {
  credits: number;
  // This 'brand' property creates a unique signature for this type
  brand: "MajorCredits";
}

// 2. Define MinorCredits Interface
export interface MinorCredits {
  credits: number;
  brand: "MinorCredits";
}

// 3. Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

// 4. Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}
