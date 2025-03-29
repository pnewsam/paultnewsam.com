import { Table } from "@/components/Table";
import {
  OneByte,
  OneHundredBytes,
  OneHundredKilobytes,
  OneKilobyte,
  OneMegabyte,
  TenKilobytes,
} from "@/components/_ByteScale";
import { Code } from "@/components/typography/Code";

export function DataTypeSizesTable({ className }: { className?: string }) {
  return (
    <Table className={className}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Postgres Data Types</th>
          <th>Size</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody className="text-base">
        <tr>
          <td>Integer</td>
          <td>
            <ul className="list-disc list-inside">
              <li>
                <Code size="xs">SMALLINT</Code>: 2 bytes
              </li>
              <li>
                <Code size="xs">INTEGER</Code>: 4 bytes
              </li>
              <li>
                <Code size="xs">BIGINT</Code>: 8 bytes
              </li>
            </ul>
          </td>
          <td>
            <div className="flex flex-col gap-1">
              <div className="inline-flex items-center gap-1">
                <OneByte /> <span>2 bytes</span>
              </div>
              <div className="inline-flex items-center gap-1">
                <OneByte /> <OneByte />
                <span>4 bytes</span>
              </div>
              <div className="inline-flex items-center gap-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <OneByte key={i} />
                ))}
                <span>8 bytes</span>
              </div>
            </div>
          </td>
          <td>
            Used for numeric fields, IDs, and counters. Larger sizes support
            larger ranges.
          </td>
        </tr>
        <tr>
          <td>Floating Point</td>
          <td>
            <ul className="list-disc list-inside">
              <li>
                <Code size="xs">REAL</Code>: 4 bytes
              </li>
              <li>
                <Code size="xs">DOUBLE PRECISION</Code>: 8 bytes
              </li>
            </ul>
          </td>
          <td>
            <div className="flex flex-col gap-1">
              <div className="inline-flex items-center gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <OneByte key={i} />
                ))}
                <span>4 bytes</span>
              </div>
              <div className="inline-flex items-center gap-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <OneByte key={i} />
                ))}
                <span>8 bytes</span>
              </div>
            </div>
          </td>
          <td>Used for scientific calculations or approximate values.</td>
        </tr>
        <tr>
          <td>Timestamp</td>
          <td>
            <ul className="list-disc list-inside">
              <li>
                <Code size="xs">TIMESTAMP</Code>: Without timezone
              </li>
              <li>
                <Code size="xs">TIMESTAMPTZ</Code>: With timezone
              </li>
            </ul>
          </td>
          <td>
            <div className="inline-flex items-center gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <OneByte key={i} />
              ))}
              <span>8 bytes</span>
            </div>
          </td>
          <td>
            Used for date and time fields, with or without timezone information.
          </td>
        </tr>
        <tr>
          <td>UUID</td>
          <td>
            <ul className="list-disc list-inside">
              <li>
                <Code size="xs">UUID</Code>: 16 bytes
              </li>
            </ul>
          </td>
          <td>
            <div className="inline-flex flex-wrap items-center gap-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <OneByte key={i} />
              ))}
              <span>16 bytes</span>
            </div>
          </td>
          <td>Universally unique identifiers for distributed systems.</td>
        </tr>
        <tr>
          <td>Enum</td>
          <td>
            <ul className="list-disc list-inside">
              <li>
                <Code size="xs">ENUM</Code>: 1-4 bytes
              </li>
            </ul>
          </td>
          <td>
            <div className="flex flex-col gap-1">
              <div className="inline-flex items-center gap-1">
                <OneByte /> <span>1 byte</span>
              </div>
              <div className="inline-flex items-center gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <OneByte key={i} />
                ))}
                <span>4 bytes</span>
              </div>
            </div>
          </td>
          <td>
            <ul className="list-disc list-inside">
              <li>Represents a predefined set of values.</li>
              <li>Examples: User roles, statuses, or category lists.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>String</td>
          <td>
            <ul className="list-disc list-inside">
              <li>
                <Code size="xs">VARCHAR(n)</Code>: Up to{" "}
                <Code size="xs">n</Code> characters
              </li>
              <li>
                <Code size="xs">TEXT</Code>: Unlimited length
              </li>
            </ul>
          </td>
          <td>
            <div className="flex flex-col gap-1">
              <div className="inline-flex items-center gap-1">
                <OneHundredBytes /> <span>~100 bytes</span>
              </div>
              <div className="inline-flex items-center gap-1">
                <OneKilobyte /> <span>~1 KB</span>
              </div>
              <div className="inline-flex items-center gap-1">
                <TenKilobytes /> <span>~10 KB</span>
              </div>
            </div>
          </td>
          <td>
            <ul className="list-disc list-inside">
              <li>Short: Usernames, titles, or short sentences.</li>
              <li>Medium: Descriptions or paragraphs of text.</li>
              <li>Long: Articles, blog posts, or large text fields.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>JSONB</td>
          <td>
            <ul className="list-disc list-inside">
              <li>
                <Code size="xs">JSONB</Code>: Variable length
              </li>
            </ul>
          </td>
          <td>
            <div className="flex flex-col gap-1">
              <div className="inline-flex items-center gap-1">
                <OneHundredBytes /> <span>~100 bytes</span>
              </div>
              <div className="inline-flex items-center gap-1">
                <OneKilobyte /> <span>~1 KB</span>
              </div>
              <div className="inline-flex items-center gap-1">
                <TenKilobytes /> <span>~10 KB</span>
              </div>
            </div>
          </td>
          <td>
            <ul className="list-disc list-inside">
              <li>Small: Simple JSON objects.</li>
              <li>Medium: Nested JSON or API responses.</li>
              <li>Large: Complex JSON with many fields.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>BYTEA</td>
          <td>
            <ul className="list-disc list-inside">
              <li>
                <Code size="xs">BYTEA</Code>: Variable length
              </li>
            </ul>
          </td>
          <td>
            <div className="flex flex-col gap-1">
              <div className="inline-flex items-center gap-1">
                <OneKilobyte /> <span>~1 KB</span>
              </div>
              <div className="inline-flex items-center gap-1">
                <OneHundredKilobytes /> <span>~100 KB</span>
              </div>
              <div className="inline-flex items-center gap-1">
                <OneMegabyte /> <span>~1 MB</span>
              </div>
            </div>
          </td>
          <td>
            <ul className="list-disc list-inside">
              <li>Small: Icons or thumbnails.</li>
              <li>Medium: Profile pictures or compressed files.</li>
              <li>Large: High-resolution images or large documents.</li>
            </ul>
          </td>
        </tr>
      </tbody>
      <tfoot className="text-lg font-medium p-4 bg-neutral-100 dark:bg-neutral-800 border-t">
        <tr>
          <td colSpan={4} className="p-4">
            <span className="font-medium">Legend:</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-4 mt-2">
              <div className="inline-flex items-center">
                <OneByte size={16} />
                <span className="ml-2">1 byte</span>
              </div>
              <div className="inline-flex items-center">
                <OneHundredBytes size={16} />
                <span className="ml-2">100 bytes</span>
              </div>
              <div className="inline-flex items-center">
                <OneKilobyte size={16} />
                <span className="ml-2">1 KB (1,024 bytes)</span>
              </div>
              <div className="inline-flex items-center">
                <TenKilobytes size={16} />
                <span className="ml-2">10 KB</span>
              </div>
              <div className="inline-flex items-center">
                <OneHundredKilobytes size={16} />
                <span className="ml-2">100 KB</span>
              </div>
              <div className="inline-flex items-center">
                <OneMegabyte size={16} />
                <span className="ml-2">1 MB (1,048,576 bytes)</span>
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
}
