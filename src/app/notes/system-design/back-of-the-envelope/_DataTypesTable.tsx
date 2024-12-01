import { Table } from "@/components/Table";
import {
  OneByte,
  OneKilobyte,
  OneHundredKilobytes,
  OneMegabyte,
  TenKilobytes,
  OneHundredBytes,
} from "@/components/_ByteScale";
import { Code } from "@/components/typography/Code";

export function DataTypesTable() {
  return (
    <Table size="sm">
      <thead>
        <tr>
          <th>Type</th>
          <th>Size</th>
          <th>Postgres Data Types</th>
          <th>Visual Scale</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Integer</td>
          <td>2, 4 or 8 bytes</td>
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
              <div className="inline-flex gap-1">
                {Array.from({ length: 2 }).map((_, i) => (
                  <OneByte key={i} />
                ))}
              </div>
              <div className="inline-flex gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <OneByte key={i} />
                ))}
              </div>
              <div className="inline-flex gap-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <OneByte key={i} />
                ))}
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
          <td>4 or 8 bytes</td>
          <td>
            <ul className="list-disc list-inside">
              <li>
                <Code size="xs">REAL</Code>: Single-precision floating point
              </li>
              <li>
                <Code size="xs">DOUBLE PRECISION</Code>: Double-precision
                floating point
              </li>
            </ul>
          </td>
          <td>
            <div className="flex flex-col gap-1">
              <div className="inline-flex gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <OneByte key={i} />
                ))}
              </div>
              <div className="inline-flex gap-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <OneByte key={i} />
                ))}
              </div>
            </div>
          </td>
          <td>Used for scientific calculations or approximate values.</td>
        </tr>
        <tr>
          <td>Timestamp</td>
          <td>8 bytes</td>
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
            <div className="inline-flex gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <OneByte key={i} />
              ))}
            </div>
          </td>
          <td>
            Used for date and time fields, with or without timezone information.
          </td>
        </tr>
        <tr>
          <td>UUID</td>
          <td>16 bytes</td>
          <td>
            <ul className="list-disc list-inside">
              <li>
                <Code size="xs">UUID</Code>
              </li>
            </ul>
          </td>
          <td>
            <div className="inline-flex gap-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <OneByte key={i} />
              ))}
            </div>
          </td>
          <td>Universally unique identifiers for distributed systems.</td>
        </tr>
        <tr>
          <td>Enum</td>
          <td>1-4 bytes</td>
          <td>
            <ul className="list-disc list-inside">
              <li>
                <Code size="xs">ENUM</Code>
              </li>
            </ul>
          </td>
          <td>
            <div className="flex flex-col gap-2">
              <OneByte />
              <div className="inline-flex items-center gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <OneByte key={i} />
                ))}
              </div>
            </div>
          </td>
          <td>
            <ul className="list-disc list-inside">
              <li>
                Small Enum: Represents a set of fewer than 256 distinct values.
              </li>
              <li>
                Larger Enum: Used for larger enumerations or when there are more
                than 256 values.
              </li>
              <li>
                Examples:
                <ul className="list-disc list-inside ml-4">
                  <li>
                    Small Enum: User roles like <Code size="xs">admin</Code>,{" "}
                    <Code size="xs">editor</Code>, <Code size="xs">viewer</Code>
                    .
                  </li>
                  <li>
                    Larger Enum: More extensive lists like country codes or
                    status values.
                  </li>
                </ul>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>String</td>
          <td>Variable length</td>
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
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2">
                <OneHundredBytes /> <span>Short (~100 bytes)</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <OneKilobyte /> <span>Medium (~1 KB)</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <TenKilobytes /> <span>Long (~10 KB)</span>
              </div>
            </div>
          </td>
          <td>
            <ul className="list-disc list-inside">
              <li>
                Short: Short text like usernames, titles, or short sentences.
              </li>
              <li>Medium: Descriptions, tweets, or paragraphs of text.</li>
              <li>Long String: Articles, blog posts, or large text fields.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>JSONB</td>
          <td>Variable length</td>
          <td>
            <ul className="list-disc list-inside">
              <li>
                <Code size="xs">JSONB</Code>
              </li>
            </ul>
          </td>
          <td>
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2">
                <OneHundredBytes /> <span>Small (~100 bytes)</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <OneKilobyte /> <span>Medium (~1 KB)</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <TenKilobytes /> <span>Large (~10 KB)</span>
              </div>
            </div>
          </td>
          <td>
            <ul className="list-disc list-inside">
              <li>
                Small: Simple JSON (e.g.,{" "}
                <Code size="xs">{`{"id":1, "name":"Alice"}`}</Code>).
              </li>
              <li>Medium: Nested JSON or API response.</li>
              <li>
                Large: Complex data with many fields or deeply nested
                structures.
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>BYTEA</td>
          <td>Variable length</td>
          <td>
            <ul className="list-disc list-inside">
              <li>
                <Code size="xs">BYTEA</Code>
              </li>
            </ul>
          </td>
          <td>
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2">
                <OneKilobyte /> <span>Small (~1 KB)</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <OneHundredKilobytes /> <span>Medium (~100 KB)</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <OneMegabyte /> <span>Large (~1 MB)</span>
              </div>
            </div>
          </td>
          <td>
            <ul className="list-disc list-inside">
              <li>Small: Thumbnails or small icons.</li>
              <li>Medium: Compressed documents or profile pictures.</li>
              <li>Large: High-resolution images or large document scans.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
