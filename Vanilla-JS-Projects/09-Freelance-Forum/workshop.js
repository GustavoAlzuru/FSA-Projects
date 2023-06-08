const users = [
    {
    name: 'John',
    age:25,
    occupation: 'gardener' 
    },
    {
    name: 'Lenny',
    age:51,
    occupation: 'programmer' 
    },
    {
    name: 'Andrew',
    age:43,
    occupation: 'teacher' 
    },
    {
    name: 'Peter',
    age:81,
    occupation: 'teacher' 
    },
    {
    name: 'Anna',
    age:43,
    occupation: 'teacher' 
    },
    {
    name: 'Albert',
    age:76,
    occupation: 'programmer' 
    },
    {
    name: 'Adam',
    age:47,
    occupation: 'teacher' 
    },
    {
    name: 'Robert',
    age:72,
    occupation: 'driver' 
    }
]

function main(){
    const root = document.getElementById('root')
    const mainText = document.createElement('h1')
    mainText.textContent = 'FREELANCERS'
    const mainDiv = document.createElement('div')
    mainDiv.classList.add('container')
    const ulist = document.createElement('ul')
    root.append(mainText, mainDiv)
    mainDiv.appendChild(ulist)
    for(let user of users){
        const divEl = document.createElement('div')
        divEl.classList.add('card')
        const list = document.createElement('li')
        const title = document.createElement('h3')
        const ageUser = document.createElement('p')
        const occupationUser = document.createElement('p')
        title.textContent = user.name
        ageUser.textContent = `Age: ${user.age}`
        occupationUser.textContent = `Occupation: ${user.occupation}`
        ulist.appendChild(divEl)
        divEl.appendChild(list)
        list.append(title, ageUser, occupationUser)
    }
}

main()