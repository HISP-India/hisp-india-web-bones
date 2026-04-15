

# Plan: Restore Header and Footer to Layout

**What**: Add the existing `Header` and `Footer` components back into the `Layout` component so they appear on every page.

**File: `src/components/Layout.tsx`**

- Import `Header` from `@/components/Header`
- Import `Footer` from `@/components/Footer`
- Render `<Header />` above `<main>` and `<Footer />` below it

```tsx
import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
```

This is a single-file change. Both components already exist and are fully built.

