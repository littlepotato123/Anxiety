export default function(_, res) {
    const x = Math.floor(Math.random() * (6)) + 1;

    res.json({
        x
    })
} 