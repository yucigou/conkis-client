<script>
    export let title
    export let fontSize = '35px'
    export let borderSize = '1.5px'
    export let shadowTop = '4px'
</script>

<style>
    div {
        font-family: 'Nougat';
        font-size: var(--fontSize);
        letter-spacing: -1px;
        position: relative;
    }

    .body {
        background: linear-gradient(
            to bottom,
            #ffffff 0%,
            #ffffff 50%,
            #ebebeb 51%,
            #ebebeb 100%
        );

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        -webkit-text-stroke-width: var(--borderSize);
        -webkit-text-stroke-color: black;
    }

    .shadow {
        top: var(--shadowTop);
        color: black;
        position: absolute;
        z-index: -1;
    }
</style>

<div
    style="--fontSize:{fontSize};--borderSize:{borderSize};--shadowTop:{shadowTop}">
    <span class="shadow">{title}</span>
    <span class="body">{title}</span>
</div>

<!--
div {
        font-size: 24px;
        background: linear-gradient(
            to bottom,
            #ffffff 0%,
            #ffffff 50%,
            #ebebeb 51%,
            #ebebeb 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        -webkit-text-stroke-width: 1.5px;
        -webkit-text-stroke-color: black;
        font-weight: bold;
        letter-spacing: -2px;
        position: relative;
    }
    div::after {
        position: absolute;
        top: 5px;
        left: 0;
        content: 'Enzo';
        -webkit-text-fill-color: black;
        -webkit-text-stroke-width: 0;
        z-index: -1;
    }
-->
