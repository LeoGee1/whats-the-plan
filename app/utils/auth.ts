// export function isAuthenticated() {
//   if (typeof window !== 'undefined') {
//     const token = localStorage.getItem('token');
//     return !!token;
//   }
//   return false;
// }


export function isAuthenticated() {
  if (typeof window !== 'undefined') {
    // Dev-only bypass
    if (import.meta.env.DEV) return true;

    const token = localStorage.getItem('token');
    return !!token;
  }
  return false;
}
