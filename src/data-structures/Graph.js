function Graph() {
    this.graph = {}
}

Graph.prototype.addVertex = function(node) {
    this.graph[node] = {edges: {}}
}

Graph.prototype.contains = function(...nodes) {
    return nodes.every(node => Boolean(this.graph[node]))
}

Graph.prototype.addEdge = function(startNode, endNode) {
    if (this.graph.contains(startNode, endNode)) {
        this.graph[startNode].edges[endNode] = true
        this.graph[endNode].edges[startNode] = true
    }
}

Graph.prototype.removeEdge = function(startNode, endNode) {
}
