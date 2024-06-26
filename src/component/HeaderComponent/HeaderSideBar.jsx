"use client";

import React, { useEffect } from "react";
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";

import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "@/src/ReduxSystem/ReduxSlices/productsSlice";
import Link from "next/link";
import { handleCloseDrawer } from "@/src/ReduxSystem/ReduxSlices/headerSlice";
const HeaderSideBar = () => {
  const { categoriesData } = useSelector((state) => state.allProducts);
  const { opendrawer } = useSelector((state) => state.headerSlicee);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return (
    <div>
      <div>
        <Drawer
          open={opendrawer}
          onClose={() => dispatch(handleCloseDrawer())}
          className="shadow-none bg-main overflow-y-scroll !max-h-none ddd"
        >
          <div className="mb-2 flex items-center justify-between p-4 text-white ">
            <Typography variant="h4" className="tracking-wide">
              All Categories
            </Typography>
            <IconButton
              variant="text"
              onClick={() => dispatch(handleCloseDrawer())}
              color="white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <List className="text-white ">
            {categoriesData?.map((ele, ind) => (
              <ListItem key={ind}>
                <Link
                  href={`/category/${ele.slug}`}
                  onClick={() => dispatch(handleCloseDrawer())}
                >
                  {ele.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </div>
  );
};

export default HeaderSideBar;
