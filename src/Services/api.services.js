import axios from 'axios';


const urlbase = axios.create({
    baseURL: `https://openlibrary.org`,
})


export function getAuthorList() {
    urlbase.get("/search/authors.json?q=rowling")
    .then(res => console.log(res.data.docs))
    .catch(err => console.log(err))
    
}

export function accessAuthorWorks(key) {
    const url = `/${key}/works.json`

    urlbase.get(url)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

}

export function searchBookList() {
    return urlbase.get("/search.json?title=harry+potter+stone&language=eng")
    .then(result => {
        console.log("result is...", result)
        return result
    })
    .catch(err => console.log(err))
}
