export const getData = async () => {
    const request = await fetch('http://httpbin.org/json')
    return await request.json();
}