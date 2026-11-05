// Catalog extracted from the matching brand site, purehimcream.com, on 4 November 2026.
// An empty product image means no exact product photo was provided by the source.
// Prices deliberately omitted until business confirmation. Original product spellings retained.
export type Product = {
  id: string;
  name: string;
  size: string;
  image: string;
  description?: string;
};
export type Collection = {
  id: string;
  name: string;
  image: string;
  products: Product[];
  showcase: { name: string; image: string }[];
};
export const collections: Collection[] = [
  {
    id: "kulfi",
    name: "Kulfi",
    image: "/brand/kulfi/rajbhog.webp",
    products: [
      {
        id: "kulfi-1",
        name: "Malai Kulfi",
        size: "35ml",
        image: "/brand/kulfi/malai.webp",
      },
      {
        id: "kulfi-2",
        name: "Mango Kulfi",
        size: "35ml",
        image: "/brand/kulfi/mango.webp",
      },
      {
        id: "kulfi-3",
        name: "Gulkand Kulfi",
        size: "35ml",
        image: "/brand/kulfi/gulkand.webp",
      },
      {
        id: "kulfi-4",
        name: "Malai Kulfi",
        size: "60ml",
        image: "/brand/kulfi/malai.webp",
      },
      {
        id: "kulfi-5",
        name: "Mango Kulfi",
        size: "60ml",
        image: "/brand/kulfi/mango.webp",
      },
      {
        id: "kulfi-6",
        name: "Gulkand Kulfi",
        size: "60ml",
        image: "/brand/kulfi/gulkand.webp",
      },
      {
        id: "kulfi-7",
        name: "Chocolate Kulfi",
        size: "60ml",
        image: "/brand/kulfi/chocolate.webp",
      },
      {
        id: "kulfi-8",
        name: "Punjabi Kulfi",
        size: "60ml",
        image: "",
      },
      {
        id: "kulfi-9",
        name: "Mataka Kulfi",
        size: "100ml",
        image: "",
      },
    ],
    showcase: [
      {
        name: "Rajbhog",
        image: "/brand/kulfi/rajbhog.webp",
      },
      {
        name: "Chocolate",
        image: "/brand/kulfi/chocolate.webp",
      },
      {
        name: "Gulkand",
        image: "/brand/kulfi/gulkand.webp",
      },
      {
        name: "Mango",
        image: "/brand/kulfi/mango.webp",
      },
      {
        name: "Malai",
        image: "/brand/kulfi/malai.webp",
      },
    ],
  },
  {
    id: "ice-candy",
    name: "Ice Candy",
    image: "/brand/icecandy/orange.webp",
    products: [
      {
        id: "ice-candy-1",
        name: "Orange Candy",
        size: "60ml",
        image: "/brand/icecandy/orange.webp",
      },
      {
        id: "ice-candy-2",
        name: "Mango Candy",
        size: "60ml",
        image: "/brand/icecandy/mango.webp",
      },
      {
        id: "ice-candy-3",
        name: "Koakam Candy",
        size: "60ml",
        image: "/brand/icecandy/kokam.webp",
      },
      {
        id: "ice-candy-4",
        name: "Kala Khatta Candy",
        size: "60ml",
        image: "/brand/icecandy/kalakhatta.webp",
      },
      {
        id: "ice-candy-5",
        name: "Mango Panna",
        size: "60ml",
        image: "/brand/icecandy/mango.webp",
      },
    ],
    showcase: [
      {
        name: "Orange",
        image: "/brand/icecandy/orange.webp",
      },
      {
        name: "Mango",
        image: "/brand/icecandy/mango.webp",
      },
      {
        name: "Mango Panna",
        image: "/brand/icecandy/mangopanna.webp",
      },
      {
        name: "Kokam",
        image: "/brand/icecandy/kokam.webp",
      },
      {
        name: "Kala Khatta",
        image: "/brand/icecandy/kalakhatta.webp",
      },
    ],
  },
  {
    id: "coolcone",
    name: "CoolCone",
    image: "/brand/coolcone/chocolate.webp",
    products: [
      {
        id: "coolcone-1",
        name: "Chocolate",
        size: "50ml",
        image: "/brand/coolcone/chocolate.webp",
      },
      {
        id: "coolcone-2",
        name: "ButterScotch",
        size: "50ml",
        image: "/brand/coolcone/butterscotch.webp",
      },
      {
        id: "coolcone-3",
        name: "Chocolate",
        size: "110ml",
        image: "/brand/coolcone/chocolate.webp",
      },
      {
        id: "coolcone-4",
        name: "ButterScotch",
        size: "110ml",
        image: "/brand/coolcone/butterscotch.webp",
      },
      {
        id: "coolcone-5",
        name: "Mango",
        size: "110ml",
        image: "",
      },
      {
        id: "coolcone-6",
        name: "Vanilla",
        size: "110ml",
        image: "",
      },
    ],
    showcase: [
      {
        name: "Chocolate",
        image: "/brand/coolcone/chocolate.webp",
      },
      {
        name: "Butterscotch",
        image: "/brand/coolcone/butterscotch.webp",
      },
    ],
  },
  {
    id: "ice-cream-cup-all-size",
    name: "Ice Cream Cup All Size",
    image: "/brand/new-pista.webp",
    products: [
      {
        id: "ice-cream-cup-all-size-1",
        name: "Vanila",
        size: "35ml",
        image: "",
      },
      {
        id: "ice-cream-cup-all-size-2",
        name: "Pista",
        size: "35ml",
        image: "",
      },
      {
        id: "ice-cream-cup-all-size-3",
        name: "Mango",
        size: "35ml",
        image: "",
      },
      {
        id: "ice-cream-cup-all-size-4",
        name: "Straberry",
        size: "35ml",
        image: "",
      },
      {
        id: "ice-cream-cup-all-size-5",
        name: "Vanila",
        size: "55ml",
        image: "",
      },
      {
        id: "ice-cream-cup-all-size-6",
        name: "Pista",
        size: "55ml",
        image: "",
      },
      {
        id: "ice-cream-cup-all-size-7",
        name: "Mango",
        size: "55ml",
        image: "",
      },
      {
        id: "ice-cream-cup-all-size-8",
        name: "Straberry",
        size: "55ml",
        image: "",
      },
      {
        id: "ice-cream-cup-all-size-9",
        name: "Mango",
        size: "100ml",
        image: "",
      },
      {
        id: "ice-cream-cup-all-size-10",
        name: "Pista",
        size: "100ml",
        image: "",
      },
      {
        id: "ice-cream-cup-all-size-11",
        name: "ButterScotch",
        size: "100ml",
        image: "",
      },
      {
        id: "ice-cream-cup-all-size-12",
        name: "Chocolate",
        size: "100ml",
        image: "",
      },
    ],
    showcase: [],
  },
  {
    id: "premium-exotic-cups",
    name: "Premium Exotic Cups",
    image: "/brand/bigcup/butterscotch.webp",
    products: [
      {
        id: "premium-exotic-cups-1",
        name: "Chocolate",
        size: "125ml",
        image: "/brand/bigcup/chocolate.webp",
      },
      {
        id: "premium-exotic-cups-2",
        name: "Mango",
        size: "125ml",
        image: "/brand/bigcup/mango.webp",
      },
      {
        id: "premium-exotic-cups-3",
        name: "Pista",
        size: "125ml",
        image: "/brand/bigcup/pista.webp",
      },
      {
        id: "premium-exotic-cups-4",
        name: "ButterSckotch",
        size: "125ml",
        image: "/brand/bigcup/butterscotch.webp",
      },
      {
        id: "premium-exotic-cups-5",
        name: "Rajbhog",
        size: "125ml",
        image: "/brand/bigcup/rajbhog.webp",
      },
    ],
    showcase: [
      {
        name: "Butterscotch",
        image: "/brand/bigcup/butterscotch.webp",
      },
      {
        name: "Pista",
        image: "/brand/bigcup/pista.webp",
      },
      {
        name: "Chocolate",
        image: "/brand/bigcup/chocolate.webp",
      },
      {
        name: "Rajbhog",
        image: "/brand/bigcup/rajbhog.webp",
      },
      {
        name: "Mango",
        image: "/brand/bigcup/mango.webp",
      },
    ],
  },
  {
    id: "sundae-cup",
    name: "Sundae Cup",
    image: "/brand/sundae/sweet_sundae.webp",
    products: [
      {
        id: "sundae-cup-1",
        name: "Sundae Cup",
        size: "100ml",
        image: "/brand/sundae/sweet_sundae.webp",
      },
      {
        id: "sundae-cup-2",
        name: "Sundae Cup",
        size: "150ml",
        image: "/brand/sundae/sweet_sundae.webp",
      },
    ],
    showcase: [
      {
        name: "Sweet Sundae",
        image: "/brand/sundae/sweet_sundae.webp",
      },
    ],
  },
  {
    id: "choco-and-nutty-bars",
    name: "Choco and Nutty Bars",
    image: "/brand/bars/chocobar.webp",
    products: [
      {
        id: "choco-and-nutty-bars-1",
        name: "Junior ChocoBar",
        size: "35ml",
        image: "/brand/bars/chocobar.webp",
      },
      {
        id: "choco-and-nutty-bars-2",
        name: "Big B ChocoBar",
        size: "60ml",
        image: "/brand/bars/chocobar.webp",
      },
      {
        id: "choco-and-nutty-bars-3",
        name: "NuttyBar",
        size: "60ml",
        image: "/brand/bars/nuttybar.webp",
      },
    ],
    showcase: [
      {
        name: "Chocobar",
        image: "/brand/bars/chocobar.webp",
      },
      {
        name: "Nuttybar",
        image: "/brand/bars/nuttybar.webp",
      },
    ],
  },
  {
    id: "family-pack",
    name: "Family Pack",
    image: "/brand/familypack/alphonso_mango.webp",
    products: [
      {
        id: "family-pack-1",
        name: "Alphanso Mango",
        size: "500ml",
        image: "/brand/familypack/alphonso_mango.webp",
      },
      {
        id: "family-pack-2",
        name: "Dark Chocolate",
        size: "500ml",
        image: "/brand/familypack/dark_chocolate.webp",
      },
      {
        id: "family-pack-3",
        name: "ButterScotch",
        size: "500ml",
        image: "",
      },
      {
        id: "family-pack-4",
        name: "Pista",
        size: "500ml",
        image: "",
      },
      {
        id: "family-pack-5",
        name: "Rajbhog",
        size: "500ml",
        image: "/brand/familypack/rajbhog.webp",
      },
      {
        id: "family-pack-6",
        name: "American Nuts",
        size: "500ml",
        image: "/brand/familypack/american_nuts.webp",
      },
      {
        id: "family-pack-7",
        name: "Black Current",
        size: "500ml",
        image: "/brand/familypack/black_current.webp",
      },
      {
        id: "family-pack-8",
        name: "Kesar Badam",
        size: "500ml",
        image: "",
      },
      {
        id: "family-pack-9",
        name: "Kaju Kishmish",
        size: "500ml",
        image: "",
      },
      {
        id: "family-pack-10",
        name: "Alphanso Mango",
        size: "700ml",
        image: "/brand/familypack/alphonso_mango.webp",
      },
      {
        id: "family-pack-11",
        name: "Dark Chocolate",
        size: "700ml",
        image: "/brand/familypack/dark_chocolate.webp",
      },
      {
        id: "family-pack-12",
        name: "ButterScotch",
        size: "700ml",
        image: "",
      },
      {
        id: "family-pack-13",
        name: "Pista",
        size: "700ml",
        image: "",
      },
      {
        id: "family-pack-14",
        name: "Strawberry",
        size: "700ml",
        image: "/brand/familypack/strawberry.webp",
      },
      {
        id: "family-pack-15",
        name: "Vanilla",
        size: "700ml",
        image: "/brand/familypack/french_vanilla.webp",
      },
      {
        id: "family-pack-16",
        name: "Rajbhog",
        size: "700ml",
        image: "/brand/familypack/rajbhog.webp",
      },
      {
        id: "family-pack-17",
        name: "American Nuts",
        size: "700ml",
        image: "/brand/familypack/american_nuts.webp",
      },
      {
        id: "family-pack-18",
        name: "Black Current",
        size: "700ml",
        image: "/brand/familypack/black_current.webp",
      },
    ],
    showcase: [
      {
        name: "Alphonso Mango",
        image: "/brand/familypack/alphonso_mango.webp",
      },
      {
        name: "American Nuts",
        image: "/brand/familypack/american_nuts.webp",
      },
      {
        name: "Black Current",
        image: "/brand/familypack/black_current.webp",
      },
      {
        name: "Classic Cashew",
        image: "/brand/familypack/classic_cashew.webp",
      },
      {
        name: "Dark Chocolate",
        image: "/brand/familypack/dark_chocolate.webp",
      },
      {
        name: "French Vanilla",
        image: "/brand/familypack/french_vanilla.webp",
      },
      {
        name: "Rajbhog",
        image: "/brand/familypack/rajbhog.webp",
      },
      {
        name: "Strawberry",
        image: "/brand/familypack/strawberry.webp",
      },
      {
        name: "Chef's Scoop",
        image: "/brand/familypack/4liter.webp",
      },
    ],
  },
];
export const business = {
  name: "Him Cream",
  tagline: "Ye to amrit hai!",
  manufacturer: "PATIL AGRO PRODUCT COMPANY",
  address: "Kalambi Road, Tal Miraj, Dist. Sangli (MH) 416 410 (INDIA)",
  phones: ["9960627775", "9765607772"],
  email: "himcream2005@gmail.com",
  source: "https://www.purehimcream.com/",
};
