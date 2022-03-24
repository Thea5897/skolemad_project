window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  // document;
  // .querySelectorAll(".plus")
  // .addEventListener("click", toggleBestilling);
  const buttonapril = document.querySelectorAll(".plusapril");
  buttonapril.forEach((button) =>
    button.addEventListener("click", toggleAprilBestilling)
  );

  const buttonmaj = document.querySelectorAll(".plusmaj");
  buttonmaj.forEach((button) =>
    button.addEventListener("click", toggleMajBestilling)
  );

  const buttonjuni = document.querySelectorAll(".plusjuni");
  buttonjuni.forEach((button) =>
    button.addEventListener("click", toggleJuniBestilling)
  );
}

function toggleAprilBestilling() {
  console.log("toggleBestilling");
  document.querySelector(".april").classList.add("bestilt");
  document.querySelector(".plusapril").textContent = "-";
  document
    .querySelector(".plusapril")
    .addEventListener("click", untoggleAprilBestilling);

  function untoggleAprilBestilling() {
    console.log("untoggled!");
    document.querySelector(".april").classList.remove("bestilt");
    document.querySelector(".plusapril").textContent = "+";
  }
}

function toggleMajBestilling() {
  console.log("toggleBestilling");

  document.querySelector(".maj").classList.add("bestilt");
  document.querySelector(".plusmaj").textContent = "-";
  document
    .querySelector(".plusmaj")
    .addEventListener("click", untoggleMajBestilling);

  function untoggleMajBestilling() {
    console.log("untoggled!");
    document.querySelector(".maj").classList.remove("bestilt");
    document.querySelector(".plusmaj").textContent = "+";
  }
}

function toggleJuniBestilling() {
  console.log("toggleBestilling");

  document.querySelector(".juni").classList.add("bestilt");
  document.querySelector(".plusjuni").textContent = "-";
  document
    .querySelector(".plusjuni")
    .addEventListener("click", untoggleJuniBestilling);

  function untoggleJuniBestilling() {
    console.log("untoggled!");
    document.querySelector(".juni").classList.remove("bestilt");
    document.querySelector(".plusjuni").textContent = "+";
  }
}
