"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormInput from "@/components/core/FormInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { dataCategory } from "@/components/helper/dataCategory";
import { apiCall } from "@/components/helper/apiCall";
import { toast } from "react-toastify";

interface ArticleData {
  objectId: string;
  title: string;
  content: string;
  category: string;
}

interface IUpdateArticleDialogProps {
  data: ArticleData;
}

const UpdateArticleDialog: React.FC<IUpdateArticleDialogProps> = ({ data }) => {
  const [title, setTitle] = React.useState(data.title);
  const [category, setCategory] = React.useState(data.category);
  const [content, setContent] = React.useState(data.content);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // Sync state when `data` changes
  React.useEffect(() => {
    setTitle(data.title);
    setCategory(data.category);
    setContent(data.content);
  }, [data]);

  const handleSave = async () => {
    setLoading(true);
    try {
      const updatedThumbnail = `https://picsum.photos/seed/${encodeURIComponent(
        title
      )}/400/300`;

      await apiCall.put(`/articles/${data.objectId}`, {
        title,
        content,
        category,
        thumbnail: updatedThumbnail,
      });

      toast.success("Artikel berhasil diperbarui!", { autoClose: 2000 });
      setOpen(false);
    } catch (error) {
      toast.error("Gagal memperbarui artikel.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg rounded-lg bg-white shadow-md space-y-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Edit Artikel
          </DialogTitle>
          <DialogDescription>
            Perbarui data artikel kamu dan klik “Simpan” jika sudah selesai.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 text-sm text-slate-700">
          {/* Title Input */}
          <div className="space-y-1">
            <label htmlFor="title" className="block font-medium">
              Judul Artikel
            </label>
            <FormInput
              // id="title"
              type="text"
              name="title"
              placeholder="Masukkan judul artikel"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Category Select */}
          <div className="space-y-1">
            <label className="block font-medium">Kategori</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih kategori" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {dataCategory.map((val) => (
                  <SelectItem key={val} value={val}>
                    {val}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Content */}
          <div className="space-y-1">
            <label htmlFor="content" className="block font-medium">
              Konten Artikel
            </label>
            <Textarea
              id="content"
              placeholder="Tulis isi artikel..."
              className="resize-none h-36"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter className="pt-2">
          <DialogClose asChild>
            <Button variant="outline" disabled={loading}>
              Batal
            </Button>
          </DialogClose>
          <Button onClick={handleSave} disabled={loading}>
            {loading ? "Menyimpan..." : "Simpan Perubahan"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateArticleDialog;
