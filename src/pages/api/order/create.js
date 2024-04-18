export default function handler(req, res) {
    if (req.method === 'POST') {



        res.status(200).json({ status: true })
    } else {
        res.status(500).json({ status: false, message: 'Only POST methods are allowed on this route' })

    }
}
