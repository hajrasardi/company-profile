"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { FaImage } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { apiCall } from "@/components/helper/apiCall";
import { toast } from "react-toastify";

import UpdateArticleDialog from "./components/UpdateArticleDialog";

const PostPage: React.FunctionComponent = () => {
  const router = useRouter();
  const articleContentRef = React.useRef<HTMLTextAreaElement>(null);
  const articleTitleRef = React.useRef<HTMLInputElement>(null);
  const articleCategoryRef = React.useRef<string | null>(null);

  const [articleList, setArticleList] = React.useState<any[]>([]);

  const getArticlesList = async () => {
    try {
      const res = await apiCall.get(
        "/articles?pageSize=100&sortBy=%60created%60%20desc"
      );
      setArticleList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem("tkn")) {
      getArticlesList();
    } else {
      router.replace("/sign-in");
    }
  }, []);

  const onDelete = async (objectId: string) => {
    try {
      if (confirm("Yakin mau menghapus ?")) {
        await apiCall.delete(`/articles/${objectId}`);
        toast.success("Delete article success", {
          autoClose: 3000,
        });
        getArticlesList();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const printArticleList = () => {
    return articleList.map((val: any, idx: number) => {
      return (
        <div
          key={idx}
          className="w-full p-4 flex items-center rounded-md bg-white cursor-pointer"
        >
          <div className="w-full rounded-e-xl">
            <h4
              className="font-bold cursor-pointer"
              onClick={() => router.push(`/article/${val.title}`)}
            >
              {val.title}
            </h4>
            <div className="w-full flex items-center justify-between">
              <div className="flex text-xs items-center gap-4">
                <h6 className="text-xs font-thin">
                  {new Date(val.created).toLocaleString()}
                </h6>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => onDelete(val.objectId)}
                >
                  Delete
                </Button>
                <UpdateArticleDialog data={val} />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const onCreateArticle = async () => {
    try {
      if (articleTitleRef.current) {
        const title = articleTitleRef.current.value;
        const response = await apiCall.post("/articles", {
          title,
          category: articleCategoryRef.current,
          thumbnail: `https://picsum.photos/seed/${encodeURIComponent(
            title
          )}/400/300`, // thumbnail otomatis
          content: articleContentRef.current?.value,
        });
        getArticlesList();
        alert("Tambah data article berhasil");
      } else {
        alert("Form article jangan sampai kosong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="timeline" className="w-full md:flex gap-4">
      <div className="lg:w-1/2 items-center">
        <div className="w-full bg-white md:p-3 rounded-lg shadow-md">
          <input
            placeholder="Title"
            className="w-full p-3 rounded-md focus:outline-none"
            ref={articleTitleRef}
            type="text"
          />
          <div className="flex items-center mt-2">
            <Select
              onValueChange={(value) => (articleCategoryRef.current = value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="Pantai">Pantai</SelectItem>
                <SelectItem value="Pegunungan">Pegunungan</SelectItem>
                <SelectItem value="Liburan">Liburan</SelectItem>
                <SelectItem value="Kuliner">Kuliner</SelectItem>
                <SelectItem value="Hotel">Hotel</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <textarea
            ref={articleContentRef}
            placeholder="Write your article content here..."
            className="w-full mt-2 p-3 rounded-md h-40 resize-none focus:outline-none"
          />
          <hr className="md:mb-4 mt-4" />
          <div className="flex p-2 justify-between items-center">
            <div className="flex gap-2">
              <FaImage size={24} color="#334156" />
            </div>
            <Button
              type="button"
              className="bg-slate-700 text-white md:px-3 md:py-0.5 text-sm rounded-full shadow"
              onClick={onCreateArticle}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 space-y-3">{printArticleList()}</div>
    </div>
  );
};

export default PostPage;
