export interface CalcInput {
  country: "usa" | "korea";
  vehiclePrice: number;
  year: number;
  engineCC: number;
  fuelType: "benzina" | "diesel" | "hibrid" | "electric";
}

export interface CalcResult {
  vehiclePrice: number;
  auctionFee: number;
  commission: number;
  shipping: number;
  customs: number;
  total: number;
}

export function calculateCost(input: CalcInput): CalcResult {
  const { country, vehiclePrice, year, engineCC, fuelType } = input;

  // Auction/buyer fee: ~8-12% of vehicle price, min $400
  const auctionFee = Math.max(400, Math.round(vehiclePrice * 0.09));

  // Our commission
  const commission = country === "usa" ? 1000 : 850;

  // Shipping cost
  let shipping: number;
  if (country === "usa") {
    shipping = vehiclePrice > 25000 ? 2200 : 1700;
  } else {
    shipping = vehiclePrice > 25000 ? 1900 : 1500;
  }

  // Customs estimate based on engine, year, fuel
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  let customsRate: number;

  if (fuelType === "electric") {
    customsRate = 0.05;
  } else if (fuelType === "hibrid") {
    customsRate = 0.1;
  } else {
    // Base rate by engine size
    if (engineCC <= 1500) customsRate = 0.15;
    else if (engineCC <= 2000) customsRate = 0.2;
    else if (engineCC <= 2500) customsRate = 0.25;
    else if (engineCC <= 3000) customsRate = 0.3;
    else customsRate = 0.38;

    // Age modifier
    if (age > 7) customsRate += 0.08;
    else if (age > 3) customsRate += 0.04;

    // Diesel surcharge
    if (fuelType === "diesel") customsRate += 0.05;
  }

  const customs = Math.round(vehiclePrice * customsRate);
  const total = vehiclePrice + auctionFee + commission + shipping + customs;

  return {
    vehiclePrice,
    auctionFee,
    commission,
    shipping,
    customs,
    total,
  };
}
