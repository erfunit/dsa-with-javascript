import { Graph, PriorityQueue } from "./graph";

class DijkstraGraph extends Graph {
  dijkstra(start: string): { [key: string]: number } {
    const distances: { [key: string]: number } = {};
    const pq = new PriorityQueue<string>();

    // Initialize distances
    for (const vertex in this.adjacencyList) {
      distances[vertex] = Infinity;
    }
    distances[start] = 0;
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
      const currentVertex = pq.dequeue()!;
      const currentDistance = distances[currentVertex];

      for (const neighbor in this.adjacencyList[currentVertex]) {
        const distance = this.adjacencyList[currentVertex][neighbor];
        const newDistance = currentDistance + distance;

        if (newDistance < distances[neighbor]) {
          distances[neighbor] = newDistance;
          pq.enqueue(neighbor, newDistance);
        }
      }
    }

    return distances;
  }
}

// Example usage
const graph = new DijkstraGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B", 3);
graph.addEdge("A", "C", 8);
graph.addEdge("B", "C", 5);
graph.addEdge("B", "D", 2);
graph.addEdge("C", "D", 1);
graph.addEdge("D", "E", 1);

console.log(graph.getGraph);

const distances = graph.dijkstra("A");
console.log(distances);

export { DijkstraGraph };
