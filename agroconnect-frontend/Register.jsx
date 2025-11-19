// Example in Register.jsx
const [form, setForm] = useState({ name: '', email: '', password: '' });
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState('');

async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);
  setMessage('');
  try {
    const data = await registerUser(form.name, form.email, form.password);
    setMessage('Registration successful');
  } catch (err) {
    console.error(err);
    setMessage(err.message || 'Registration failed');
  } finally {
    setLoading(false);
  }
}
