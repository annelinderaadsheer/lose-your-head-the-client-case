/** @type {import('./$types').PageLoad} */
import wp from "$lib/wordpress";

export async function load({url}) {
    return {
        posts: await wp.posts().search(url.searchParams.get("searchterm"))
    }
}