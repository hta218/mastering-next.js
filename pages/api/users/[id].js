export default (req, res) => {
	const { query: { id } } = req
	res.status(200).json({
		id,
		email: 'test@gmail.com',
		name: 'Leo'
	})
}
