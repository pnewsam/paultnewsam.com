import { Table } from "@/components/Table";

export function BinaryDataTable() {
  return (
    <Table>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Data Type</th>
            <th>Size</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Images</td>
            <td>Thumbnail (100x100)</td>
            <td>~5-10 KB</td>
            <td>Compressed JPEG/PNG format</td>
          </tr>
          <tr>
            <td></td>
            <td>Profile picture (400x400)</td>
            <td>~50-100 KB</td>
            <td>Common size for web avatars</td>
          </tr>
          <tr>
            <td></td>
            <td>High-resolution image (1920x1080)</td>
            <td>~500 KB - 5 MB</td>
            <td>Compressed JPEG format</td>
          </tr>
          <tr>
            <td>Audio</td>
            <td>Compressed (MP3/AAC)</td>
            <td>~1 MB/min</td>
            <td>Common format for streaming music</td>
          </tr>
          <tr>
            <td></td>
            <td>Lossless (FLAC/WAV)</td>
            <td>~5-10 MB/min</td>
            <td>Higher quality, uncompressed or lightly compressed</td>
          </tr>
          <tr>
            <td>Video</td>
            <td>Low-quality video (240p)</td>
            <td>~1 MB/min</td>
            <td>Compressed MP4, H.264 format</td>
          </tr>
          <tr>
            <td></td>
            <td>Standard-quality video (720p)</td>
            <td>~10 MB/min</td>
            <td>Compressed MP4, H.264 format</td>
          </tr>
          <tr>
            <td></td>
            <td>High-quality video (1080p)</td>
            <td>~50 MB/min</td>
            <td>Compressed MP4, H.264 format</td>
          </tr>
          <tr>
            <td></td>
            <td>4K video (2160p)</td>
            <td>~300 MB/min</td>
            <td>Compressed MP4, H.264/HEVC format</td>
          </tr>
          <tr>
            <td>Documents</td>
            <td>Text file</td>
            <td>~1 KB per page</td>
            <td>Plain text format</td>
          </tr>
          <tr>
            <td></td>
            <td>PDF document</td>
            <td>~100 KB - 1 MB per page</td>
            <td>Includes embedded images, vector graphics, and text</td>
          </tr>
        </tbody>
      </table>
    </Table>
  );
}
