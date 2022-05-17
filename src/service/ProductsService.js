
export default {
    getProducts() {
        return new Promise((next) => {
            const products = [
                {
                    id: 1,
                    image: "BELL_PEPPER.webp",
                    name: "BELL PEPPER",
                    price: 12.56,
                    details: "Lorem Ipsum Dolor"
                },
                {
                    id: 2,
                    image: "BELL_PEPPER.webp",
                    name: "BELL PEPPER",
                    price: 12.56,
                    details: "Lorem Ipsum Dolor"
                },
                {
                    id: 3,
                    image: "BELL_PEPPER.webp",
                    name: "BELL PEPPER",
                    price: 12.56,
                    details: "Lorem Ipsum Dolor"
                },
                {
                    id: 4,
                    image: "BELL_PEPPER.webp",
                    name: "BELL PEPPER",
                    price: 12.56,
                    details: "Lorem Ipsum Dolor"
                },
                {
                    id: 5,
                    image: "BELL_PEPPER.webp",
                    name: "BELL PEPPER",
                    price: 12.56,
                    details: "Lorem Ipsum Dolor"
                },
                {
                    id: 6,
                    image: "BELL_PEPPER.webp",
                    name: "BELL PEPPER",
                    price: 12.56,
                    details: "Lorem Ipsum Dolor"
                },
                {
                    id: 7,
                    image: "BELL_PEPPER.webp",
                    name: "BELL PEPPER",
                    price: 12.56,
                    details: "Lorem Ipsum Dolor"
                },
                {
                    id: 8,
                    image: "BELL_PEPPER.webp",
                    name: "BELL PEPPER",
                    price: 12.56,
                    details: "Lorem Ipsum Dolor"
                },
            ]
            next(products)
        })
    }
}