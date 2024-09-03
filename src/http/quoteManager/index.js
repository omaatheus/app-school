const baseUrl = 'http://api.quotable.io'

export async function getRandomQuotes(limit = 1) {

    const response = await fetch(`${baseUrl}/quotes/random?${limit}`)

    if(!response.ok){
        throw new console.error('Deu erro');
           
    }

    return await response.json()
    
    
}