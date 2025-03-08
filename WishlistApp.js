import React from "react";

export default function WishlistApp() {
  const title = "差し入れリスト作成";
  const wishlist = "欲しいもの";

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="mb-4">
        <h3 className="font-semibold">{wishlist}</h3>
      </div>
    </div>
  );
}
