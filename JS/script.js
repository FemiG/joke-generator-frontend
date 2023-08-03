const button = document.getElementById("btn1");
const output = document.getElementById("output");

var person = {
  age: 20,
  name: "Anthony",
};
console.log("Hello World");

console.log(JSON.stringify(person));
button.addEventListener("click", async (e) => {
  e.preventDefault();
  var api = "https://joke-generator-backend.onrender.com/jokes/one";

  try {
    var response = await fetch(api);
    var data = await response.json();
    console.log(data);
    var datatoHTML = `<h1>${data.jokeNumber}</h1>
        <p>${data.joke}</p>`;
    output.innerHTML = datatoHTML;
  } catch (err) {
    console.log(err);
  }
});

const postButton = document.getElementById("post_btn");

postButton.addEventListener("click", async (e) => {
  e.preventDefault();
  var number = document.getElementById("number").value;
  var joke = document.getElementById("joke").value;

  // console.log(data)
  var api = "https://joke-generator-backend.onrender.com/jokes";
  fetch(api, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      number: `${number}`,
      joke: `${joke}`,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

const patchbutton = document.getElementById("patch_btn");
patchbutton.addEventListener("click", (e) => {
  e.preventDefault();
  var number = document.getElementById("correct_number").value;
  var joke = document.getElementById("correct_joke").value;

  var api = "https://joke-generator-backend.onrender.com/jokes";
  fetch(api, {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      number: `${number}`,
      joke: `${joke}`,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log({ number, joke });
});
const deleteButton = document.getElementById("delete_btn");

deleteButton.addEventListener("click", async (e) => {
  e.preventDefault();
  var number = document.getElementById("delete_number").value;

  console.log(number);
  const deleteMethod = {
    method: "DELETE", // Method itself
    headers: {
      "Content-type": "application/json; charset=UTF-8", // Indicates the content
    },
    body: JSON.stringify({
      number,
    }),
    // No need to have body, because we don't send nothing to the server.
  };
  // Make the HTTP Delete call using fetch api
  fetch("https://joke-generator-backend.onrender.com/jokes", deleteMethod)
    .then((data) => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
    .catch((err) => console.log(err)); // Do something with the error
});
