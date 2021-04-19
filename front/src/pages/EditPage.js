import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHttp } from "../components/hooks/http.hook";
import { Loader } from "../components/Loader";
import { MainItemEdit } from "../components/MainItemEdit";
import { AuthContext } from "../context/AuthContext";

export const EditPage = () => {
  const { token } = useContext(AuthContext);
  const { request, loading } = useHttp();
  const [item, setItem] = useState(null);
  const itemId = useParams().id;

  const getItem = useCallback(async () => {
    try {
      const fetched = await request(`/api/item/${itemId}`, "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setItem(fetched);
    } catch (e) {}
  }, [token, itemId, request]);

  useEffect(() => {
    getItem();
  }, [getItem]);

  if (loading) {
    return <Loader />;
  }
  return <>{!loading && item && <MainItemEdit item={item} />}</>;
};
