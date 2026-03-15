fetch("https://l9tuqx5248.execute-api.us-east-1.amazonaws.com/counter")
  .then(response => response.json())
  .then(data => {
    document.getElementById("counter").innerText = data;
  });