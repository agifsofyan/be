const arrayOfObject = [
	{
		nama: 'Smith',
		hobi: 'Self Service'
	},
	{
		nama: 'Dio',
		hobi: 'Design Grafis'
	},
	{
		nama: 'Agung',
		hobi: 'Bermain Game'
	}
]

const first = arrayOfObject[0]
const last = arrayOfObject[arrayOfObject.length - 1]

const result = [{
	nama: last.nama,
	hobi: first.hobi
}]

console.log('result:', result)
