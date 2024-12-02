export const logScale = (value: number) => {
  const minDimension = 8; // Minimum width/height
  const maxDimension = 128; // Maximum width/height
  const maxValue = Math.log10(150_000_000); // Maximum value (150 million ns)
  const scaledValue = Math.log10(value) / maxValue; // Normalize log value
  return minDimension + scaledValue * (maxDimension - minDimension);
};

// Components
export const HalfNanosecond = ({ size }: { size?: number }) => {
  if (!size) {
    size = logScale(0.5);
  }
  return (
    <svg height={size} width={size}>
      <rect className="fill-rose-400" width={size} height={size} />
    </svg>
  );
};

export const Nanosecond = ({ size }: { size?: number }) => {
  if (!size) {
    size = logScale(1);
  }
  return (
    <svg height={size} width={size}>
      <rect className="fill-fuchsia-400" width={size} height={size} />
    </svg>
  );
};

export const HundredNanoseconds = ({ size }: { size?: number }) => {
  if (!size) {
    size = logScale(100);
  }
  return (
    <svg height={size} width={size}>
      <rect className="fill-violet-400" width={size} height={size} />
    </svg>
  );
};

export const ThousandNanoseconds = ({ size }: { size?: number }) => {
  if (!size) {
    size = logScale(1_000);
  }
  return (
    <svg height={size} width={size}>
      <rect className="fill-blue-400" width={size} height={size} />
    </svg>
  );
};

export const TenThousandNanoseconds = ({ size }: { size?: number }) => {
  if (!size) {
    size = logScale(10_000);
  }
  return (
    <svg height={size} width={size}>
      <rect className="fill-cyan-400" width={size} height={size} />
    </svg>
  );
};

export const OneMillionNanoseconds = ({ size }: { size?: number }) => {
  if (!size) {
    size = logScale(1_000_000);
  }
  return (
    <svg height={size} width={size} className="inline-block">
      <rect className="fill-emerald-400" width={size} height={size} />
    </svg>
  );
};

export const TenMillionNanoseconds = ({ size }: { size?: number }) => {
  if (!size) {
    size = logScale(10_000_000);
  }
  return (
    <svg height={size} width={size} className="inline-block">
      <rect className="fill-lime-400" width={size} height={size} />
    </svg>
  );
};

export const OneHundredFiftyMillionNanoseconds = ({
  size,
}: {
  size?: number;
}) => {
  if (!size) {
    size = logScale(150_000_000);
  }
  return (
    <svg height={size} width={size} className="inline-block">
      <rect className="fill-amber-400" width={size} height={size} />
    </svg>
  );
};
