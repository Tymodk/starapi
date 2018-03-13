export const getPlanets = () => {
    return fetch('https://swapi.co/api/planets/').then((response) => {
        console.log(response)
        if(response.status === 200) {
            return response.json();
        }
        else
        throw new Error('Network response was not ok.');

    })
}
export const getPlanet = (id) => {
    return fetch('https://swapi.co/api/planets/' + id).then((response) => {
        if(response.status === 200) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}
export const getMovies = () => {
    return fetch('https://swapi.co/api/films/').then((response) => {
        if(response.status === 200) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}
export const getMovie = (id) => {
    return fetch('https://swapi.co/api/films/' + id).then((response) => {
        if(response.status === 200) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}
export const getPeople = () => {
    return fetch('https://swapi.co/api/people/').then((response) => {
        if(response.status === 200) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}
export const getPerson = (id) => {
    return fetch('https://swapi.co/api/people/' + id).then((response) => {
        if(response.status === 200) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}
export const getVehicles = () => {
    return fetch('https://swapi.co/api/vehicles/').then((response) => {
        if(response.status === 200) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}
export const getVehicle = (id) => {
    return fetch('https://swapi.co/api/vehicles/' + id).then((response) => {
        if(response.status === 200) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}
export const getSpecies = () => {
    return fetch('https://swapi.co/api/species/').then((response) => {
        if(response.status === 200) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}
export const getSpecy = (id) => {
    return fetch('https://swapi.co/api/species/' + id).then((response) => {
        if(response.status === 200) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}
export const getStarships = () => {
    return fetch('https://swapi.co/api/starships/').then((response) => {
        if(response.status === 200) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}
export const getStarship = (id) => {
    return fetch('https://swapi.co/api/starships/' + id).then((response) => {
        if(response.status === 200) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}
export const getCustomPlanets = () => {
    return fetch('https://infinite-dusk-58805.herokuapp.com/planets').then((response) => {
        console.log(response)
        if(response.status === 200) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}
export const addCustomPlanet = (planet) => {
    return fetch('https://infinite-dusk-58805.herokuapp.com/planets', { 
        method: 'POST',
        body: JSON.stringify(planet),
        mode: 'cors', 
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}
export const getCustomPlanet = (id) => {
    return fetch('https://infinite-dusk-58805.herokuapp.com/planets/' + id).then((response) => {
        console.log(response)
        if(response.status === 200) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}
export const updateCustomPlanet = (id, planet) => {
    return fetch('https://infinite-dusk-58805.herokuapp.com/planets/' + id, { 
        method: 'PUT', 
        body: JSON.stringify(planet),
        mode: 'cors', 
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const deathstar = (id) => {
    return fetch('https://infinite-dusk-58805.herokuapp.com/planets/' + id, { 
        method: 'DELETE',
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}





