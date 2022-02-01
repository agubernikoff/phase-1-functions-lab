const blockFeet = 264;
const scuberHq = 42;
function distanceFromHqInBlocks(blocks) {
  if (blocks > scuberHq) return blocks - scuberHq;
  else if (scuberHq > blocks) return scuberHq - blocks;
}
function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}
function distanceTravelledInFeet(block1, block2) {
  if (block1 > block2) return (block1 - block2) * 264;
  else return (block2 - block1) * 264;
}
function calculatesFarePrice(start, destination) {
  const distance = Math.abs((start - destination) * 264);
  if (distance <= 400) return 0;
  else if (distance >= 400 && distance <= 2000) return (distance - 400) * 0.02;
  else if (distance >= 2000 && distance < 2500) return 25;
  else return "cannot travel that far";
}
