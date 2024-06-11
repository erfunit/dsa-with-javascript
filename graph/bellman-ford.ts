import { Graph } from "./graph";

class BellmanFordGraph extends Graph {
  bellmanFord(start: string): { [key: string]: number } | string {
    const distances: { [key: string]: number } = {};

    // Initialize distances
    for (const vertex in this.adjacencyList) {
      distances[vertex] = Infinity;
    }
    distances[start] = 0;

    const vertices = Object.keys(this.adjacencyList);
    const edges: { origin: string; destination: string; weight: number }[] = [];

    // Collect all edges
    for (const origin of vertices) {
      for (const destination in this.adjacencyList[origin]) {
        edges.push({
          origin,
          destination,
          weight: this.adjacencyList[origin][destination],
        });
      }
    }

    // Relax edges repeatedly
    for (let i = 0; i < vertices.length - 1; i++) {
      for (const { origin, destination, weight } of edges) {
        if (distances[origin] + weight < distances[destination]) {
          distances[destination] = distances[origin] + weight;
        }
      }
    }

    // Check for negative-weight cycles
    for (const { origin, destination, weight } of edges) {
      if (distances[origin] + weight < distances[destination]) {
        return "Graph contains a negative-weight cycle 🔴";
      }
    }

    return distances;
  }
}

// Example usage
const graph = new BellmanFordGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

// TEST: nagative weight cycle =>
// graph.addEdge("A", "B", 3);
// graph.addEdge("A", "C", 8);
// graph.addEdge("B", "C", 5);
// graph.addEdge("B", "D", 2);
// graph.addEdge("C", "D", 1);
// graph.addEdge("D", "E", 1);
// graph.addEdge("E", "B", -10);

// normal and successful bellman-ford =>
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "C", -2);
graph.addEdge("B", "D", 2);
graph.addEdge("C", "D", 3);
graph.addEdge("D", "E", 2);

console.log(graph.getGraph);

const distances = graph.bellmanFord("A");
console.log(distances);

export { BellmanFordGraph };
