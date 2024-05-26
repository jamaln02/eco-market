"use client";
import React from "react";
import { Button, Input } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsSearch,
  handleSearch,
} from "@/src/ReduxSystem/ReduxSlices/headerSlice";
import Link from "next/link";
const HeaderSearch = () => {
  const dispatch = useDispatch();
  const { inputValue, searchResultsData } = useSelector(
    (state) => state.headerSlicee
  );
  console.log(inputValue);
  console.log(searchResultsData);

  return (
    <div className=" relative flex">
      <Input
        label="type here"
        color="white"
        onChange={(e) => dispatch(handleSearch(e))}
        value={inputValue}
      />
      <Link href={`/search/${inputValue}`}>
        <Button
          size="sm"
          color={"white"}
          className="!absolute right-1 top-1 rounded"
          onClick={() => dispatch(getProductsSearch(inputValue))}
        >
          Search
        </Button>
      </Link>
    </div>
  );
};

export default HeaderSearch;
