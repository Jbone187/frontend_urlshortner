document.getElementById("btn").addEventListener("click", request);

function request() {
  let data = document.getElementById("url").value;

  fetch("http://localhost:3000", {
    method: "POST",
    body: JSON.stringify({ url: data }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      document.getElementById("json").innerHTML = JSON.stringify(data);
    });
};
