export async function fetchPets() {
  try {
    const res = await fetch('data/pets.json', {cache: "no-cache"});
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data)) throw new Error('Invalid JSON format');
    return data.map((d, i) => ({ id: Number(d.id ?? i+1), ...d }));
  } catch (err) {
    console.error('fetchPets error', err);
    throw err;
  }
}
