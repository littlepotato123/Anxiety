import useSWR from "swr";

const fetcher = (url) => fetch(url).then(res => res.json())

const coping = () => {
    const { data, error } = useSWR(`/api/coping`, fetcher)

    if(error) {
        return (
            <div>
                Error occured
            </div>
        )
    }

    if (data) {
        if(data.x) {
            return (
                <div>
                    <h1>{data.x}</h1>
                </div>
            )
        }
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }
}

export default coping;