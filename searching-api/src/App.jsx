import searchImages from "./api.jsx";
import "./App.css";
import ImageList from "./components/ImageList.jsx";

import SearchHeader from "./SearchHeader";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const handle = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="App p-5 sm:p-8">
      <SearchHeader search={handle} />
      <div>
        <div>
          <ImageList imagesPlaceHolder={images} />
        </div>
      </div>
    </div>
  );
}

export default App;
