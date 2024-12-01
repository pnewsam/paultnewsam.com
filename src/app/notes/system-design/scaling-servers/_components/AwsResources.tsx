import React from "react";

// Base Component for infrastructure elements
const InfrastructureComponent = ({
  name,
  size,
  color,
}: {
  name: string;
  size: number;
  color: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      className="inline-block mx-2 my-2"
      viewBox={`0 0 ${size} ${size}`}
    >
      <rect width={size} height={size} fill={color} />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="fill-white"
        fontSize={size * 0.25}
      >
        {name}
      </text>
    </svg>
  );
};

// EC2 Instance
export const EC2Instance = ({ size }: { size: string }) => {
  const dimension = getDimension(size);
  return (
    <InfrastructureComponent
      name={`EC2 ${size}`}
      size={dimension}
      color="#4f46e5" // Blue
    />
  );
};

// RDS Instance
export const RDSInstance = ({ size }: { size: string }) => {
  const dimension = getDimension(size);
  return (
    <InfrastructureComponent
      name={`RDS ${size}`}
      size={dimension}
      color="#10b981" // Green
    />
  );
};

// Redis Component
export const RedisInstance = ({ size }: { size: string }) => {
  const dimension = getDimension(size);
  return (
    <InfrastructureComponent
      name={`Redis ${size}`}
      size={dimension}
      color="#f59e0b" // Yellow
    />
  );
};

// Load Balancer
export const LoadBalancer = ({ size }: { size: string }) => {
  const dimension = getDimension(size);
  return (
    <InfrastructureComponent
      name="LB"
      size={dimension}
      color="#6b7280" // Gray
    />
  );
};

// S3 Bucket
export const S3Bucket = ({ size }: { size: string }) => {
  const dimension = getDimension(size);
  return (
    <InfrastructureComponent
      name="S3"
      size={dimension}
      color="#3b82f6" // Light Blue
    />
  );
};

// Utility function to determine dimensions
const getDimension = (size: string): number => {
  switch (size) {
    case "micro":
      return 50; // Smallest square
    case "small":
      return 70;
    case "medium":
      return 90;
    case "large":
      return 110;
    case "xlarge":
      return 130;
    case "2xlarge":
      return 150; // Largest square
    default:
      return 70; // Default to 'small'
  }
};
