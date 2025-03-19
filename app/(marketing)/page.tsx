import { AuroraBackground } from "@/components/ui/aurora-background";
import AnimatedContent from "@/components/animated-content";

export default function HomePage() {
  return (
    <AuroraBackground>
      <AnimatedContent 
        heading="Welcome to Notes App"
        subheading="Organize your thoughts beautifully"
        buttonText="Start Writing"
        buttonHref="/notes"
      />
    </AuroraBackground>
  );
}
