/** @type {import('./$types').PageLoad} */
import wp from "$lib/wordpress";

export async function load({ params }) {
    return {
        posts: await wp.posts().slug(params.slug)
    }
}