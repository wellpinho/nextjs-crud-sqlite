import Link from "next/link";
import { Suspense } from "react";
import { getProducts } from "../../database/products";
import Loading from "./loading";

interface Props {
    id: number;
    name: string;
    image: string;
}

export default async function Products() {
    const products: Props[] = getProducts();

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-gray-700 text-4xl mb-4 font-semibold">
                This is the products page.
            </h1>
            <Suspense fallback={<Loading />}>
                <div className="m-1 text-gray-600">
                    {products?.map((product) => (
                        <div className="m-1" key={product.id}>
                            <Link href={`/product-details/${product.name}`}>
                                {product.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </Suspense>
        </div>
    );
}
