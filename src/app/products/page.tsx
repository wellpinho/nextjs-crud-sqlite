import Link from "next/link";
import { Suspense } from "react";
import Loading from "../loading";
import { getProducts } from "../../../database/products";

export default async function Products() {
    const products = getProducts();

    return (
        <div>
            <h1>This is the products page.</h1>
            <Suspense fallback={<Loading />}>
                <Link href={"/products/apple"}>Apple</Link>
                <Link href={"/products/orange"}>Orange</Link>
                <div className="m-1">{JSON.stringify(products)}</div>
            </Suspense>
        </div>
    );
}
