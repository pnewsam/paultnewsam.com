import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import {
  HalfNanosecond,
  HundredNanoseconds,
  Nanosecond,
  OneHundredFiftyMillionNanoseconds,
  OneMillionNanoseconds,
  TenMillionNanoseconds,
  TenThousandNanoseconds,
  ThousandNanoseconds,
} from "@/components/_TimeScale";
import { Body } from "@/components/typography/Body";
import { Bold } from "@/components/typography/Bold";
import { H2 } from "@/components/typography/H2";
import { Card } from "@/components/ui/card";

import { BlogPageHeader } from "../_components/BlogPageHeader";
import { DataTypeSizesTable } from "./_DataTypeSizesTable";

export default function BackOfTheEnvelopeVisualsPage() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <BlogPageHeader slug="visualizing-back-of-the-envelope-numbers" />
        <Body>
          It can be difficult developing a intuition for the numbers thrown
          around in system design interviews. For my own sake, I thought
          I&apos;d try to visualize them.
        </Body>

        <H2>Data Type Sizes</H2>
        <Body>
          First, a table of data type sizes. These are Postgres data types, but
          they should be similar for other systems. The squares are scaled in
          size logarithmically, which means that the differences are really much
          bigger than they seem here.
        </Body>
        <DataTypeSizesTable />

        <H2 className="mt-20">Time Scales</H2>
        <Body>
          Second, this is a table of time scales. Some quick comparisons:
          it&apos;s <Bold>160x faster</Bold> to read from RAM than do a random
          read from SSD. It&apos;s <Bold>4x faster</Bold> to read 1MB
          sequentially from RAM than to do the same from SSD. Squares are scaled
          in size logarithmically.
        </Body>

        <Card className="overflow-x-auto">
          <table className="w-full text-lg">
            <thead className="text-left border-b bg-neutral-100 dark:bg-neutral-800">
              <tr>
                <th className="p-4 font-medium">Operation</th>
                <th className="p-4 font-medium">Time</th>
                <th className="p-4 font-medium">Visualization</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4">
                  L1 Cache Reference
                  <br />
                  <span className="text-sm/snug text-neutral-500">
                    Fetching a hot variable in a running JavaScript function.
                  </span>
                </td>{" "}
                <td className="p-4">0.5 ns</td>
                <td className="p-4">
                  <HalfNanosecond />
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  L2 Cache Reference
                  <br />
                  <span className="text-sm text-neutral-500">
                    Accessing slightly less frequent in-memory data.
                  </span>
                </td>{" "}
                <td className="p-4">7 ns</td>
                <td className="p-4">
                  <div className="inline-flex gap-1 flex-wrap">
                    {Array.from({ length: 14 }).map((_, index) => (
                      <HalfNanosecond key={index} />
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  L3 Cache Reference
                  <br />
                  <span className="text-sm text-neutral-500">
                    Resolving reused middleware configurations in Node.js.
                  </span>
                </td>{" "}
                <td className="p-4">20-30 ns</td>
                <td className="p-4">
                  <div className="inline-flex gap-1 flex-wrap">
                    {Array.from({ length: 25 }).map((_, index) => (
                      <Nanosecond key={index} />
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  Main Memory Reference
                  <br />
                  <span className="text-sm text-neutral-500">
                    Fetching data from a Redis cache stored in RAM.
                  </span>
                </td>{" "}
                <td className="p-4">100 ns</td>
                <td className="p-4">
                  <div className="inline-flex gap-1 flex-wrap">
                    {Array.from({ length: 100 }).map((_, index) => (
                      <Nanosecond key={index} />
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  Compress 1KB of Data in Memory
                  <br />
                  <span className="text-sm text-neutral-500">
                    Gzip compressing an HTTP response in Express.js.
                  </span>
                </td>{" "}
                <td className="p-4">3,000 ns</td>
                <td className="p-4">
                  <div className="inline-flex gap-1 flex-wrap">
                    {Array.from({ length: 30 }).map((_, index) => (
                      <HundredNanoseconds key={index} />
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  Send 1KB over 1 Gbps Network
                  <br />
                  <span className="text-sm text-neutral-500">
                    Sending a small JSON response over the network.
                  </span>
                </td>{" "}
                <td className="p-4">10,000 ns</td>
                <td className="p-4">
                  <div className="inline-flex gap-1 flex-wrap">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <ThousandNanoseconds key={index} />
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  SSD Random Read
                  <br />
                  <span className="text-sm text-neutral-500">
                    Querying a session ID from persistent Redis storage.
                  </span>
                </td>{" "}
                <td className="p-4">16,000 ns</td>
                <td className="p-4">
                  <div className="inline-flex gap-1 flex-wrap">
                    {Array.from({ length: 16 }).map((_, index) => (
                      <ThousandNanoseconds key={index} />
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  Read 1MB Sequentially from Memory
                  <br />
                  <span className="text-sm text-neutral-500">
                    Iterating through a large in-memory buffer of user data.
                  </span>
                </td>{" "}
                <td className="p-4">250,000 ns</td>
                <td className="p-4">
                  <div className="inline-flex gap-1 flex-wrap">
                    {Array.from({ length: 25 }).map((_, index) => (
                      <TenThousandNanoseconds key={index} />
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  Read 1MB Sequentially from SSD
                  <br />
                  <span className="text-sm text-neutral-500">
                    Retrieving a 1MB file stored on disk for a static site.
                  </span>
                </td>{" "}
                <td className="p-4">1,000,000 ns</td>
                <td className="p-4">
                  <OneMillionNanoseconds />
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  Disk Seek
                  <br />
                  <span className="text-sm text-neutral-500">
                    Accessing a log file stored on a spinning disk.
                  </span>
                </td>{" "}
                <td className="p-4">10,000,000 ns</td>
                <td className="p-4">
                  <div className="inline-flex gap-1 flex-wrap">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <OneMillionNanoseconds key={index} />
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  Send Packet US to Europe and Back
                  <br />
                  <span className="text-sm text-neutral-500">
                    Calling an API hosted in a European data center.
                  </span>
                </td>{" "}
                <td className="p-4">150,000,000 ns</td>
                <td className="p-4">
                  <div className="inline-flex gap-1 flex-wrap">
                    {Array.from({ length: 15 }).map((_, index) => (
                      <TenMillionNanoseconds key={index} />
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot className="text-lg font-medium p-4 bg-neutral-100 dark:bg-neutral-800 border-t">
              <tr>
                <td colSpan={3} className="p-4">
                  <span className="font-medium">Legend:</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-4 mt-2">
                    <div className="inline-flex items-center">
                      <HalfNanosecond size={16} />
                      <span className="ml-2">0.5 ns</span>
                    </div>
                    <div className="inline-flex items-center">
                      <Nanosecond size={16} />
                      <span className="ml-2">1 ns</span>
                    </div>
                    <div className="inline-flex items-center">
                      <HundredNanoseconds size={16} />
                      <span className="ml-2">100 ns</span>
                    </div>
                    <div className="inline-flex items-center">
                      <ThousandNanoseconds size={16} />
                      <span className="ml-2">1,000 ns</span>
                    </div>
                    <div className="inline-flex items-center">
                      <TenThousandNanoseconds size={16} />
                      <span className="ml-2">10,000 ns</span>
                    </div>
                    <div className="inline-flex items-center">
                      <OneMillionNanoseconds size={16} />
                      <span className="ml-2">1,000,000 ns</span>
                    </div>
                    <div className="inline-flex items-center">
                      <TenMillionNanoseconds size={16} />
                      <span className="ml-2">10,000,000 ns</span>
                    </div>
                    <div className="inline-flex items-center">
                      <OneHundredFiftyMillionNanoseconds size={16} />
                      <span className="ml-2">150,000,000 ns</span>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </Card>
      </section>
    </Container>
  );
}
