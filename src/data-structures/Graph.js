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
        return nodes.every(node => {
            return Boolean(this.vertices[node])
        })
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

    containsEdge (startNode, endNode) {
        if (this.containsVertices(startNode, endNode)) {
            return Boolean(this.vertices[startNode].edges[endNode])
        }
        return false;
    }
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
console.log('contains',graph.containsVertices('alice', 'bob'))
console.log('edge?',graph.containsEdge('alice', 'bob'))
graph.removeVertex('alice')
console.log('ALICE',graph.getVertex('alice'))
console.log('BOB',graph.getVertex('bob'))
console.log('contains',graph.containsVertices('alice', 'bob'))
// console.log('edge?',graph.containsEdge('alice', 'bob'))
