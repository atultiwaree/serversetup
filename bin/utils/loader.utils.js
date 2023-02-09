module.exports.start = (toWrite) => {
  const P = ["⊶", "⊷"];
  let x = 0;
  return setInterval(() => {
    process.stdout.write(`\r${toWrite} ${P[x++]}`);
    x %= P.length;
  }, 250);
};

module.exports.stop = (handler) => {
  clearInterval(handler);
};
