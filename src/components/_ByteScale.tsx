// Linear scale for bytes
export const byteScale = (value: number) => {
  const minDimension = 8; // Minimum width/height
  const maxDimension = 128; // Maximum width/height
  const maxValue = Math.log10(1_000_000); // Maximum value (1 MB)
  const scaledValue = Math.log10(value) / maxValue; // Normalize log value
  return minDimension + scaledValue * (maxDimension - minDimension);
};

// Byte Components
export const OneByte = ({ size }: { size?: number }) => {
  if (!size) {
    size = byteScale(1);
  }
  return (
    <svg height={size} width={size}>
      <rect className="fill-rose-400" width={size} height={size} />
    </svg>
  );
};

export const OneHundredBytes = ({ size }: { size?: number }) => {
  if (!size) {
    size = byteScale(100);
  }
  return (
    <svg height={size} width={size}>
      <rect className="fill-fuchsia-400" width={size} height={size} />
    </svg>
  );
};

export const OneKilobyte = ({ size }: { size?: number }) => {
  if (!size) {
    size = byteScale(1_000);
  }
  return (
    <svg height={size} width={size}>
      <rect className="fill-violet-400" width={size} height={size} />
    </svg>
  );
};

export const TenKilobytes = ({ size }: { size?: number }) => {
  if (!size) {
    size = byteScale(10_000);
  }
  return (
    <svg height={size} width={size}>
      <rect className="fill-blue-400" width={size} height={size} />
    </svg>
  );
};

export const OneHundredKilobytes = ({ size }: { size?: number }) => {
  if (!size) {
    size = byteScale(100_000);
  }
  return (
    <svg height={size} width={size}>
      <rect className="fill-cyan-400" width={size} height={size} />
    </svg>
  );
};

export const OneMegabyte = ({ size }: { size?: number }) => {
  if (!size) {
    size = byteScale(1_000_000);
  }
  return (
    <svg height={size} width={size}>
      <rect className="fill-emerald-400" width={size} height={size} />
    </svg>
  );
};
