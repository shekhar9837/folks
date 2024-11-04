'use client'

import React, { useState } from "react";
import ArticleCard from "./ArticleCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Article = () => {
  const list = [
    {
      title: "Grilled  Tomatoes at Home",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      image: "/assets/5c72c6b4f096bbbec0680ab784a5dcef.jpeg",
    },
    {
      title: "Snacks for Travel",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      image: "/assets/71e2cd1709116400deb9af41ed9aa012.jpeg",
    },
    {
      title: "Post-workout Recipes",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      image: "/assets/5a4907f80afeb54b1849b81ebf1eb5f2.jpeg",
    },
    {
      title: "How To Grill Corn",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      image: "/assets/2678ff07019c289fb72556852cc6b74f.jpeg",
    },
    {
      title: "Crunchwrap Supreme",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      image: "/assets/98fb3af9a51a3627a968ca95735063e2.jpeg",
    },
    {
      title: "Broccoli Cheese Soup",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      image: "/assets/6ae830e61504aecaf6d8b547eb08589a.jpeg",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const item_per_page = 3;

  const totalPages = Math.ceil(list.length / item_per_page);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPage = currentPage - item_per_page; 
  const indexOfFirstPage = indexOfLastPage - item_per_page;
  const currentArticles = list.slice(indexOfFirstPage, indexOfLastPage);
  console.log(indexOfLastPage,indexOfFirstPage, currentArticles )


  return (
    <div className="w-full  md:px-20 flex flex-col items-center justify-center ">
      <div className="flex items-start w-full px-20 ">
        <h1 className="text-primary text-[2rem] font-bold mb-10">
          Latest Articles
          
        </h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-4">
        {currentArticles.map((article) => (
          <ArticleCard
            key={article.title}
            title={article.title}
            desc={article.desc}
            image={article.image}
          />
        ))}
      </div>

      <div className="py-10 flex flex-row items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="border rounded-md border-black"
        >
          {" "}
          <ChevronLeft />
        </button>
        <span className="px-2">
          {currentPage}/{totalPages}
        </span>
        <button onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages }
                    className="border rounded-md border-black"


          >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Article;
