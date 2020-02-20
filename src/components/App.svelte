<script>
    import Button from './Button.svelte'
    import TextShadow from './stateless/TextShadow.svelte'
    import TextShadow2 from './stateless/TextShadow2.svelte'
    import TextBorder from './stateless/TextBorder.svelte'
</script>

<style>
    :global(body) {
        font-family: Poppins;
        font-weight: normal;
        background: url('https://media.discordapp.net/attachments/484788432367779862/670590182625378324/ux.png');
        background-position: 0;
    }

    @font-face {
        font-family: 'Poppins';
        src: url('/assets/fonts/Poppins-Bold.woff2') format('woff2'),
            url('/assets/fonts/Poppins-Bold.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins';
        src: url('/assets/fonts/Poppins-Black.woff2') format('woff2'),
            url('/assets/fonts/Poppins-Black.woff') format('woff');
        font-weight: 700;
        font-style: bold;
    }

    @font-face {
        font-family: 'Poppins';
        src: url('/assets/fonts/Poppins-Medium.woff2') format('woff2'),
            url('/assets/fonts/Poppins-Medium.woff') format('woff');
        font-weight: 100;
        font-style: lighter;
    }

    @font-face {
        font-family: 'Nougat';
        src: url('/assets/fonts/Nougat.woff2') format('woff2'),
            url('/assets/fonts/Nougat.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    /* 
@font-face {
    font-family: 'Supercell-Magic';
    src: url('/assets/fonts/Supercell-Magic.woff2') format('woff2'),
        url('/assets/fonts/Supercell-Magic.woff') format('woff');
    font-weight: normal;
    font-style: normal;
} */
</style>

<main>
    <TextShadow title="Enzo" />
    <TextShadow2 title="Eñzó" />
    <TextShadow
        title="Enzo"
        fontSize="100px"
        borderSize="2.5px"
        shadowTop="7px" />
    <TextBorder title="Juandi" />
    <TextBorder title="Coypu" color="red" />
    <h2>Start editing to see some magic happenssssss nooo!</h2>
    <Button />
</main>
