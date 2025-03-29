import { useEffect } from "react";

import initializers from "../_scripts/initializers";
import { setupCanvas } from "../_scripts/setupCanvas";

export function Canvas() {
  useEffect(() => {
    const canvas = setupCanvas();
    if (canvas) {
      initializers.addMouseListeners(canvas);
      initializers.addResizeListeners(canvas);
      initializers.addScrollListeners(canvas);
    }
  }, []);

  return <canvas className="block h-[600px] w-full max-w-100vw" />;
}
