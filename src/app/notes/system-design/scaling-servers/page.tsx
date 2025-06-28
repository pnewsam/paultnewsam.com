import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";
import { Card } from "@/components/ui/card";

import {
  EC2Instance,
  LoadBalancer,
  RDSInstance,
  RedisInstance,
  S3Bucket,
} from "./_components/AwsResources";

export default function ScalingServersPage() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader title="Scaling Servers" tags={["Performance"]} />
        <Body>A note on scaling servers.</Body>
        <LoadBalancer size="small" />
        <EC2Instance size="medium" />
        <EC2Instance size="small" />
        <RedisInstance size="small" />
        <RDSInstance size="medium" />
        <S3Bucket size="small" />

        <Card>
          <table className="w-full text-left text-lg">
            <caption className="text-lg font-medium p-4 bg-neutral-100 dark:bg-neutral-800 border-b">
              Infrastructure for Blog/Content Site
            </caption>
            <thead className="bg-neutral-100 dark:bg-neutral-800">
              <tr>
                <th className="p-4 font-medium border-b border-neutral-200">
                  Size
                </th>
                <th className="p-4 font-medium border-b border-neutral-200">
                  Infrastructure
                </th>
                <th className="p-4 font-medium border-b border-neutral-200">
                  Metrics
                  <br />
                  (DAUs, MAUs, Traffic)
                </th>
                <th className="p-4 font-medium border-b border-neutral-200">
                  Example Architecture
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4">Small</td>
                <td className="p-4">
                  <ul className="list-disc ml-4">
                    <li>1x t3.micro for hosting</li>
                    <li>1x S3 bucket for static assets</li>
                    <li>Cloudflare for CDN</li>
                  </ul>
                </td>
                <td className="p-4">
                  ~500 DAUs / ~2,500 MAUs <br />
                  ~10k monthly visits
                </td>
                <td className="p-4">
                  <svg className="w-32 h-16 mx-auto">
                    <rect
                      x="0"
                      y="0"
                      width="100"
                      height="30"
                      className="fill-blue-400"
                    />
                    <text
                      x="50"
                      y="20"
                      text-anchor="middle"
                      className="fill-white"
                    >
                      t3.micro
                    </text>
                  </svg>
                  <p className="text-center text-sm mt-2">1 server + CDN</p>
                </td>
              </tr>
              <tr>
                <td className="p-4">Medium</td>
                <td className="p-4">
                  <ul className="list-disc ml-4">
                    <li>2x t3.medium for hosting</li>
                    <li>1x RDS (db.t3.medium) for database</li>
                    <li>1x S3 bucket for assets</li>
                    <li>Cloudflare for CDN</li>
                  </ul>
                </td>
                <td className="p-4">
                  ~10k DAUs / ~50k MAUs <br />
                  ~500k monthly visits
                </td>
                <td className="p-4">
                  <svg className="w-48 h-32 mx-auto">
                    <rect
                      x="10"
                      y="0"
                      width="100"
                      height="30"
                      className="fill-blue-400"
                    />
                    <text
                      x="60"
                      y="20"
                      text-anchor="middle"
                      className="fill-white"
                    >
                      t3.medium
                    </text>
                    <rect
                      x="10"
                      y="40"
                      width="100"
                      height="30"
                      className="fill-blue-400"
                    />
                    <text
                      x="60"
                      y="60"
                      text-anchor="middle"
                      className="fill-white"
                    >
                      t3.medium
                    </text>
                    <rect
                      x="10"
                      y="80"
                      width="100"
                      height="30"
                      className="fill-green-400"
                    />
                    <text
                      x="60"
                      y="100"
                      text-anchor="middle"
                      className="fill-white"
                    >
                      db.t3.medium
                    </text>
                  </svg>
                  <p className="text-center text-sm mt-2">2x hosting + 1x DB</p>
                </td>
              </tr>
              <tr>
                <td className="p-4">Large</td>
                <td className="p-4">
                  <ul className="list-disc ml-4">
                    <li>Autoscaling group of m5.large for web</li>
                    <li>1x RDS (db.m5.large) for database</li>
                    <li>Redis cluster (3x r5.large) for caching</li>
                    <li>1x S3 bucket + CloudFront</li>
                  </ul>
                </td>
                <td className="p-4">
                  ~100k DAUs / ~1M MAUs <br />
                  ~20M monthly visits
                </td>
                <td className="p-4">
                  <svg className="w-64 h-48 mx-auto">
                    <rect
                      x="10"
                      y="0"
                      width="100"
                      height="30"
                      className="fill-blue-400"
                    />
                    <text
                      x="60"
                      y="20"
                      text-anchor="middle"
                      className="fill-white"
                    >
                      m5.large
                    </text>
                    <rect
                      x="10"
                      y="40"
                      width="100"
                      height="30"
                      className="fill-green-400"
                    />
                    <text
                      x="60"
                      y="60"
                      text-anchor="middle"
                      className="fill-white"
                    >
                      db.m5.large
                    </text>
                    <rect
                      x="10"
                      y="80"
                      width="100"
                      height="30"
                      className="fill-yellow-400"
                    />
                    <text
                      x="60"
                      y="100"
                      text-anchor="middle"
                      className="fill-black"
                    >
                      Redis
                    </text>
                  </svg>
                  <p className="text-center text-sm mt-2">
                    Auto-scale + DB + Cache
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
    </Container>
  );
}
