export const useFetch = async (URL: string) => {
    try {
        const resp = await fetch(URL);
        const data = await resp.json();
        return data;

    } catch (error) {
        console.error(error)
    }
}