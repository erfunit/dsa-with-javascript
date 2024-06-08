interface IGraph {
  adjacencyList: { [key: string]: { [key: string]: number } };
}

class Graph implements IGraph {
  adjacencyList: { [key: string]: { [key: string]: number } };
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = {};
    }
  }

  addEdge(origin: string, destination: string, distance: number) {
    if (!this.adjacencyList[origin]) {
      this.adjacencyList[origin] = {};
    }
    if (!this.adjacencyList[destination]) {
      this.adjacencyList[destination] = {};
    }
    this.adjacencyList[origin][destination] = distance;
  }

  get getGraph(): typeof this.adjacencyList {
    return this.adjacencyList;
  }

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

class PriorityQueue<T> {
  private items: { value: T; priority: number }[] = [];

  enqueue(value: T, priority: number) {
    this.items.push({ value, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }

  dequeue(): T | undefined {
    return this.items.shift()?.value;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// Example usage
const graph = new Graph();

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
