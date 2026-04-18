import { Product, getMissingAttributes } from "@/data/products";
import { ScoreBadge } from "./ScoreBadge";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductTableProps {
  products: Product[];
  emptyText?: string;
  highlightFlagged?: boolean;
}

function formatAttrName(key: string) {
  return key.replace(/_/g, " ");
}

export function ProductTable({ products, emptyText = "No products found.", highlightFlagged }: ProductTableProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-card/50 p-10 text-center text-sm text-muted-foreground">
        {emptyText}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40 text-left">
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">ID</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Product</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Category</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Description</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Missing Attributes</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Quality</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => {
              const missing = getMissingAttributes(p);
              const isFlagged = p.information_score < 2;
              return (
                <tr
                  key={p.id}
                  className={cn(
                    "border-b border-border/60 last:border-0 transition-colors hover:bg-muted/30",
                    highlightFlagged && isFlagged && "bg-danger-soft/30",
                  )}
                >
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">#{p.id}</td>
                  <td className="px-4 py-3 font-medium text-foreground">{p.name}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex rounded-md bg-secondary px-2 py-0.5 text-xs font-medium capitalize text-secondary-foreground">
                      {p.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 max-w-md text-muted-foreground">
                    <p className="line-clamp-2">{p.description}</p>
                  </td>
                  <td className="px-4 py-3">
                    {missing.length === 0 ? (
                      <span className="text-xs text-muted-foreground">—</span>
                    ) : (
                      <div className="flex flex-wrap items-center gap-1">
                        {missing.map((m) => (
                          <span
                            key={m}
                            className="inline-flex items-center gap-1 rounded-md bg-danger-soft px-1.5 py-0.5 text-xs font-medium text-danger ring-1 ring-inset ring-danger/20"
                          >
                            <AlertCircle className="h-3 w-3" />
                            {formatAttrName(m)}
                          </span>
                        ))}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <ScoreBadge score={p.information_score} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
