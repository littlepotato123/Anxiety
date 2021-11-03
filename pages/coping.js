import useSWR from "swr";

const fetcher = (url) => fetch(url).then(res => res.json())

const cope_methods = [
    {
        title: "Breathing",
        description: "Square Breathing, Deep Breaths, Counting Breaths to 10 or 20. This can be obvious, yet most people take advantage of such a simple technique. During panic attacks and even casual moments of anxiety or stress, this technique can be useful."
    },
    {
        title: "Share your Anxiety",
        description: "Don't avoid your anxious thoughts, which can make them worse. Talk them over with a friend or family member, who can help you put them in perspective."
    },
    {
        title: "Don't Criticize Feelings",
        description: "Instead, say, \"This is a normal, healthy, response by my body to these circumstances, which are complicated, stressful, or difficult. It's OK to feel this way.\""
    },
    {
        title: "Use a Mantra",
        description: "A mantra can shift your mind away from anxious thoughts that play over and over in your head, Kissen says. An example: \"These thoughts are uncomfortable, but not dangerous,\" and \"This, too, will pass.\""
    },
    {
        title: "Redirect Nervous Energy",
        description: "Anxiety can be like a motor revving, says licensed professional counselor Lisa Henderson. \"Take control of that energy and put it somewhere else,\" says Henderson, co-founder and chief executive officer of Synchronous Health in Nashville. \"If you're sitting there worried for example, get up and walk or pace,\" she says. \"Take a few minutes to clean something. Go outside for 5 minutes. Shorts bursts of activity can release that anxious energy.\""
    },
    {
        title: "Reality Check",
        description: `On scale of 1 to 100, how likely is it that the thing that I'm anxious about will happen? Do I have good reasons to think something will go wrong? Is there a chance I'm overly worried`
    }
]

const coping = () => {
    const { data, error } = useSWR(`/api/coping`, fetcher)

    if(error) {
        return (
            <div>Error Occured</div>
        )
    }

    // Refresh Button

    if(data) {
        if(data.x) {
            return (
                <div>
                    <div className="top">
                        <p>{cope_methods[data.x - 1].title}</p>
                        <p>{cope_methods[data.x - 1].description}</p>
                    </div>
                    <button onClick={() => window.location.reload(false)}>Refresh</button>
                    <br />
                    <h3>This page generates a random coping method, since different people react and have different affects with different methods. The best way is to try different methods, even if not diagnosed with anxiety, during stressful times.</h3>
                    <ul>
                    {
                        cope_methods.map((method) => (
                            <li className="list">
                                <p>{method.title}</p>
                                <p>{method.description}</p>
                            </li>
                        ))
                    }
                    </ul>
                    <a href="https://www.webmd.com/mental-health/features/ways-to-reduce-anxiety">Sources</a>
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