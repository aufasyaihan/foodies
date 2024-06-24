import Link from "next/link";
import React from "react";

export default function MealsPage() {
  return (
    <div>
      <h1>Meals Page</h1>
      <p>Welcome to the Meals Page!</p>
      <Link href="/meals/item-1">Item 1</Link>
      <Link href="/meals/item-2">Item 2</Link>
    </div>
  );
}
