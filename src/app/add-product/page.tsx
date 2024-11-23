import { redirect } from "next/navigation";
import { createProduct } from "../../../database/products";

export default function AddProduct() {
    async function handleSubmit(formData: FormData) {
        "use server";
        const newProduct = {
            name: formData.get("name"),
            price: formData.get("price"),
            image: formData.get("image"),
        };

        createProduct(newProduct.name, newProduct.price, newProduct.name);
        redirect("/");
    }

    return (
        <div className="p-4 mx-auto max-w-xl bg-white font-[sans-serif]">
            <h1 className="text-2xl leading-7 text-gray-900 font-semibold text-center">
                Add Product
            </h1>

            <form action={handleSubmit} className="mt-8 space-y-4">
                <div className="flex gap-2">
                    <div>
                        <label className="text-gray-700">Product name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="name..."
                            className="
                                w-full
                                rounded-md
                                py-3 px-4
                                text-gray-800
                                bg-gray-100
                                focus:bg-transparent
                                text-xs
                                ring-1 ring-inset ring-gray-300
                                sm:text-md sm:leading-6
                                outline-gray-300"
                        />
                    </div>

                    <div>
                        <label className="text-gray-700">Product price</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="U$"
                            className="
                                w-full
                                rounded-md
                                py-3 px-4
                                text-gray-800
                                bg-gray-100
                                focus:bg-transparent
                                text-xs
                                ring-1 ring-inset ring-gray-300
                                sm:text-md sm:leading-6
                                outline-gray-300"
                        />
                    </div>
                </div>

                <div>
                    <label className="text-gray-700">Product image</label>
                    <input
                        type="file"
                        name="image"
                        className="
                            w-full
                            rounded-md
                            py-3 px-4
                            text-gray-800
                            bg-gray-100
                            focus:bg-transparent
                            text-xs
                            ring-1 ring-inset ring-gray-300
                            sm:text-md sm:leading-6
                            file:rounded-full file:border-0 file:bg-gray-300 file:py-1 file:px-3 file:cursor-pointer
                            hover:file:bg-green-600 hover:file:text-white
                            outline-gray-300"
                    />
                    <span className="text-xs leading-5 text-gray-600">
                        Only send images of the type:
                        <strong className="ml-1">PNG, JPG, SVG</strong>
                    </span>
                </div>

                <div className="flex gap-2">
                    <button
                        type="submit"
                        className="text-white bg-green-600 hover:bg-green-700 tracking-wide rounded-md text-sm px-4 py-3 w-full"
                    >
                        Create
                    </button>
                    <button
                        type="button"
                        className="text-white bg-gray-700 hover:bg-gray-800 tracking-wide rounded-md text-sm px-4 py-3 w-full"
                    >
                        cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
