useEffect(() => {
  const token = localStorage.getItem('token');
  fetch('http://localhost:5000/api/dashboard', {
    headers: { Authorization: token },
  })
    .then(res => res.json())
    .then(data => setMessage(data.message))
    .catch(err => console.log(err));
}, []);