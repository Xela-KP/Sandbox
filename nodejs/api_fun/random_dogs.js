const start = async () => {
  const response = await fetch("https://random.dog/woof.json");
  const data = await response.json();
  console.log(data.url);
};
for (i = 0; i < 10; i++) {
  start();
}
