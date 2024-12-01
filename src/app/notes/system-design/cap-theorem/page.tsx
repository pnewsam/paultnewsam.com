import { Body } from "@/components/typography/Body";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { H2 } from "@/components/typography/H2";
import { H3 } from "@/components/typography/H3";
import { Ul } from "@/components/typography/Ul";
import { Li } from "@/components/typography/Li";
import { Mark } from "@/components/typography/Mark";
import { Bold } from "@/components/typography/Bold";
import { Table } from "@/components/Table";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader title="CAP Theorem" tags={["System Design"]} />
        <Body>
          The CAP Theorem is a fundamental concept in distributed systems
          design. It states that in a distributed system, you can only achieve
          two out of three of the following guarantees: Consistency,
          Availability, and Partition tolerance.
        </Body>
        <H3>Consistency</H3>
        <Body>
          Consistency refers to ensuring that all nodes in a distributed system
          &nbsp;<Bold>see the same data at the same time</Bold>. For example,
          after a write operation, a consistent system guarantees that
          subsequent reads will reflect that write across all nodes.
        </Body>
        <Body>
          Consistency is about <Bold>Data Correctness</Bold>.
        </Body>

        <Ul>
          <Li>
            <Bold>Weak Consistency</Bold>: <Mark>DNS</Mark> is an example of
            weak consistency. Updates to DNS records take time to propagate, and
            during this propagation period, different nodes may return different
            results for the same query.
          </Li>
          <Li>
            <Bold>Strong Consistency</Bold>: <Mark>SQL databases</Mark>{" "}
            typically exhibit strong consistency. This means any successful
            write will be immediately visible in all subsequent reads, ensuring
            the system reflects the latest state.
          </Li>
        </Ul>

        <H3>Availability</H3>
        <Body>
          Availability refers to the guarantee that every request (read or
          write) receives a response, even if some nodes are unavailable.
        </Body>
        <Ul>
          <Li>
            <Bold>Weak Availability</Bold>:{" "}
            <Mark>Single-node SQL databases</Mark> have weak availability. The
            system will be unavailable for the duration of a binding
            transaction, or during maintenance and downtime.
          </Li>
          <Li>
            <Bold>Strong Availability</Bold>: <Mark>CDNs</Mark> are an example
            of strong availability. Content is replicated across many nodes, and
            even if one node goes offline, the others will continue to service
            incoming requests.
          </Li>
        </Ul>
        <Body>
          Availability is about <Bold>System Responsiveness</Bold>.
        </Body>

        <H3>Partition Tolerance</H3>
        <Body>
          Partition tolerance refers to the system&apos;s ability to continue
          functioning even when network failures occur, causing a split
          (partition) between parts of the system.{" "}
        </Body>
        <Ul>
          <Li>
            <Bold>Weak Partition Tolerance</Bold>:{" "}
            <Mark>Centralized systems</Mark> exhibit weak partition tolerance.
            If the main or master node goes down, then the system will fail.
          </Li>
          <Li>
            <Bold>Strong Partition Tolerance</Bold>:{" "}
            <Mark>Bitcoin and blockchain networks</Mark> are classic examples of
            strong partition tolerance. Any given node can go offline, because
            all other nodes replicate the same blockchain.
          </Li>
        </Ul>
        <Body>
          Partition Tolerance is about <Bold>Network Reliability</Bold>.
        </Body>

        <H2>Example Tradeoffs</H2>
        <Table>
          <thead>
            <tr>
              <th>Combination</th>
              <th>Example Systems</th>
              <th>Key Behavior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>CP (Consistency + Partition Tolerance)</b>
              </td>
              <td>Google Spanner, Zookeeper</td>
              <td>
                System blocks during a partition to maintain consistent data.
              </td>
            </tr>
            <tr>
              <td>
                <b>AP (Availability + Partition Tolerance)</b>
              </td>
              <td>Cassandra, DynamoDB, DNS</td>
              <td>
                System continues to serve requests but may return stale data.
              </td>
            </tr>
            <tr>
              <td>
                <b>CA (Consistency + Availability)</b>
              </td>
              <td>PostgreSQL, MySQL (single-node)</td>
              <td>
                System ensures correctness and availability when no partition
                exists.
              </td>
            </tr>
          </tbody>
        </Table>
      </section>
    </Container>
  );
}
