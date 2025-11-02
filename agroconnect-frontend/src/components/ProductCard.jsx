export default function ProductCard({ name, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>₦{price}</p>
    </div>
  );
}
