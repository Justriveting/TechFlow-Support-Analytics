export type Category = "electronics" | "grocery";

export interface Product {
  id: number;
  name: string;
  category: Category;
  description: string;
  attributes: Record<string, boolean | number | null>;
  information_score: number;
  created_at: string;
  updated_at: string;
}

export const products: Product[] = [
  { id: 1, name: "Where Smartwatch", category: "electronics", description: "Seek north bar store season technology college choose. When smile effect wear over. Pretty important clearly this city.", attributes: { battery_life_hours: null }, information_score: 1, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 2, name: "Human Smartwatch", category: "electronics", description: "Commercial half management. Lead art something blood early. Yet eye success western knowledge talk usually each.", attributes: { battery_life_hours: 43 }, information_score: 2, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 3, name: "Wind Smartwatch", category: "electronics", description: "Institution likely near top ten. Maintain lead expect last doctor really finally. Give same partner article second.", attributes: { battery_life_hours: 24 }, information_score: 2, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 4, name: "Sing Smartwatch", category: "electronics", description: "Way option those meeting threat. Teach move popular country outside law. None fly card nice develop close.", attributes: { battery_life_hours: 15 }, information_score: 2, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 5, name: "Again Smartwatch", category: "electronics", description: "Possible open here something north protect between. Newspaper finish almost college cause almost camera.", attributes: { battery_life_hours: 12 }, information_score: 2, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 6, name: "Scientist Smartwatch", category: "electronics", description: "Use economy financial policy. Data because subject magazine letter letter. Owner throw right number guess grow degree.", attributes: { battery_life_hours: 51 }, information_score: 2, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 7, name: "Agent Smartwatch", category: "electronics", description: "Stock about book. Material let part though. Gun president each establish resource choice will matter.", attributes: { battery_life_hours: null }, information_score: 1, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 8, name: "Check Smartwatch", category: "electronics", description: "Something similar team speech they eight. Give wish similar image suggest represent miss.", attributes: { battery_life_hours: 47 }, information_score: 2, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 9, name: "Cost Smartwatch", category: "electronics", description: "Teach beautiful walk why. Follow national sure certain. Under drug land dinner rich within huge.", attributes: { battery_life_hours: 33 }, information_score: 2, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 10, name: "Those Smartwatch", category: "electronics", description: "Keep herself beyond work technology. Subject green each garden newspaper. Special very notice know.", attributes: { battery_life_hours: null }, information_score: 1, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 11, name: "Garden", category: "grocery", description: "Particular cold environmental treat radio crime name establish.", attributes: { is_gluten_free: null, is_high_fiber: null }, information_score: 0, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 12, name: "Represent", category: "grocery", description: "Himself page describe better guess shake why capital.  High in fiber.", attributes: { is_gluten_free: null, is_high_fiber: true }, information_score: 1, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 13, name: "What", category: "grocery", description: "Girl institution Mr computer part project try.", attributes: { is_gluten_free: null, is_high_fiber: null }, information_score: 0, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 14, name: "Note", category: "grocery", description: "Produce fire enter return tough front family friend little magazine conference PM.", attributes: { is_gluten_free: null, is_high_fiber: null }, information_score: 1, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 15, name: "Nation", category: "grocery", description: "Compare dinner human plan fall ten.  High in fiber.", attributes: { is_gluten_free: null, is_high_fiber: true }, information_score: 1, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 16, name: "Group", category: "grocery", description: "Main not option still design answer table thought site heavy science reason amount.  High in fiber.", attributes: { is_gluten_free: null, is_high_fiber: true }, information_score: 2, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 17, name: "Law", category: "grocery", description: "Political arm firm rather four stop should argue buy.", attributes: { is_gluten_free: null, is_high_fiber: null }, information_score: 0, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 18, name: "Amount", category: "grocery", description: "Since grow including anything open few expect.  High in fiber.", attributes: { is_gluten_free: null, is_high_fiber: true }, information_score: 1, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 19, name: "Never", category: "grocery", description: "Keep would professional responsibility bit indeed push guess.", attributes: { is_gluten_free: null, is_high_fiber: null }, information_score: 0, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 20, name: "Worker", category: "grocery", description: "Analysis too product card threat would matter ever fall lawyer score game speak brother.  High in fiber.", attributes: { is_gluten_free: null, is_high_fiber: true }, information_score: 2, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 21, name: "Choice", category: "grocery", description: "Field room lot practice someone everyone seat national.  High in fiber.", attributes: { is_gluten_free: null, is_high_fiber: true }, information_score: 1, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 22, name: "Reveal", category: "grocery", description: "So me down bar top administration less former loss feel collection end.", attributes: { is_gluten_free: null, is_high_fiber: null }, information_score: 0, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 23, name: "Late", category: "grocery", description: "Left behind top give sense wife long.  High in fiber.", attributes: { is_gluten_free: null, is_high_fiber: true }, information_score: 1, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 24, name: "His", category: "grocery", description: "Follow feel include card street special course no bed despite big give.  Gluten-free.", attributes: { is_gluten_free: true, is_high_fiber: null }, information_score: 2, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
  { id: 25, name: "Major", category: "grocery", description: "Among similar among protect kitchen young ok I respond article development hour.  Gluten-free.", attributes: { is_gluten_free: true, is_high_fiber: null }, information_score: 2, created_at: "2026-04-16 02:42:26", updated_at: "2026-04-16 02:42:26" },
];

export function getMissingAttributes(p: Product): string[] {
  return Object.entries(p.attributes)
    .filter(([, v]) => v === null || v === undefined)
    .map(([k]) => k);
}

export function scoreLabel(score: number): { label: string; tone: "complete" | "partial" | "missing" } {
  if (score >= 2) return { label: "Complete", tone: "complete" };
  if (score === 1) return { label: "Partial", tone: "partial" };
  return { label: "Missing", tone: "missing" };
}
