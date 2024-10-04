<script>
    import Header from '../lib/Header.svelte';
      /** @type {import('./$types').PageData} */
      export let data;
const dateFormat = {
    month: 'short',
    day: 'numeric',
};
    
</script>

<Header data={data}/>


