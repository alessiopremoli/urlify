function stripLast(str) {
    return str.slice(0, -1);
}
function querify(queryParams) {
    if (!queryParams) {
        return '';
    }
    var querify = '?';
    Object.keys(queryParams).forEach(function (q) { return querify = querify.concat(q + "=" + queryParams[q] + "&"); });
    return stripLast(querify);
}
function pathsify(paths) {
    if (!paths || paths.length === 0) {
        return '';
    }
    var pathsify = '';
    paths.forEach(function (p) { return pathsify = pathsify.concat(p + "/"); });
    return stripLast(pathsify);
}
function urlify(url, paths, queryParams) {
    return url + "/" + pathsify(paths) + querify(queryParams);
}
console.log(urlify('https://flaviocopes.com', ['/how-to-remove-last-char-string-js'], { test: 'test', pippo: 'pippo' }));
//# sourceMappingURL=index.js.map