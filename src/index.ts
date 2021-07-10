const querify = (qp?: any) => qp ? `?${Object.keys(qp).map(q => `${q}=${qp[q]}`).join('&')}` : '';

const pathsify = (paths: any[]) => `/${paths.map(p => p.toString().replace(/\//g, '')).join('/')}`;

export const urlify = (url: string, paths: any | any[] = [], queryParams?: any) => {
  return `${url}${pathsify(Array.isArray(paths) ? paths : [paths])}${querify(
    queryParams
  )}`;
}