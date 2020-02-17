<script>
    import Button from './Button.svelte'
    import TextShadow from './stateless/TextShadow.svelte'
    import TextBorder from './stateless/TextBorder.svelte'
</script>

<style>
    @font-face {
        font-family: 'Supercell-Magic';
        font-style: normal;
        font-weight: 400;
        src: local('Supercell-Magic'), local('Supercell-Magic'),
            url(/assets/fonts/Supercell-Magic.ttf) format('ttf');
    }

    :global(*) {
        font-family: Supercell-Magic;
    }

    :global(body) {
        background: url('https://media.discordapp.net/attachments/484788432367779862/670590182625378324/ux.png');
        background-position: 0;
    }
</style>

<main>
    <TextShadow title="Enzo" />
    <TextBorder title="Juandi" fontSize="15px" />
    <TextBorder title="Coypu" />
    <h2>Start editing to see some magic happenssssss nooo!</h2>
    <Button />
</main>
