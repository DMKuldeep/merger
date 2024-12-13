const TYPE_DELAY = 70;
const SEARCH_TERMS = [
  "best time to buy Co-Ords",
  "best buy Co-Ords me",
  "buy Co-Ords",
  "20% off on Co-ords",
  "fashion week",
];

function throttle(fn, limit) {
  let prm = Promise.resolve();
  return function (...args) {
    if (args[0].wait) {
      prm = prm
        .then(() => new Promise((r) => setTimeout(r, args[0].wait)))
        .then(() => Promise.resolve(args[0].cb()));
      return;
    }

    prm = prm.then(
      () =>
        new Promise((r) => {
          fn.apply(null, args);
          setTimeout(r, limit);
        })
    );
  };
}

let tickTimeout;

function tick() {
  tickTimeout = setTimeout(() => {
    const b = document.querySelector(".cursor");
    b.classList.toggle("cursor");
    tick();
  }, 500);
}

tick();

function lockCursorOn() {
  clearTimeout(tickTimeout);
  tickTimeout = setTimeout(tick, 0);
  document.querySelector(".cursor").classList.add("cursor");
}

const execute = throttle(function (cmd) {
  const before = document.getElementById("before");
  const after = document.getElementById("after");

  lockCursorOn();

  if (cmd.type === "move-left") {
    const btext = before.innerHTML;
    before.innerHTML = btext.slice(0, -1);
    after.innerHTML = btext[btext.length - 1] + after.innerHTML;
    return;
  }

  if (cmd.type === "move-right") {
    const atext = after.innerHTML;
    before.innerHTML += atext[0];
    after.innerHTML = atext.slice(1);
    return;
  }

  if (cmd.type === "delete-before") {
    before.innerHTML = before.innerHTML.slice(0, -1);
    return;
  }

  if (cmd.type === "insert-before") {
    before.innerHTML = before.innerHTML + cmd.char;
    return;
  }

  if (cmd.type === "insert-after") {
    after.innerHTML = cmd.char + after.innerHTML;
    return;
  }
}, TYPE_DELAY);

function animateEdit(words) {
  const before = document.getElementById("before");
  const after = document.getElementById("after");
  before.innerHTML = words[0];
  execute({
    wait: 2000,
    cb: () => editOne(0),
  });

  function editOne(idx) {
    let turing = [];

    const route = edit({
      actual: words[idx],
      desired: words[(idx + 1) % words.length],
    });

    let deleteCount = 0;
    let inserts = [];

    for (const cmd of route) {
      if (cmd.type === "delete") {
        deleteCount++;
      } else if (cmd.type === "insert" || cmd.type === "replace") {
        if (cmd.type === "replace") deleteCount++;
        inserts.unshift({
          type: "insert-before",
          char: cmd.char,
        });
      }
    }

    for (let i = 0; i < deleteCount; i++) turing.push({ type: "delete-before" });
    turing.push(...inserts);
    turing.push({
      wait: 2000,
      cb: () => editOne((idx + 1) % words.length),
    });

    turing.forEach(execute);
  }
}

function edit({ actual, desired }) {
  const ops = [];
  const maxLength = Math.max(actual.length, desired.length);
  for (let i = 0; i < maxLength; i++) {
    if (actual[i] !== desired[i]) {
      if (i < actual.length) ops.push({ type: "delete" });
      if (i < desired.length) ops.push({ type: "insert", char: desired[i] });
    }
  }
  return ops;
}

animateEdit(SEARCH_TERMS);