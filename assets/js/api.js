
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Juliocer/Portif-lio_0.1/refs/heads/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}







