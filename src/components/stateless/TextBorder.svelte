<script>
    export let title
    export let fontSize = '16px'
</script>

<style>
    div {
        font-size: var(--fontSize);
        color: white;
        -webkit-background-clip: text;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
        font-weight: bold;
        letter-spacing: -1px;
    }
</style>

<div style="--fontSize:{fontSize}">{title}</div>

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
