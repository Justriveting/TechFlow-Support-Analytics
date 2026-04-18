import { useMemo, useState } from "react";
import { Package, Cpu, ShoppingBasket, Gauge, AlertTriangle, BarChart3 } from "lucide-react";
import { products as allProducts } from "@/data/products";
import { StatCard } from "@/components/dashboard/StatCard";
import { ProductTable } from "@/components/dashboard/ProductTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CategoryFilter = "all" | "electronics" | "grocery";

const Index = () => {
  const [category, setCategory] = useState<CategoryFilter>("all");

  const totals = useMemo(() => {
    const total = allProducts.length;
    const electronics = allProducts.filter((p) => p.category === "electronics").length;
    const grocery = allProducts.filter((p) => p.category === "grocery").length;
    const flagged = allProducts.filter((p) => p.information_score < 2).length;
    const avg =
      allProducts.reduce((sum, p) => sum + p.information_score, 0) / (total || 1);
    return { total, electronics, grocery, flagged, avg };
  }, []);

  const filtered = useMemo(
    () => (category === "all" ? allProducts : allProducts.filter((p) => p.category === category)),
    [category],
  );

  const flaggedProducts = useMemo(
    () => filtered.filter((p) => p.information_score < 2).sort((a, b) => a.information_score - b.information_score),
    [filtered],
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-xl font-semibold tracking-tight text-foreground">
                  Product Information Quality Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">
                  Monitor catalog completeness across categories and surface gaps
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Last updated</p>
              <p className="text-sm font-medium text-foreground">Apr 16, 2026</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 space-y-8">
        {/* Stat cards */}
        <section>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <StatCard label="Total Products" value={totals.total} icon={Package} tone="primary" />
            <StatCard label="Electronics" value={totals.electronics} icon={Cpu} tone="default" />
            <StatCard label="Grocery" value={totals.grocery} icon={ShoppingBasket} tone="default" />
            <StatCard
              label="Avg Info Score"
              value={totals.avg.toFixed(2)}
              icon={Gauge}
              tone="success"
              hint="Scale 0–2"
            />
            <StatCard
              label="Flagged Products"
              value={totals.flagged}
              icon={AlertTriangle}
              tone="danger"
              hint="Score below 2"
            />
          </div>
        </section>

        {/* Filter + All products */}
        <section className="space-y-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">All Products</h2>
              <p className="text-sm text-muted-foreground">
                Showing {filtered.length} of {totals.total} products
              </p>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="category" className="text-sm font-medium text-muted-foreground">
                Category
              </label>
              <Select value={category} onValueChange={(v) => setCategory(v as CategoryFilter)}>
                <SelectTrigger id="category" className="w-44 bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All categories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="grocery">Grocery</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <ProductTable products={filtered} highlightFlagged />
        </section>

        {/* Flagged products */}
        <section className="space-y-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                Flagged Products
              </h2>
              <p className="text-sm text-muted-foreground">
                Items with an information score below 2 — require enrichment
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-md bg-danger-soft px-3 py-1.5 text-sm font-medium text-danger ring-1 ring-inset ring-danger/20">
              <AlertTriangle className="h-4 w-4" />
              {flaggedProducts.length} flagged
            </span>
          </div>
          <ProductTable
            products={flaggedProducts}
            emptyText="No flagged products in this view. Catalog quality is on target."
          />
        </section>

        <footer className="pt-4 text-center text-xs text-muted-foreground">
          Product Information Quality Dashboard · {totals.total} records analyzed
        </footer>
      </main>
    </div>
  );
};

export default Index;
