/* Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a route between two nodes. */


// In this implementation I'm checking both directions: Path from node1 -> node2 or path from node2 -> node1
class Graph {
    constructor(treeNodes) {
        this.treeNodes = this.treeNodes;
    }
}

class TreeNode {
    constructor(value) {
        this.visited = false;
        this.value = value;
        this.children = [];
    }

    setChild(child) {
        this.children.push(child);
    }
}

function hasPath(node1, node2) {
    var queue = [];
    queue.push(node1);

    while(queue.length != 0){
        var node = queue.shift();
        if (node == node2){
            return true;
        }

        node.children.forEach(element => {
            if (element.visited == false){
                element.visited = true;
                queue.push(element);
            }
        });
    }

    return false;
}

function hasPathBetweenNodes(node1, node2){
    if (hasPath(node1, node2) ==  false){
        return hasPath(node2, node1);
    }
    return true;
}

var node1 = new TreeNode(6);
var node2 = new TreeNode(4);
var node3 = new TreeNode(5);
node2.children.push(node1);
node2.children.push(node3);

var children = [];
children.push(node1);
children.push(node2);
children.push(node3);

var graph = new Graph(children);

console.log(hasPathBetweenNodes(node1, node3));