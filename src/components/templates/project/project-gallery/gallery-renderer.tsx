import { CESDragDemo, KlausDragDemo, ArceSwipeDemo } from "./gallery-blocks";

export function renderGalleryBlock(block: string) {
  switch (block) {
    case "ces-drag-demo":
      return <CESDragDemo />;

    case "klaus-drag-demo":
      return <KlausDragDemo />;

    case "arce-swipe-demo":
      return <ArceSwipeDemo />;

    default:
      return null;
  }
}
