import React, { useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import Additem from "./Additem";
import SearchItem from "./SearchItem";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";

const App = () => {
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // search
  useEffect(() => {
    const filterResult = items.filter((ele) =>
      ele.item.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filterResult.reverse());
  }, [items, search]);

  const API_URL = " https://todo-yxvv.onrender.com/todoapp";
  //  Fetch API - GET METHOD

  const fetchItem = async () => {
    try {
      const res = await axios.get(API_URL);
      console.log(res);
      const apiItem = res.data;
      setItems(apiItem);
      setIsLoading(false);
      setFetchError(null);
    } catch (err) {
      if (err.res) {
        console.log(err.res.data);
        console.log(err.res.status);
        console.log(err.res.headers);
      }
      setFetchError(err.message);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchItem();
    }, 4000);
  }, []);

  //  post method
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const listItem = { item: inputValue };
      await axios.post(API_URL, listItem);
      setInputValue("");
      fetchItem();
    } catch (err) {
      if (err.res) {
        console.log(err.res.data);
        console.log(err.res.status);
        console.log(err.res.headers);
      }
      console.log(err.message);
    }
  };

  const handleCheck = async (id, check) => {
    try {
      if (check === false) {
        const result = { checked: true };
        await axios.put(`${API_URL}/${id}`, result);
      }
      fetchItem();
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchItem();
    } catch (err) {
      if (err.res) {
        console.log(err.res.data);
        console.log(err.res.status);
        console.log(err.res.headers);
      }
      console.log(err.message);
      console.log(id);
    }
  };

  return (
    <div className="App">
      <Header title={"TODO APP"} />
      <Additem
        inputValue={inputValue}
        handleSubmit={handleSubmit}
        setInputValue={setInputValue}
      />
      <SearchItem search={search} setSearch={setSearch} />

      <main>
        {isLoading && (
          <PropagateLoader
            color={"#c72092"}
            loading={isLoading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
        {fetchError && <p>{`error : ${fetchError}`} </p>}
        {!isLoading && (
          <Content
            items={searchResult}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>

      <Footer length={items.length} />
    </div>
  );
};

export default App;
