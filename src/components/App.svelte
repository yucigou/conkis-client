<script>
    import Button from './Button.svelte'
</script>

<style>
    @font-face {
        font-family: 'Supercell-Magic';
        font-style: normal;
        font-weight: 400;
        src: local('Supercell-Magic'), local('Supercell-Magic'),
            url(/assets/fonts/Supercell-Magic.ttf) format('ttf');
    }

    * {
        font-family: Supercell-Magic;
    }
</style>

<main>
    <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happenssssss nooo!</h2>
    <Button />
</main>
