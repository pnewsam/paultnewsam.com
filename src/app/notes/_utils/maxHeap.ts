function MaxHeap() {
  function build(heap: number[]) {
    const len = heap.length;

    // Start at the penultimate level.
    for (let i = Math.floor(len / 2); i >= 0; i--) {
      siftUp(heap, i);
    }
  }

  function siftUp(heap: number[], index: number) {
    let max = index;

    // Left and Right child nodes are located at 2x+1 and 2x+2
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    // Find the lesser of Left and Right, and assign it to max
    if (left < heap.length && heap[left] > heap[max]) {
      max = left;
    }
    if (right < heap.length && heap[right] > heap[max]) {
      max = right;
    }

    // If max has been assigned, swap it with the Parent
    if (max !== index) {
      const stash = heap[index];
      heap[index] = heap[max];
      heap[max] = stash;
      siftUp(heap, max);
    }
  }

  return {
    build,
    siftUp,
  };
}
