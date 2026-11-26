import { MotionConfig } from 'motion/react';
import { useState } from 'react';
import { Loader, Nav } from './components/Chrome';
import { useSmoothScroll } from './components/ui';
import { Hero, Workspace, Stack } from './sections/Top';
import { Products, Questions, Benefits } from './sections/Middle';
import { Cases, Plans, FAQ, Closing } from './sections/Bottom';

export default function App() {
  const [ready, setReady] = useState(false);
  useSmoothScroll();
  return (
    <MotionConfig reducedMotion="user">
      <Loader onDone={() => setReady(true)} />
      <Nav ready={ready} />
      <main>
        <Hero ready={ready} />
        <Workspace />
        <Stack />
        <Products />
        <Questions />
        <Benefits />
        <Cases />
        <Plans />
        <FAQ />
        <Closing />
      </main>
    </MotionConfig>
  );
}
