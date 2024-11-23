import Link from "next/link";

export const HeaderComponent = () => {
    return (
        <div className="container mx-auto">
            <div
                className="
                h-24
                flex
                justify-between
                items-center
                text-gray-500
                font-semibold
            "
            >
                <Link href={"/"} className="hover:text-gray-900">
                    Products
                </Link>
                <Link href={"/add-product"} className="hover:text-gray-900">
                    Add Product
                </Link>
            </div>
            <hr />
        </div>
    );
};
