"use client";

import Tabs from "@/components/Tabs";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useProfile } from "../../components/useProfile";
import { Loader2, Pencil } from "lucide-react";
import DeleteButton from "@/components/DeleteButton";
import { ReactSortable } from "react-sortablejs";

const SmokeCategories = () => {
  const [categories, setCategories] = useState("");
  const [createdCategories, setCreatedCategories] = useState([]);
  const [editedCategories, setEditedCategories] = useState(null);
  const [categoryDescription, setCategoryDescription] = useState("");
  const [available, setAvailable] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    fetch("/api/smoke-categories").then((response) => {
      response.json().then((data) => {
        setCreatedCategories(data);
      });
    });
  };

  const { loading, isAdmin } = useProfile();

  if (loading)
    return (
      <div className="text-3xl font-bold text-center flex justify-center mt-10 items-center ">
        <Loader2 className="animate-spin " />
      </div>
    );
  if (!isAdmin)
    return (
      <div className="text-3xl font-bold text-center">You are not an admin</div>
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createPromise = new Promise(async (resolve, reject) => {
      const data = { name: categories, description: categoryDescription };
      if (editedCategories) {
        data._id = editedCategories._id;
      }
      const response = await fetch("/api/smoke-categories", {
        method: editedCategories ? "PUT" : "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setCategories("");
      setCategoryDescription("");
      fetchCategories();
      setEditedCategories(null);
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    toast.promise(createPromise, {
      loading: editedCategories ? "Updating Category" : "Adding Category",
      success: editedCategories ? "Category Updated" : "Category Added",
      error: editedCategories
        ? "Error Updating Category"
        : "Error Adding Category",
    });
  };

  const saveOrderSmoke = async () => {
    const orderedCategories = createdCategories.map((c, index) => ({
      _id: c._id,
      order: index,
    }));

    try {
      const response = await fetch("/api/smoke-categories/updateOrder", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderedCategories }),
      });

      if (!response.ok) {
        throw new Error("Failed to save order");
      }

      console.log("Order saved successfully");
      toast.success("Order saved successfully");
    } catch (error) {
      console.error("Error saving order:", error);
      toast.error("Error saving order");
    }
  };

  const handleDelete = async (_id) => {
    const deletePromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/smoke-categories?_id=" + _id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id }),
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(deletePromise, {
      loading: "Deleting Category",
      success: "Category Deleted",
      error: "Error Deleting Category",
    });
    fetchCategories();
  };

  return (
    <section className="mt-20 max-w-lg mx-auto">
      <Tabs isAdmin={true} />

      <h2 className="text-3xl font-bold text-center mt-2">Categories</h2>
      <form className="max-w-sm mx-auto my-10" onSubmit={handleSubmit}>
        <div className="flex gap-2 items-end">
          <div>
            <label className="text-lg font-bold mb-2 ">
              {editedCategories ? "Update Category" : "Create Category"}
              {editedCategories && (
                <>
                  : <b>{editedCategories.name}</b>
                </>
              )}
            </label>
            <input
              type="text"
              value={categories}
              autoComplete="off"
              name="category"
              onChange={(e) => setCategories(e.target.value)}
              className="w-full p-2 border border-gray-300 text-black bg-gray-200 rounded-md"
              placeholder="Category Name"
            />
            <input
              type="text"
              value={categoryDescription}
              autoComplete="off"
              name="description"
              onChange={(e) => setCategoryDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 text-black mt-2 bg-gray-200 rounded-md"
              placeholder="Category Description"
            />
          </div>

          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-full"
            >
              {editedCategories ? "Update" : "Create"}
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-full bg-gray-200 text-black"
              onClick={() => {
                setEditedCategories(null);
                setCategories("");
                setCategoryDescription("");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
        
      </form>

      <div>
        <h2 className="text-2xl mb-5 font-bold">Existing Categories:</h2>
        <button
          onClick={saveOrderSmoke}
          className="bg-red-500 text-white px-4 py-2 rounded-full mb-5"
        >
          Save
        </button>

        <ReactSortable list={createdCategories} setList={setCreatedCategories}>
          {createdCategories?.length > 0 &&
            createdCategories?.map((c) => (
              <div
                key={c._id}
                id="items"
                className="bg-gray-200 text-black border items-center shadow-md justify-between w-full p-6 mb-4 rounded-lg flex gap-2 cursor-move"
              >
                <div className="flex flex-col">
                  <p className="font-bold">{c.name}</p>
                  <p className="text-sm">{c.description}</p>
                </div>
                <div className="flex gap-4 justify-center items-center">
                  <span
                    onClick={() => {
                      setEditedCategories(c);
                      setCategories(c.name);
                      setCategoryDescription(c.description);
                    }}
                  >
                    <Pencil className="cursor-pointer hover:text-blue-500" />
                  </span>
                  <span className="">
                    <DeleteButton
                      label={""}
                      onDelete={() => handleDelete(c._id)}
                    />
                  </span>
                </div>
              </div>
            ))}
        </ReactSortable>
      </div>
    </section>
  );
};

export default SmokeCategories;
