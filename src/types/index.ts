export type OccasionId = 'streetwear' | 'graduation' | 'festival';

export interface OccasionOption {
  id: OccasionId;
  title: string;
  subtitle: string;
  description: string;
  recommendedVibe: string;
}

export type GarmentId = 'ngu_than' | 'ao_tac' | 'giao_linh' | 'ao_dai' | 'ai_recommend';

export interface GarmentOption {
  id: GarmentId;
  name: string;
  formalName: string;
  dynastyPeriod: string;
  description: string;
  silhouetteDesc: string;
  tag: string;
}

export type StyleId = 'urban_casual' | 'neo_classic' | 'artistic_y2k';

export interface StyleOption {
  id: StyleId;
  name: string;
  tagline: string;
  description: string;
  paletteCues: string[];
}

export interface WardrobeUserItem {
  id: string;
  name: string;
  category: 'top' | 'bottom' | 'footwear' | 'outerwear' | 'accessory';
  isUploaded?: boolean;
}

export interface StylingStudioState {
  occasionId: OccasionId;
  garmentId: GarmentId;
  styleId: StyleId;
  wardrobeText: string;
  wardrobeItems: WardrobeUserItem[];
  traditionBalance: number; // 1 (rất hiện đại) đến 5 (thuần cổ phục)
  preferredColorTone: string;
  includeAccessories: boolean;
  notes: string;
}

export interface OutfitItemDetail {
  id: string;
  name: string;
  category: 'Việt phục chính' | 'Quần' | 'Footwear' | 'Phụ kiện' | 'Lớp trong / Khoác ngoài';
  source: 'owned' | 'to_prepare';
  note: string;
  materialOrBrand?: string;
}

export interface CulturalData {
  garmentName: string;
  origin: string;
  era: string;
  keyFeatures: string[];
  significance: string;
  verifiedStatus: 'verified' | 'pending_verification';
  disclaimer: string;
}

export interface ShopSuggestionItem {
  id: string;
  name: string;
  serviceType: 'Mua mới' | 'Thuê trang phục' | 'May đo truyền thống';
  region: string;
  priceRange: string;
  note: string;
}

export interface OutfitLook {
  id: string;
  lookNumber: '01' | '02' | '03';
  title: string;
  styleName: string;
  occasionName: string;
  summary: string;
  editorialBoardImage: string;
  palette: { name: string; hex: string }[];
  focalGarment: string;
  items: OutfitItemDetail[];
  whyThisLook: {
    occasionFit: string;
    styleFit: string;
    wardrobeFit: string;
  };
  culturalContext: CulturalData;
  dosAndDonts: {
    dos: string[];
    donts: string[];
  };
  shopSuggestions: ShopSuggestionItem[];
  conceptImageCaption: string;
  refinementState?: {
    traditionLevel: 'standard' | 'more_traditional' | 'more_contemporary';
    colorVariant: string;
    footwearVariant: string;
  };
}
