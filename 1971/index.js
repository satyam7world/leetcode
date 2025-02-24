/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = function (n, edges, source, destination) {

    const g = Array.from({length: n}, () => []);

    for (const [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
    }
    console.log(edges);

    const visited = new Set();

    const dfs = (i) => {
        if (i === destination) {
            return true;
        }
        if (visited.has(i)) {
            return false;
        }
        visited.add(i);
        return g[i].some((x) => {
            return dfs(x);
        });
    }

    return dfs(source)
};

console.log(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2))