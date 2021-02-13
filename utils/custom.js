import useFetch from 'use-http'
const ENDPOINT = process.env.ENDPOINT
const PORT = process.env.PORT

function FecthUrl(props) {
    const { get, post, del } = useFetch(`${ENDPOINT}${PORT}`, {
        cachePolicy: "no-cache",
        onError: (e) => {
            console.log(e)
        }
    })
    if (props.type === 'get') {
        return get
    }
    else if (props.type === 'post') {
        return post
    }
    else if (props.type === 'del') {
        return del
    }
    else {
        return null
    }
}

export default FecthUrl

