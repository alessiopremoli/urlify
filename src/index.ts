
function stripLast(str: string) {
    return str.slice(0, -1);
}

function querify(queryParams?: any) {
    if (!queryParams) {
        return '';
    }
    let querify = '?';
    Object.keys(queryParams).forEach(
        q => querify = querify.concat(`${q}=${queryParams[q]}&`)
    );
    return stripLast(querify);
}

function pathsify(paths?: string[]) {
    if (!paths || paths.length === 0) {
        return '';
    }
    let pathsify = '';
    paths.forEach(p => pathsify = pathsify.concat(`${p}/`));

    return stripLast(pathsify);
}

function urlify(url: string, paths?: string[], queryParams?: any) {
    return `${url}/${pathsify(paths)}${querify(queryParams)}`
}

console.log(
    urlify(
        'https://flaviocopes.com',
        ['/how-to-remove-last-char-string-js'],
        { test: 'test', pippo: 'pippo' }
    )
)