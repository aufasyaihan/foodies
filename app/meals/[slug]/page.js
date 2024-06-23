export default function DetailMeal({ params }) {
  return (
    <div>
      <h1>Detail Meal</h1>
      <p>Welcome to the Detail Meal Page!</p>
      <p>{params.slug}</p>
    </div>
  );
}
