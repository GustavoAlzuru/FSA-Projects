export const AllContacts = async () => {
    try{
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!data.ok){
            throw new Error("Error HTTP: " + data.status)
        }
        const res = data.json()
        return res
    }catch(err){
        console.error(err)
    }
}
export const contactData = async (selectedId) => {
    try{
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedId}`)
        if(!data.ok){
            throw new Error("Error HTTP: " + data.status)
        }
        const res = data.json()
        return res
    }catch(err){
        console.error(err)
    }
}