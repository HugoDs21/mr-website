import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({fetch, params}) {
    
    let restaurant = {}
    let nameToFind = params.slug.toUpperCase();

    const res = await fetch("http://admin.multirest.eu/api/restaurants");
    const data = await res.json();

    if(res.ok) {
        restaurant = data.find((item) => item.shortName === nameToFind)
        return restaurant;
    }

    throw error(404, 'Not found');
}