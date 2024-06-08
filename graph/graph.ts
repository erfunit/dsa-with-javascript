interface IGraph {
  adjacencyList: { [key: string]: { [key: string]: number } };
}

export class Graph implements IGraph {
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
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B", 3);
graph.addEdge("C", "B", 5);
graph.addEdge("A", "C", 8);
graph.addEdge("D", "E", 1);

console.log(graph.getGraph);
