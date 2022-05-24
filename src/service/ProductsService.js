
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
            ]
            next(products)
        })
    }
}