const x = 1;

const handler = (req, res) => {
    res.status(200).json({
        x
    })
}

export default handler;