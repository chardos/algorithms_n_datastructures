class Graph {
    constructor() {
        this.vertices = {}
        this.edges = {}
    }

    // =============================================================================
    // Vertices
    // =============================================================================

    addVertex (node) {
        this.vertices[node] = {edges: {}}
    }

    getVertex (node) {
        return this.vertices[node] || null
    }

    containsVertices (...nodes) {
        return Object.keys(this.vertices).every(node => Boolean(this.vertices[node]))
    }

    removeVertex (node) {
        if (this.containsVertices(node)) {
            const edges = this.vertices[node].edges
            Object.keys(edges).forEach((connectedNode) => {
                this.removeEdge(node, connectedNode)
            })
            delete this.vertices[node]
        }
    }

    // =============================================================================
    // Edges
    // =============================================================================

    addEdge (startNode, endNode) {
        if (this.containsVertices(startNode, endNode)) {
            this.vertices[startNode].edges[endNode] = true
            this.vertices[endNode].edges[startNode] = true
        }
    }

    removeEdge (startNode, endNode) {
        if (this.containsVertices(startNode, endNode)) {
            delete this.vertices[startNode].edges[endNode]
            delete this.vertices[endNode].edges[startNode]
        }
    }
}






// =============================================================================
// Edges
// =============================================================================
function Old(){}
Old.prototype.addEdge = function(startNode, endNode) {
    if (this.contains(startNode, endNode)) {
        this.graph[startNode].edges[endNode] = true
        this.graph[endNode].edges[startNode] = true
    }
}



Old.prototype.containsEdge = function(startNode, endNode) {
}

// getVertex
// getVertexSet
// getEdgeSet


const graph = new Graph()
graph.addVertex('alice')
graph.addVertex('bob')
graph.addVertex('carol')
graph.addEdge('alice', 'bob')
console.log('ALICE',graph.getVertex('alice'))
console.log('BOB',graph.getVertex('bob'))
graph.removeVertex('alice')
console.log('ALICE',graph.getVertex('alice'))
console.log('BOB',graph.getVertex('bob'))
