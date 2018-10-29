document.getElementById("btn").addEventListener("click", run);

function run() {
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
    .then(function(response) {
      //alert(JSON.stringify(response));
      document.getElementById("json").innerHTML = JSON.stringify(response);
    });
}
