function suma(a, b) {
  if (!a || isNaN(a)) {
    throw new Error("A no es un numero!");
  }
  if (!b || isNaN(b)) {
    throw new Error("B no es un numero!");
  }

  return a + b;
}

try {
  suma(3, "potato");
} catch (e) {
  console.log("ERROR!");
}

function login(username, password) {
  const valid = username === "admin" && password === "1234";

  if (!valid) throw new Error("Invalid credentials");

  return true;
}

try {
  login("admin", "1235");
} catch (e) {
  console.log("ERROR!");
}
