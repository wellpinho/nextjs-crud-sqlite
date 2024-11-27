import { Suspense } from "react";
import { getProducts } from "../../database/products";
import Loading from "./loading";
import { ProductCardComponent } from "@/components/product-card";

interface Props {
    id: number;
    name: string;
    image: string;
    price: number;
}

export default async function Products() {
    const products: Props[] = getProducts();

    return (
        <div className="grid lg:grid-cols-4 gap-y-2 lg:gap-y-12 gap-x-14 mx-1 lg:mx-24 my-12">
            <Suspense fallback={<Loading />}>
                {products?.map((product) => (
                    <div key={product.id} className="m-1 text-gray-600">
                        <ProductCardComponent
                            image={product.image}
                            name={product.name}
                            price={product.price}
                        />
                    </div>
                ))}
            </Suspense>
        </div>
    );
}
