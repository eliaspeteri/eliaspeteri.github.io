/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DocumentTitle from "react-document-title";
import useResource from "../../hooks/useResource";
import Blog from "./Blog";

const apiUrl = "https://homepage-back.herokuapp.com/api";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const blogService = useResource(`${apiUrl}/posts`);

  useEffect(() => {
    blogService.getAll().then((response) => {
      if (response.status === 200) {
        setBlogs(response.data);
      }
    });
  }, []);

  if (blogs.length > 0) {
    return (
      <DocumentTitle title="Blog">
        <>
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              date={blog.date.slice(0, 10)}
              author={blog.author}
              title={blog.title}
              content={blog.content}
            />
          ))}
        </>
      </DocumentTitle>
    );
  }
  return (
    <DocumentTitle title="Loading blog...">
      <>Loading blogposts, please wait...</>
    </DocumentTitle>
  );
};

export default Blogs;
