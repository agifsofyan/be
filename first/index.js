const product = [
	{
		id_produk: 1,
		nama_produk: 'Huawei P30 pro'
	},
	{
		id_produk: 2,
		nama_produk: 'Huawei Nova 5T'
	}
];

const stok_produk = [
	{
		id_produk: 1,
		qty: 15
	},
	{
		id_produk: 1,
		qty: 6
	},
	{
		id_produk: 2,
		qty: 4
	},
	{
		id_produk: 2,
		qty: 18
	}
]

var result = []

product.forEach(val => {
	const getProductId = stok_produk.filter(res => res.id_produk == val.id_produk)
	if(getProductId.length > 0){
		const response = {
			nama_produk: val.nama_produk,
			total_stok: getProductId.reduce((acc, el) => {
        			return acc + el.qty;
        		}, 0)
		}

		result.push(response)
	}
})

console.log('result', result)
return result;
