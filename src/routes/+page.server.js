import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({fetch}) {
    
    const res = await fetch("http://admin.multirest.eu/api/restaurants");
    const data = res.json();

    if(res.ok) {
        return {data};
    }

    throw error(404, 'Not found');
}