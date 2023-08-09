
const dijkstras = require('./dijkstras.js');

const shortestPathBetween = (graph, startingVertex, targetVertex) => {
  const {distances, previous} = dijkstras(graph, startingVertex);
  let distance = distances[targetVertex.data];
  let path = [];
  let vertex = targetVertex;
  while(vertex) {
    path.unshift(vertex);
    vertex = previous[vertex.data];
  }

  return {distance, path};
};


module.exports = shortestPathBetween;
