import "./App.css";
import { SortingPlace } from "./components/sortingPlace/sortingPlace";
import { ContentPlace } from "./components/contentPlace/contentPlace";
import { useEffect, useState } from "react";
import { ModalImage } from "./UI components/modalImage/modalImage";
import { Pagination } from "./UI components/pagination/pagination";
import { AlbumsPlace } from "./components/albumsPlace/albumsPlace";

function App() {
  const [pageNumber, updatePageNumber] = useState(1);
  const [sorted, setSort] = useState(false);
  const [filtered, setFilter] = useState([]);
  const [albums, updateAlbumsList] = useState([]);
  const [fetchedData, updateFetchedData] = useState([]);
  const [modal, setModal] = useState({
    opened: false,
    element: null,
  });
  let api = `https://jsonplaceholder.typicode.com/photos/?albumId=${pageNumber}`;

  const openModal = (element) => {
    setModal({ opened: true, element: element });
  };

  const filterAll = () => {
    filtered.length === 0
      ? setFilter(albums.map((el) => el.id))
      : setFilter([]);
  };

  const checkFilter = (id) => {
    filtered.indexOf(id) === -1
      ? setFilter((prevstate) => [...prevstate, id])
      : setFilter((prevstate) => prevstate.filter((el) => el !== id));
  };

  useEffect(() => {
    (async () => {
      const data = await fetch(api).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res;
        }
      });
      const dataAlbums = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      ).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res;
        }
      });
      updateAlbumsList(dataAlbums);
      updateFetchedData(data);
    })();
  }, [api]);

  useEffect(() => {
    setFilter([]);
  }, [sorted]);

  return (
    <div className="App">
      {modal.opened && (
        <ModalImage element={modal.element} setModal={setModal} />
      )}
      <SortingPlace
        filterAll={filterAll}
        setFilter={checkFilter}
        albums={albums}
        filtered={filtered}
        sorted={sorted}
        setSort={setSort}
      />
      <div
        style={sorted ? { overflowY: "scroll", padding: "30px" } : {}}
        className="content"
      >
        {sorted ? (
          <AlbumsPlace
            filtered={filtered}
            albums={albums}
            setModal={openModal}
          />
        ) : (
          <>
            <ContentPlace fetchedData={fetchedData} setModal={openModal} />
            <Pagination
              pages={albums.length}
              currentPage={pageNumber}
              setCurrentPage={updatePageNumber}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
