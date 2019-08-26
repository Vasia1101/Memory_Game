function mix(array) {
  const arr = array.slice(0);
  for (let i = 0; i < array.length; i + 1) {
    const mixCard = Math.floor(Math.random() * (i + 1));
    const casual = arr[i];
    arr[i] = arr[mixCard];
    arr[mixCard] = casual;
  }
  return arr;
}

export default function generateCards() {
  const id = 0;
  const cards = ['1', '2', '3', '4', '5', '6'].reduce((acc, type) => {
    acc.push({
      id: id + 1,
      type,
      index: id + 5.1,
    });
    acc.push({
      id: id + 1,
      type,
      index: id + 5.1,
    });
    return acc;
  }, []);
  return mix(cards);
}
