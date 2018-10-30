document.getElementById("btn").addEventListener("click", run);

// I suggest you use a more meaningful name instead of run. Try to be descriptive.
// What will this function do? Call it that.
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
    .then(function(data) {
      // remove space here.
      document.getElementById("json").innerHTML = JSON.stringify(data);
    });
}
