function Graph() {
    this.graph = {}

    return graph;
}

// =============================================================================
// Vertexes
// =============================================================================

Graph.prototype.getVertex = function(node) {
    return this.graph[node] || null
}

Graph.prototype.addVertex = function(node) {
    this.graph[node] = {edges: {}}
}

Graph.prototype.removeVertex = function(node) {
    // if (this.graph.contains(node)) {
    //     delete this.graph[node]
    // }
}

Graph.prototype.containsVertex = function(...nodes) {
    return nodes.every(node => Boolean(this.graph[node]))
}

// =============================================================================
// Edges
// =============================================================================

Graph.prototype.addEdge = function(startNode, endNode) {
    console.log(this.prototype)
    if (this.contains(startNode, endNode)) {
        this.graph[startNode].edges[endNode] = true
        this.graph[endNode].edges[startNode] = true
    }
}

Graph.prototype.removeEdge = function(startNode, endNode) {
    if (this.graph.contains(startNode, endNode)) {
        delete this.graph[startNode].edges[endNode]
        delete this.graph[endNode].edges[startNode]
    }
}

Graph.prototype.containsEdge = function(startNode, endNode) {
}

// getVertex
// getVertexSet
// getEdgeSet


const graph = new Graph()
graph.addVertex('alice')
graph.addVertex('bob')
graph.addEdge('alice', 'bob')
console.log(graph.getVertex('alice'))
