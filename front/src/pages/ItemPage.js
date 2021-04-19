import React, { useCallback, useEffect, useState, useContext } from "react";
import { useHttp } from "../components/hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";
import MainItems from "../components/MainItems";

export const ItemPage = () => {
  const [items, setItems] = useState([]);
  const { loading, request } = useHttp();
  const { token } = useContext(AuthContext);

  const fetchItems = useCallback(async () => {
    try {
      const fetched = await request("/api/item/", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setItems(fetched);
    } catch (e) {}
  }, [token, request]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  if (loading) {
    return <Loader />;
  }
  return <>{!loading && <MainItems items={items} />}</>;
};

export default ItemPage;
