import { Suspense } from "react";
import Loading from "@/app/loading";
import { getProducts } from "../../../../database/products";

interface Props {
    id: number;
    name: string;
    price: number;
    image: string;
}

export default function Products({ params }: { params: { slug: string } }) {
    const products: Props[] = getProducts();

    const product = products.find((prod) => prod.name === params.slug);

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-gray-700 text-4xl mb-4 font-semibold">
                This is the Product Details Page.
            </h1>
            <Suspense fallback={<Loading />}>
                <div className="m-1 text-gray-600">
                    <div className="m-1">
                        <strong>{product?.name}</strong>
                        {product?.price}
                        {product?.image}
                    </div>
                </div>
            </Suspense>
        </div>
    );
}
