/** @type {import('./$types').PageLoad} */
import wp from "$lib/wordpress";

export async function load() {
    return {
        posts: await wp.posts()
    }
}