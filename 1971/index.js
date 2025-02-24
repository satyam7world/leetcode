/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = function (n, edges, source, destination) {
    const vis = new Set();

    const g = Array.from({length: n}, () => []);
    for (const [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
    }

    const dfs = i => {
        if (i === destination) {
            return true;
        }
        if (vis.has(i)) {
            return false;
        }
        vis.add(i);
        return g[i].some(dfs)
    }

    return dfs(source)
};

console.log(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2))