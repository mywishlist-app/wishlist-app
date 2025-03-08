import React, { useState } from "react";
import QRCode from "qrcode.react";
import { TwitterShareButton, TwitterIcon } from "react-share";

const WishlistApp = () => {
  const [wishlist, setWishlist] = useState([]);
  const [notWishlist, setNotWishlist] = useState([]);
  const [input, setInput] = useState("");
  const [notInput, setNotInput] = useState("");
  const [url, setUrl] = useState("");

  const addItem = (listSetter, value) => {
    if (value.trim() !== "") {
      listSetter((prev) => [...prev, value.trim()]);
    }
    setInput("");
    setNotInput("");
  };

  const generateUrl = () => {
    const data = { wishlist, notWishlist };
    const encodedData = encodeURIComponent(JSON.stringify(data));
    const shareUrl = `${window.location.origin}/wishlist?data=${encodedData}`;
    setUrl(shareUrl);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-2">差し入れリスト作成</h2>
      <div className="mb-4">
        <h3 className="font-semibold">欲しいもの</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="例: チョコレート"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={() => addItem(setWishlist, input)}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          追加
        </button>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">ほしくないもの</h3>
        <input
          type="text"
          value={notInput}
          onChange={(e) => setNotInput(e.target.value)}
          placeholder="例: ナッツ入りお菓子"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={() => addItem(setNotWishlist, notInput)}
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
        >
          追加
        </button>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">リスト</h3>
        <ul>
          {wishlist.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul>
          {notWishlist.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={generateUrl}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        URLを作成する
      </button>
      {url && (
        <div className="text-center mt-4">
          <p>共有URL:</p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            {url}
          </a>
          <QRCode value={url} className="mt-2" />
          <div className="mt-2">
            <TwitterShareButton url={url} title="私の差し入れリストをチェック！">
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistApp;
