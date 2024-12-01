import { Table } from "@/components/Table";
import { OneByte, OneHundredBytes, OneKilobyte } from "@/components/_ByteScale";

export function DataTypesTable() {
  return (
    <Table size="sm">
      <thead>
        <tr>
          <th>Category</th>
          <th>Data Type</th>
          <th>Size</th>
          <th>Visual Scale</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-cyan-100 dark:bg-cyan-900/25">
          <td>Primitive Types</td>
          <td>Boolean</td>
          <td>1 byte</td>
          <td>
            <OneByte />
          </td>
          <td>
            <ul className="list-disc list-inside">
              <li>Flags</li>
              <li>Binary states</li>
            </ul>
          </td>
        </tr>
        <tr className="bg-cyan-100 dark:bg-cyan-900/25">
          <td></td>
          <td>Integer (32-bit)</td>
          <td>4 bytes</td>
          <td>
            <div className="inline-flex gap-1">
              <OneByte />
              <OneByte />
              <OneByte />
              <OneByte />
            </div>
          </td>
          <td>
            <ul className="list-disc list-inside">
              <li>IDs</li>
              <li>Counts</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Integer (64-bit)</td>
          <td>8 bytes</td>
          <td>
            <div className="inline-flex gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <OneByte key={i} />
              ))}
            </div>
          </td>
          <td>
            <ul className="list-disc list-inside">
              <li>High-precision</li>
              <li>Large range</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Floating-point (Double)</td>
          <td>8 bytes</td>
          <td>
            <div className="inline-flex gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <OneByte key={i} />
              ))}
            </div>
          </td>
          <td>Common in numerical or scientific computations</td>
        </tr>
        <tr>
          <td>Strings</td>
          <td>Small string</td>
          <td>~20 bytes</td>
          <td>
            <div className="inline-flex gap-1 flex-wrap">
              {Array.from({ length: 20 }).map((_, i) => (
                <OneByte key={i} />
              ))}
            </div>
          </td>
          <td>
            <ul className="list-disc list-inside">
              <li>e.g. Username</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Medium string</td>
          <td>~100 bytes</td>
          <td>
            <OneHundredBytes />
          </td>
          <td>
            <ul className="list-disc list-inside">
              <li>e.g. Tweet</li>
              <li>e.g. Short description</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Large string</td>
          <td>~1 KB</td>
          <td>
            <OneKilobyte />
          </td>
          <td>
            <ul className="list-disc list-inside">
              <li>e.g. Product description</li>
              <li>e.g. Blog post summary</li>
            </ul>
          </td>
        </tr>
        <tr className="bg-cyan-100 dark:bg-cyan-900/25">
          <td>IDs</td>
          <td>UUID</td>
          <td>16 bytes</td>
          <td>
            <div className="inline-flex gap-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <OneByte key={i} />
              ))}
            </div>
          </td>
          <td>Universally unique, standard across systems</td>
        </tr>
        <tr>
          <td></td>
          <td>Auto-increment ID</td>
          <td>4-8 bytes</td>
          <td>
            <div className="inline-flex gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <OneByte key={i} />
              ))}
            </div>
          </td>
          <td>Common for relational databases</td>
        </tr>
        <tr className="bg-cyan-100 dark:bg-cyan-900/25">
          <td>Timestamps</td>
          <td>Unix timestamp</td>
          <td>4-8 bytes</td>
          <td>
            <div className="inline-flex gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <OneByte key={i} />
              ))}
            </div>
          </td>
          <td>Compact format for storing time</td>
        </tr>
        <tr>
          <td></td>
          <td>ISO 8601 timestamp</td>
          <td>~20 bytes</td>
          <td>
            <div className="inline-flex gap-1 flex-wrap">
              {Array.from({ length: 20 }).map((_, i) => (
                <OneByte key={i} />
              ))}
            </div>
          </td>
          <td>Readable format for timestamps</td>
        </tr>
        <tr>
          <td>Hashes</td>
          <td>MD5</td>
          <td>16 bytes</td>
          <td>
            <div className="inline-flex gap-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <OneByte key={i} />
              ))}
            </div>
          </td>
          <td>Older hash algorithm (not secure)</td>
        </tr>
        <tr>
          <td></td>
          <td>SHA-256</td>
          <td>32 bytes</td>
          <td>
            <div className="inline-flex gap-1 flex-wrap">
              {Array.from({ length: 32 }).map((_, i) => (
                <OneByte key={i} />
              ))}
            </div>
          </td>
          <td>Commonly used for cryptographic applications</td>
        </tr>
      </tbody>
    </Table>
  );
}
