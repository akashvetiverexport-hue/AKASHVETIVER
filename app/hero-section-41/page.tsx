import HeroSection from "@/components/shadcn-studio/blocks/hero-section-41/hero-section-41"

// Standalone composition example. Vite mounts this block in the existing
// homepage's #products island; this is not a replacement site hero/header.
export default function ProductShowcaseExample() {
  return <section className="vettiver-react product-showcase section"><HeroSection /></section>
}
